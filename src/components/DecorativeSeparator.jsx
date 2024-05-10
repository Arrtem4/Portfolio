export default function DecorativeSeparator({ text }) {
    return (
        <div className="decorativeSeparator">
            <div className="decorativeSeparator_border left"></div>
            <p className="decorativeSeparator_text">{text}</p>
            <div className="decorativeSeparator_border right"></div>
        </div>
    );
}
