export default function DecorativeSeparator({ text }) {
    return (
        <div className="decorativeSeparator">
            <div className="decorativeSeparator_border left"></div>
            <span className="decorativeSeparator_text">{text}</span>
            <div className="decorativeSeparator_border right"></div>
        </div>
    );
}
