import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three/examples/jsm/libs/tween.module.js";

export const SamanthaModel = () => {
    const group = useRef<Group | null>(null);
    const { scene } = useGLTF("/samantha.glb");

    return (
        <group
            ref={group}
            dispose={null}
            position={[-0.25, -0.25, 0.25]}
            scale={[1.2, 1.2, 1.2]}
            rotation={[0, Math.PI / 6, 0]}
        >
            <primitive object={scene} />
        </group>
    );
};