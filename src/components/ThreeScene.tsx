
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.6]} scale={1}>
      <meshStandardMaterial 
        color="#6366f1" 
        emissive="#3730a3" 
        emissiveIntensity={0.1}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const AnimatedBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
      <meshStandardMaterial 
        color="#ec4899" 
        emissive="#be185d" 
        emissiveIntensity={0.1}
        roughness={0.2}
        metalness={0.7}
      />
    </Box>
  );
};

const SceneContent = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#6366f1" />
      
      <AnimatedSphere position={[2, 1, 0]} />
      <AnimatedBox position={[-2, -1, 1]} />
      <AnimatedSphere position={[0, 2, -1]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const LoadingFallback = () => (
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-3 animate-pulse"></div>
      </div>
    </div>
  </div>
);

export const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          gl={{ 
            antialias: false,
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
