import { useEffect, useState } from "react";

export default function AboutCard({
    text = "",
    h1 = "",
    small = false,
    indexIn = 0,
    indexTotal = 0,
    animationInProgress,
    setAnimationInProgress,
}) {
    const [index, setIndex] = useState(indexIn);
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        if (animationStarted) {
            setAnimationInProgress(true);
            const timerIndex = setTimeout(() => {
                setIndex((prevIndex) => prevIndex - indexTotal);
                setAnimationInProgress(false);
            }, 800);
            return () => {
                clearTimeout(timerIndex);
            };
        }
    }, [animationStarted, setAnimationInProgress, indexTotal]);

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
            <div className="about-card_filter"></div>
            <div className="about-card_text center">
                <p className="about-card_text_h1">{h1}</p>
                <p className={`about-card_text_p ${small ? "small" : ""}`}>
                    {text}
                </p>
            </div>
        </div>
    );
}
