import { useState } from "react";

export default function Card({ image = "", name = "", description = "" }) {
    const [rotate, setRotate] = useState(false);
    return (
        <div
            className={`card ${rotate ? "rotate" : ""} page-enter`}
            onClick={() => setRotate(!rotate)}
            onMouseOut={() => {
                if (rotate) {
                    setRotate(false);
                }
            }}
        >
            <div className="card-front">
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
