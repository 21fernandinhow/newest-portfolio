import { useProgress } from "@react-three/drei";
import { HomePage } from "../pages/HomePage";

export const GlobalLoader = () => {
    const { progress } = useProgress();

    return (
        <div className="global-loader">
            <HomePage />
            <div className="spinner" />
            <div className="progress-text">{progress.toFixed(0)}%</div>
        </div>
    );
};