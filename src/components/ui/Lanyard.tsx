/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import './Lanyard.css';

// Simple 3D Card component
function Card3D() {
    const gltf = useGLTF('https://cdn.tinyglb.com/models/8c4e98f20d4e4c5081e6a4a5c2d0f28a.glb');

    return (
        <group position={[0, 0, 0]} rotation={[0.2, 0.3, 0]}>
            <primitive object={gltf.scene} scale={2.5} />
        </group>
    );
}

export default function Lanyard({ position = [0, 0, 5], fov = 50 }: any) {
    return (
        <div className="lanyard-wrapper">
            <Canvas
                camera={{ position: position as any, fov: fov }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}
                onCreated={({ gl }) => {
                    gl.setClearColor(new THREE.Color(0x000000), 0);
                    gl.toneMapping = THREE.ACESFilmicToneMapping;
                    gl.toneMappingExposure = 1;
                }}
            >
                <Suspense fallback={
                    <mesh>
                        <sphereGeometry args={[1, 16, 16]} />
                        <meshStandardMaterial color="white" wireframe />
                    </mesh>
                }>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    <Card3D />

                    <OrbitControls
                        enablePan={false}
                        enableZoom={true}
                        minDistance={3}
                        maxDistance={15}
                        autoRotate
                        autoRotateSpeed={0.5}
                    />

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
            <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-8">
                <p className="text-zinc-500 text-xs">Drag to rotate • Scroll to zoom</p>
            </div>
        </div>
    );
}
