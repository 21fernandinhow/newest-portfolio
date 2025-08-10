import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Group } from "three";
import './style.scss'

export const Samantha = () => {
    const group = useRef<Group | null>(null);
    const { scene } = useGLTF("/samantha.glb");

    return (
        <div id="samantha">
            <Canvas camera={{ position: [0, 0, 2] }} >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 3}
                    maxAzimuthAngle={Math.PI / 3}
                />
                <group
                    ref={group}
                    dispose={null}
                    position={[-0.25, -0.25, 0.25]}
                    scale={[1.2, 1.2, 1.2]}
                    rotation={[0, Math.PI / 6, 0]}
                >
                    <primitive object={scene} />
                </group>
            </Canvas>
        </div>
    );
};