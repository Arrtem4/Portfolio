export default function SkillsListItem({
    image = "",
    name = "",
    description = "",
    delay = 0,
}) {
    return (
        <section
            className="skills-list-item"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="skills-list-item_img-container center">
                <img src={image} alt="skill-image" />
            </div>
            <div className="skills-list-item_name center">
                <p>{name}</p>
            </div>
            <div className="skills-list-item_description">
                <p>{description}</p>
            </div>
        </section>
    );
}
