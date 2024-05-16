import { useEffect, useState } from "react";

export default function AboutCard({
    text = "",
    h1 = "",
    small = false,
    indexIn = 0,
    indexTotal = 0,
    animationInProgress = false,
    setAnimationInProgress = () => {},
    initialAnimationDelay = 0.5,
}) {
    const [index, setIndex] = useState(indexIn);
    const [animationStarted, setAnimationStarted] = useState(false);
    const [initialAnimation, setInitialAnimation] = useState(
        initialAnimationDelay
    );

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
            className={`about-card ${animationStarted ? "in-motion" : ""} ${
                initialAnimation !== 0 ? "initial-animation" : ""
            } center`}
            style={{
                zIndex: index,
                pointerEvents: animationInProgress ? "none" : "auto",
                animationDelay: `${initialAnimation}s`,
            }}
            onClick={startAnimation}
            onAnimationEnd={() => {
                setAnimationStarted(false);
                setInitialAnimation(0);
            }}
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
