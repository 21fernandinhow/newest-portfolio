import { useProgress } from "@react-three/drei";
import { HomePage } from "../pages/HomePage";

export const GlobalLoader = () => {
    const { progress } = useProgress();

    return (
        <div className="global-loader">
            <HomePage />
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${progress.toFixed(0)}%` }}
                />
            </div>
            <div className="progress-text">{progress.toFixed(0)}%</div>
        </div>
    );
};