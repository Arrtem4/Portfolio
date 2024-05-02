import YearsIndex from "../components/YearsIndex";
import ProjectsItem from "../components/ProjectsItem";
import aeroflex from "../pictures/projects/aeroflex.webp";
import vzkg from "../pictures/projects/vzkg.webp";
export default function Projects() {
    return (
        <section className="projects page-enter">
            <section className="projects_year">
                <YearsIndex year={2024} />
                <ProjectsItem position={"left"} image={aeroflex} />
                <ProjectsItem position={"right"} image={vzkg} />
            </section>
            <section className="projects_year">
                {/* <YearsIndex year={2023} /> */}
            </section>
            <section className="projects_year">
                {/* <YearsIndex year={2022} /> */}
            </section>
        </section>
    );
}
