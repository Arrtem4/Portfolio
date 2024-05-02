import YearsIndex from "../components/YearsIndex";
export default function Projects() {
    return (
        <section className="projects page-enter">
            <section className="projects_year _2024">
                <YearsIndex year={2024} />
            </section>
            <section className="projects_year _2023">
                <YearsIndex year={2023} />
            </section>
            <section className="projects_year _2022">
                <YearsIndex year={2022} />
            </section>
        </section>
    );
}
