import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  quality: 'ultra' | 'high' | 'medium' | 'low';
}

export const Particles: React.FC<ParticlesProps> = React.memo(({ quality }) => {
  const points = useRef<THREE.Points>(null);

  const count = useMemo(() => {
    switch (quality) {
      case 'ultra': return 500;
      case 'high': return 300;
      case 'medium': return 150;
      case 'low': return 50;
      default: return 150;
    }
  }, [quality]);

  const [positions, phases] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return [positions, phases];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const time = state.clock.getElapsedTime();
    const positionsArray = points.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      // Float upward slowly
      positionsArray[i * 3 + 1] += 0.01;
      
      // Slight random drift
      positionsArray[i * 3] += Math.sin(time + phases[i]) * 0.005;
      
      // Reset if too high
      if (positionsArray[i * 3 + 1] > 10) {
        positionsArray[i * 3 + 1] = -10;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#D9A441"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
});

Particles.displayName = 'Particles';

export default Particles;

