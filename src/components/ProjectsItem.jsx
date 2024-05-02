import { useTranslation } from "react-i18next";

export default function ProjectsItem({
    position,
    image,
    projectName,
    repository,
    site,
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
                <p className="projects-item_description_name">
                    {t(`projects.${projectName}.name`)}
                </p>
                <p className="projects-item_description_text">
                    {t(`projects.${projectName}.description`)}
                </p>
                <div className="projects-item_description_row-wrapper">
                    <p className="projects-item_description_stack">
                        {t(`projects.stack`)}
                    </p>
                </div>
                <div className="projects-item_description_row-wrapper">
                    <p className="projects-item_description_repository">
                        {t(`projects.repository`)}
                    </p>
                    <a href={repository} target="_blank">
                        {repository}
                    </a>
                </div>
                <div className="projects-item_description_row-wrapper">
                    <p className="projects-item_description_site">
                        {t(`projects.site`)}
                    </p>
                    <a href={site} target="_blank">
                        {site}
                    </a>
                </div>
            </section>
        </section>
    );
}