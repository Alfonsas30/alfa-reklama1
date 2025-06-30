
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, MeshDistortMaterial, Float, Text, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingOrb = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[0.8 * scale]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const GeometricShape = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.008;
    }
  });

  return (
    <Box ref={meshRef} position={position} rotation={rotation} args={[1.2, 1.2, 1.2]}>
      <meshStandardMaterial
        color="#ff6b6b"
        metalness={0.9}
        roughness={0.1}
        emissive="#ff3030"
        emissiveIntensity={0.1}
      />
    </Box>
  );
};

const SceneContent = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[0, 10, -10]} intensity={0.8} color="#f59e0b" />
      
      <FloatingOrb position={[3, 1, 0]} color="#4ade80" scale={1.2} />
      <FloatingOrb position={[-3, -1, 2]} color="#3b82f6" scale={0.8} />
      <FloatingOrb position={[0, 2, -2]} color="#f59e0b" scale={1} />
      <FloatingOrb position={[2, -2, 1]} color="#ef4444" scale={0.9} />
      
      <GeometricShape position={[-2, 1, -1]} rotation={[0.5, 0.3, 0.2]} />
      <GeometricShape position={[1, 3, 1]} rotation={[0.2, 0.8, 0.1]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const LoadingFallback = () => (
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mx-auto mb-4 animate-spin"></div>
        <div className="text-white/70 text-sm">Kraunama...</div>
      </div>
    </div>
  </div>
);

export const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  );
};
