import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingObjectsProps {
  quality: 'ultra' | 'high' | 'medium' | 'low';
}

export const FloatingObjects: React.FC<FloatingObjectsProps> = React.memo(({ quality }) => {
  const group = useRef<THREE.Group>(null);
  
  const objectCount = quality === 'low' ? 3 : (quality === 'ultra' ? 12 : 7);

  const objects = useMemo(() => {
    const objs = [];
    const geometries = [
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(1),
      new THREE.IcosahedronGeometry(1)
    ];

    for (let i = 0; i < objectCount; i++) {
      objs.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10 - 2
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.2,
        geometry: geometries[Math.floor(Math.random() * geometries.length)],
        speed: Math.random() * 0.5 + 0.1
      });
    }
    return objs;
  }, [objectCount]);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    
    group.current.children.forEach((child, i) => {
      const obj = objects[i];
      child.rotation.x = obj.rotation[0] + time * obj.speed;
      child.rotation.y = obj.rotation[1] + time * obj.speed;
      child.position.y = obj.position[1] + Math.sin(time + i) * 0.5;
    });
  });

  return (
    <group ref={group}>
      {objects.map((obj, i) => (
        <mesh
          key={i}
          position={obj.position}
          scale={obj.scale}
          geometry={obj.geometry}
        >
          <meshStandardMaterial
            color="#111214"
            metalness={0.9}
            roughness={0.1}
            emissive="#FF6A00"
            emissiveIntensity={0.1}
          />
          {quality !== 'low' && (
            <lineSegments>
              <edgesGeometry args={[obj.geometry]} />
              <lineBasicMaterial color="#FF6A00" transparent opacity={0.3} />
            </lineSegments>
          )}
        </mesh>
      ))}
    </group>
  );
});

FloatingObjects.displayName = 'FloatingObjects';

export default FloatingObjects;

