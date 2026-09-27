import React, { Suspense, ErrorBoundary, Component, ReactNode, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import { Particles } from './Particles';
import { Portal } from './Portal';
import { FloatingObjects } from './FloatingObjects';
import { Environment3D } from './Environment3D';
import { WebGLFallback } from './WebGLFallback';

interface HeroSceneProps {
  quality?: 'ultra' | 'high' | 'medium' | 'low';
}

class CanvasErrorBoundary extends Component<{children: ReactNode, fallback: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode, fallback: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const CameraRig: React.FC = () => {
  const { camera, pointer } = useThree();
  
  useFrame(() => {
    // Subtle camera movement based on mouse
    const targetX = pointer.x * 2;
    const targetY = pointer.y * 1;
    
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, -5);
  });

  return null;
};

export const HeroScene: React.FC<HeroSceneProps> = ({ quality = 'high' }) => {
  const [isSupported, setIsSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsSupported(!!gl);
    } catch (e) {
      setIsSupported(false);
    }
  }, []);

  if (isSupported === false) {
    return <WebGLFallback />;
  }

  if (isSupported === null) {
    return <div className="absolute inset-0 bg-[#050505]" />; // Loading state
  }

  const dpr = window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 1;

  return (
    <div className="absolute inset-0 w-full h-full bg-[#050505] z-0 overflow-hidden">
      <CanvasErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          dpr={dpr}
          gl={{ 
            antialias: quality !== 'low',
            powerPreference: 'high-performance',
            alpha: false
          }}
          camera={{ position: [0, 0, 5], fov: 60 }}
        >
          <color attach="background" args={['#050505']} />
          <fog attach="fog" args={['#050505', 5, 20]} />

          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
            <CameraRig />

            <ambientLight intensity={0.2} color="#D9A441" />
            <pointLight position={[0, 0, -5]} intensity={2} color="#FF6A00" distance={15} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} color="#D9A441" />

            <Environment3D quality={quality} />
            <Portal quality={quality} />
            <FloatingObjects quality={quality} />
            <Particles quality={quality} />

            {quality !== 'low' && (
              <Stars 
                radius={50} 
                depth={50} 
                count={quality === 'ultra' ? 5000 : 2000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={1} 
              />
            )}
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default HeroScene;

