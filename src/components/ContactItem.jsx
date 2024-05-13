export default function ContactItem({
    name = "",
    image = "",
    text = "",
    link = "",
}) {
    return (
        <div className="contact-item">
            <a
                className="contact-item_body"
                href={name === "mail" ? `mailto:${link}` : link}
                target="_blank"
            >
                <div className="contact-item_body_img-wrapper center">
                    <img src={image} alt="contact-image"></img>
                </div>
                <p className="contact-item_body_text">{text}</p>
            </a>
        </div>
    );
}
