import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PortalProps {
  quality: 'ultra' | 'high' | 'medium' | 'low';
}

export const Portal: React.FC<PortalProps> = React.memo(({ quality }) => {
  const portalRef = useRef<THREE.Group>(null);
  
  const detail = quality === 'low' ? 32 : (quality === 'medium' ? 64 : 128);

  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={portalRef} position={[0, 0, -5]}>
      {/* Inner glowing core */}
      <mesh>
        <torusGeometry args={[4, 0.2, 16, detail]} />
        <meshStandardMaterial
          color="#FF6A00"
          emissive="#FF6A00"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      
      {/* Volumetric glow effect */}
      {quality !== 'low' && (
        <mesh>
          <torusGeometry args={[4, 0.5, 16, detail]} />
          <meshBasicMaterial
            color="#FF6A00"
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Energy Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.5, 0.02, 8, detail]} />
        <meshBasicMaterial color="#FF8A1F" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={0.9}>
        <torusGeometry args={[4.5, 0.01, 8, detail]} />
        <meshBasicMaterial color="#D9A441" opacity={0.5} transparent />
      </mesh>
    </group>
  );
});

Portal.displayName = 'Portal';

export default Portal;

