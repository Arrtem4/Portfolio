import { useState } from "react";

export default function Card({ image }) {
    const [rotate, setRotate] = useState(false);
    return (
        <div
            className={`card ${rotate ? "rotate" : ""}`}
            onClick={() => setRotate(!rotate)}
            onMouseOut={() => {
                if (rotate) {
                    setRotate(false);
                }
            }}
        >
            <div className="card-front">
                <img src={image} className="card-front_img"></img>
            </div>
            <div className="card-back"></div>
        </div>
    );
}
