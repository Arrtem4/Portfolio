import { useTranslation } from "react-i18next";
import { BsLink45Deg } from "react-icons/bs";

export default function ProjectsItem({
    position = "left",
    image = {},
    projectName = "project name",
    repository = "",
    site = "",
    tools = [],
}) {
    const { t } = useTranslation();
    return (
        <section
            className={` projects-item projects-item_position-${position}`}
        >
            <img
                className="projects-item_img"
                src={image}
                alt="Project-image"
            />
            <section
                className={`projects-item_description  projects-item_description_${position}`}
            >
                <div className="projects-item_description_name-wrapper">
                    <p className="projects-item_description_name">
                        {t(`projects.${projectName}.name`)}
                    </p>
                    <div className="projects-item_description_name-line"></div>
                </div>

                <div className="projects-item_description_text-wrapper">
                    <p className="projects-item_description_text">
                        {t(`projects.${projectName}.description1`)}
                    </p>
                    <p className="projects-item_description_text">
                        {t(`projects.${projectName}.description2`)}
                    </p>
                    <p className="projects-item_description_text">
                        {t(`projects.${projectName}.description3`)}
                    </p>
                    <p className="projects-item_description_text">
                        {t(`projects.${projectName}.description4`)}
                    </p>
                </div>
                <div className="projects-item_description_stack-wrapper center">
                    {tools.map((el, i) => {
                        return (
                            <div
                                className="projects-item_description_stack"
                                key={i}
                            >
                                {el}
                            </div>
                        );
                    })}
                </div>
                <div className="projects-item_description_link-wrapper">
                    <a
                        className="projects-item_description_link"
                        href={repository}
                        target="_blank"
                    >
                        {t(`projects.repository`)}
                        <BsLink45Deg
                            style={{ transform: "translateY(.3cqmin)" }}
                        />
                    </a>
                    <a
                        className="projects-item_description_link"
                        href={site}
                        target="_blank"
                    >
                        {t(`projects.site`)}
                        <BsLink45Deg
                            style={{ transform: "translateY(.3cqmin)" }}
                        />
                    </a>
                </div>
            </section>
        </section>
    );
}
