
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.8]} scale={1.2}>
      <meshStandardMaterial 
        color="#6366f1" 
        emissive="#3730a3" 
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
  );
};

const AnimatedBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial 
        color="#ec4899" 
        emissive="#be185d" 
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.8}
      />
    </Box>
  );
};

const AnimatedTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 1.5) * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.4, 16, 100]}>
      <meshStandardMaterial 
        color="#10b981" 
        emissive="#047857" 
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.9}
      />
    </Torus>
  );
};

export const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        
        <AnimatedSphere position={[3, 2, 0]} />
        <AnimatedBox position={[-3, -1, 2]} />
        <AnimatedTorus position={[1, -2, -1]} />
        <AnimatedSphere position={[-2, 3, -2]} />
        <AnimatedBox position={[4, -3, 1]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
