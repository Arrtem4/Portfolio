import { useState } from "react";

export default function ContactItem({
    name = "",
    image = "",
    text = "",
    link = "",
    delay = 1,
}) {
    const [animated, setAnimated] = useState(true);
    return (
        <div className="contact-item">
            <a
                className="contact-item_body"
                href={name === "mail" ? `mailto:${link}` : link}
                target="_blank"
            >
                <div
                    className={`contact-item_body_img-wrapper ${
                        animated ? "animated" : ""
                    } center`}
                    style={{ animationDelay: `${delay}s` }}
                    onAnimationEnd={() => setAnimated(false)}
                >
                    <img src={image} alt="contact-image"></img>
                </div>
                <p
                    className={`contact-item_body_text ${
                        animated ? "animated" : ""
                    }`}
                    style={{ animationDelay: `${delay + 0.3}s` }}
                >
                    {text}
                </p>
            </a>
        </div>
    );
}
