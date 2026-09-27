import React, { useMemo } from 'react';
import * as THREE from 'three';

interface Environment3DProps {
  quality: 'ultra' | 'high' | 'medium' | 'low';
}

export const Environment3D: React.FC<Environment3DProps> = React.memo(({ quality }) => {
  const detail = quality === 'low' ? 8 : (quality === 'medium' ? 16 : 32);

  const mountains = useMemo(() => {
    return [
      { position: [-8, -2, -15], scale: [4, 6, 4] as [number, number, number] },
      { position: [8, -2, -12], scale: [3, 5, 3] as [number, number, number] },
      { position: [-12, -2, -10], scale: [3, 4, 3] as [number, number, number] },
      { position: [10, -2, -8], scale: [2, 3, 2] as [number, number, number] },
    ];
  }, []);

  const mountainMaterial = useMemo(() => (
    new THREE.MeshStandardMaterial({
      color: '#050505',
      metalness: 0.8,
      roughness: 0.4,
    })
  ), []);

  return (
    <group>
      {/* Ground */}
      <mesh position={[0, -2, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100, detail, detail]} />
        <meshStandardMaterial
          color="#050505"
          metalness={0.9}
          roughness={0.2}
          wireframe={quality === 'ultra'}
          transparent={quality === 'ultra'}
          opacity={0.05}
        />
      </mesh>
      <mesh position={[0, -2.1, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#050505"
        />
      </mesh>

      {/* Mountains */}
      {mountains.map((m, i) => (
        <mesh key={i} position={m.position as [number, number, number]} scale={m.scale}>
          <coneGeometry args={[1, 1, detail]} />
          <primitive object={mountainMaterial} attach="material" />
        </mesh>
      ))}
    </group>
  );
});

Environment3D.displayName = 'Environment3D';

export default Environment3D;

