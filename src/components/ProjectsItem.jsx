export default function ProjectsItem({ position, image }) {
    return (
        <section
            className={` projects-item projects-item_position-${position}`}
        >
            <section className={`projects-item_img`}>
                <img
                    style={{ width: "100%" }}
                    src={image}
                    alt="Project-image"
                />
            </section>
            <section
                className={`projects-item_description  projects-item_description_${position}`}
            ></section>
        </section>
    );
}
