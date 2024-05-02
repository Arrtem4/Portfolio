import YearsIndex from "../components/YearsIndex";
import ProjectsItem from "../components/ProjectsItem";
import aeroflex from "../pictures/projects/aeroflex.webp";
import vzkg from "../pictures/projects/vzkg.webp";
import flags from "../pictures/projects/flags.webp";
import userFinder from "../pictures/projects/user-finder.webp";
import reviews from "../pictures/projects/reviews.webp";
import calculator from "../pictures/projects/calculator.webp";
import todos from "../pictures/projects/todos.webp";
import balls from "../pictures/projects/balls.webp";
import games from "../pictures/projects/games.webp";
export default function Projects() {
    return (
        <section className="projects page-enter">
            <section className="projects_year">
                <YearsIndex year={2024} />
                <ProjectsItem position={"left"} image={aeroflex} />
                <ProjectsItem position={"right"} image={vzkg} />
                <ProjectsItem position={"left"} image={flags} />
                <ProjectsItem position={"right"} image={userFinder} />
            </section>
            <section className="projects_year">
                <YearsIndex year={2023} />
                <ProjectsItem position={"left"} image={reviews} />
                <ProjectsItem position={"right"} image={calculator} />
                <ProjectsItem position={"left"} image={todos} />
            </section>
            <section className="projects_year">
                <YearsIndex year={2022} />
                <ProjectsItem position={"right"} image={balls} />
                <ProjectsItem position={"left"} image={games} />
            </section>
        </section>
    );
}
