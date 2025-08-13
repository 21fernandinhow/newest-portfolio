import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SamanthaModel } from "./SamanthaModel";

export const Samantha = () => (
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
            <Suspense fallback={null}>
                <SamanthaModel />
            </Suspense>
        </Canvas>
    </div>
);
