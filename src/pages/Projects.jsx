import DecorativeSeparator from "../components/DecorativeSeparator";
import ProjectsItem from "../components/ProjectsItem";
import projects from "../data/projects";
export default function Projects() {
    return (
        <section className="projects page-enter">
            <section className="projects_year">
                <DecorativeSeparator text="2024" />
                {projects["2024"].map((el, i) => {
                    return (
                        <ProjectsItem
                            key={el.projectName}
                            position={i % 2 == 0 ? "left" : "right"}
                            image={`pictures/projects/${el.projectName}.webp`}
                            projectName={el.projectName}
                            repository={el.repository}
                            site={el.site}
                            tools={el.tools}
                        />
                    );
                })}
            </section>
            <section className="projects_year">
                <DecorativeSeparator text="2023" />
                {projects["2023"].map((el, i) => {
                    return (
                        <ProjectsItem
                            key={el.projectName}
                            position={++i % 2 == 0 ? "left" : "right"}
                            image={`pictures/projects/${el.projectName}.webp`}
                            projectName={el.projectName}
                            repository={el.repository}
                            site={el.site}
                            tools={el.tools}
                        />
                    );
                })}
            </section>
            <section className="projects_year">
                <DecorativeSeparator text="2022" />
                {projects["2022"].map((el, i) => {
                    return (
                        <ProjectsItem
                            key={el.projectName}
                            position={i % 2 == 0 ? "left" : "right"}
                            image={`pictures/projects/${el.projectName}.webp`}
                            projectName={el.projectName}
                            repository={el.repository}
                            site={el.site}
                            tools={el.tools}
                        />
                    );
                })}
            </section>
        </section>
    );
}
