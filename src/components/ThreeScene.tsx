import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Octahedron, Cone, Torus, MeshDistortMaterial, Float, Environment, Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingOrb = ({ position, color, scale = 1, speed = 1 }: { position: [number, number, number], color: string, scale?: number, speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 * speed) * 0.8;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.4 * speed) * 0.3;
    }
  });

  return (
    <Float speed={3 * speed} rotationIntensity={2} floatIntensity={3}>
      <Sphere ref={meshRef} position={position} args={[0.6 * scale]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.5}
          speed={3 * speed}
          roughness={0.0}
          metalness={1}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
};

const GeometricShape = ({ position, rotation, shapeType = 'box' }: { position: [number, number, number], rotation: [number, number, number], shapeType?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
    }
  });

  if (shapeType === 'octahedron') {
    return (
      <Octahedron ref={meshRef} position={position} rotation={rotation} args={[1]}>
        <meshStandardMaterial
          color="#ff6b6b"
          metalness={0.9}
          roughness={0.1}
          emissive="#ff3030"
          emissiveIntensity={0.2}
        />
      </Octahedron>
    );
  }

  if (shapeType === 'cone') {
    return (
      <Cone ref={meshRef} position={position} rotation={rotation} args={[0.8, 1.5, 8]}>
        <meshStandardMaterial
          color="#ff6b6b"
          metalness={0.9}
          roughness={0.1}
          emissive="#ff3030"
          emissiveIntensity={0.2}
        />
      </Cone>
    );
  }

  return (
    <Box ref={meshRef} position={position} rotation={rotation} args={[1, 1, 1]}>
      <meshStandardMaterial
        color="#ff6b6b"
        metalness={0.9}
        roughness={0.1}
        emissive="#ff3030"
        emissiveIntensity={0.2}
      />
    </Box>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4ade80"
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

const MovingTorus = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 1.5;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * 0.3) * 1;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.3, 16, 100]}>
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Torus>
  );
};

const SceneContent = () => {
  return (
    <>
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={1000} factor={7} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#4ade80" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[0, 10, -10]} intensity={1.8} color="#f59e0b" />
      <pointLight position={[5, -5, 8]} intensity={1.2} color="#ef4444" />
      <pointLight position={[-8, 8, -5]} intensity={1.4} color="#8b5cf6" />
      
      <Particles />
      
      {/* Multiple floating orbs with different speeds */}
      <FloatingOrb position={[3, 1, 0]} color="#4ade80" scale={1.2} speed={1.2} />
      <FloatingOrb position={[-3, -1, 2]} color="#3b82f6" scale={0.8} speed={0.8} />
      <FloatingOrb position={[0, 2, -2]} color="#f59e0b" scale={1} speed={1.5} />
      <FloatingOrb position={[2, -2, 1]} color="#ef4444" scale={0.9} speed={0.9} />
      <FloatingOrb position={[-2, 3, -1]} color="#8b5cf6" scale={1.1} speed={1.3} />
      <FloatingOrb position={[4, -1, 3]} color="#06b6d4" scale={0.7} speed={1.8} />
      <FloatingOrb position={[-4, 1, -3]} color="#f97316" scale={1.3} speed={0.7} />
      <FloatingOrb position={[1, -3, 0]} color="#22c55e" scale={0.9} speed={1.4} />
      
      {/* Various geometric shapes */}
      <GeometricShape position={[-2, 1, -1]} rotation={[0.5, 0.3, 0.2]} shapeType="box" />
      <GeometricShape position={[1, 3, 1]} rotation={[0.2, 0.8, 0.1]} shapeType="octahedron" />
      <GeometricShape position={[3, -1, -2]} rotation={[0.1, 0.4, 0.6]} shapeType="cone" />
      <GeometricShape position={[-1, -2, 2]} rotation={[0.7, 0.2, 0.3]} shapeType="box" />
      <GeometricShape position={[0, 1, 3]} rotation={[0.3, 0.6, 0.4]} shapeType="octahedron" />
      
      {/* Moving torus shapes */}
      <MovingTorus position={[0, 0, 0]} color="#ec4899" />
      <MovingTorus position={[2, 2, 2]} color="#06b6d4" />
      <MovingTorus position={[-2, -2, -2]} color="#10b981" />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const LoadingFallback = () => (
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
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
    </div>
  );
};
