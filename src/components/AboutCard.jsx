import { useEffect, useState } from "react";

export default function AboutCard({
    text = "",
    indexIn = 0,
    animationInProgress,
    setAnimationInProgress,
}) {
    const [index, setIndex] = useState(indexIn);
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        if (animationStarted) {
            setAnimationInProgress(true);
            const timerIndex = setTimeout(() => {
                setIndex((prevIndex) => prevIndex - 5);
                setAnimationInProgress(false);
            }, 800);
            return () => {
                clearTimeout(timerIndex);
            };
        }
    }, [animationStarted, setAnimationInProgress]);

    const startAnimation = () => {
        setAnimationStarted(true);
    };

    return (
        <div
            className={`about-card ${
                animationStarted ? "in-motion" : ""
            } center`}
            style={{
                zIndex: index,
                pointerEvents: animationInProgress ? "none" : "auto",
            }}
            onClick={startAnimation}
            onAnimationEnd={() => setAnimationStarted(false)}
        >
            {text}
        </div>
    );
}
