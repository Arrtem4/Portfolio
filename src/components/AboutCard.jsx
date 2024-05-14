import { useEffect, useRef, useState } from "react";

export default function AboutCard({ text = "", indexIn = 0 }) {
    const [index, setIndex] = useState(indexIn);
    const [animationStarted, setAnimationStarted] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if (animationStarted) {
            const timerIndex = setTimeout(() => {
                setIndex((prevIndex) => prevIndex - 5);
            }, 1000);
            return () => {
                clearTimeout(timerIndex);
            };
        }
    }, [animationStarted]);

    const startAnimation = () => {
        setAnimationStarted(true);
    };

    return (
        <div
            ref={cardRef}
            className={`about-card ${
                animationStarted ? "in-motion" : ""
            } center`}
            style={{ zIndex: index }}
            onClick={startAnimation}
            onAnimationEnd={() => setAnimationStarted(false)}
        >
            {text}
        </div>
    );
}
