export default function YearsIndex({ year }) {
    return (
        <div className="year-index">
            <div className="year-index_border left"></div>
            <span className="year-index_number">{year}</span>
            <div className="year-index_border right"></div>
        </div>
    );
}
