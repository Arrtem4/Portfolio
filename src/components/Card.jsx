import { useState } from "react";

export default function Card({
    image = "",
    name = "",
    description = "",
    delay = 0,
}) {
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
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="card-front center">
                <img
                    src={image}
                    alt="skill-image"
                    className="card-front_img"
                ></img>
            </div>
            <div className="card-back">
                <p className="card-back_name">{name}</p>

                <div className="card-back_description center">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
