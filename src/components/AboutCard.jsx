import { useState } from "react";

export default function AboutCard({ text = "", indexIn = 0 }) {
    const [index, setIndex] = useState(indexIn);
    return (
        <div
            className="about-card center"
            style={{ zIndex: index }}
            onClick={() => setIndex(index - 5)}
        >
            {text}
        </div>
    );
}
