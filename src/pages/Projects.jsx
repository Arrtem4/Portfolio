import YearsIndex from "../components/YearsIndex";
import ProjectsItem from "../components/ProjectsItem";
import aeroflex from "../pictures/projects/aeroflex.webp";
import vzkg from "../pictures/projects/vzkg.webp";
import library from "../pictures/projects/library.webp";
import flags from "../pictures/projects/flags.webp";
import userFinder from "../pictures/projects/user-finder.webp";
import reviews from "../pictures/projects/reviews.webp";
import calculator from "../pictures/projects/calculator.webp";
import todos from "../pictures/projects/todos.webp";
import geolocation from "../pictures/projects/geolocation.webp";
import balls from "../pictures/projects/balls.webp";
import games from "../pictures/projects/games.webp";
export default function Projects() {
    return (
        <section className="projects page-enter">
            <section className="projects_year">
                <YearsIndex year="2024" />
                <ProjectsItem
                    position="left"
                    image={aeroflex}
                    projectName="aeroflex"
                    repository="https://github.com/Arrtem4/Aeroflex-Calculator"
                    site="https://arrtem4.github.io/Aeroflex-Calculator/podderzhka/kalkulyatory/"
                    tools={[
                        "JavaScript",
                        "jQuery",
                        "CSS",
                        "HTML",
                        "CMS Bitrix",
                    ]}
                />
                <ProjectsItem
                    position="right"
                    image={vzkg}
                    projectName="vzkg"
                    repository="https://github.com/Arrtem4/Configurator"
                    site="https://arrtem4.github.io/Configurator/"
                />
                <ProjectsItem
                    position="left"
                    image={flags}
                    projectName="flags"
                    repository="https://github.com/Arrtem4/TS-Countries"
                    site="https://arrtem4.github.io/TS-Countries/#/"
                />
                <ProjectsItem
                    position="right"
                    image={userFinder}
                    projectName="userFinder"
                    repository="https://github.com/Arrtem4/TS-GitHub-Users"
                    site="https://arrtem4.github.io/TS-GitHub-Users/"
                />
                <ProjectsItem
                    position="left"
                    image={library}
                    projectName="library"
                    repository="https://github.com/Arrtem4/Redux-Book-Library-App"
                    site="https://arrtem4.github.io/Redux-Book-Library-App/"
                />
            </section>
            <section className="projects_year">
                <YearsIndex year="2023" />
                <ProjectsItem
                    position="right"
                    image={reviews}
                    projectName="reviews"
                    repository="https://github.com/Arrtem4/WhatAboutTheReviews"
                    site="https://whatwiththereviews.onrender.com/"
                />
                <ProjectsItem
                    position="left"
                    image={calculator}
                    projectName="calculator"
                    repository="https://github.com/Arrtem4/calc"
                    site="https://arrtem4.github.io/calc/"
                />
                <ProjectsItem
                    position="right"
                    image={todos}
                    projectName="todos"
                    repository="https://github.com/Arrtem4/To-do-List"
                    site="https://arrtem4.github.io/To-do-List/#/"
                />
            </section>
            <section className="projects_year">
                <YearsIndex year="2022 " />
                <ProjectsItem
                    position="left"
                    image={geolocation}
                    projectName="geolocation"
                    repository="https://github.com/Arrtem4/IP-Geolocation"
                    site="https://arrtem4.github.io/IP-Geolocation/"
                />
                <ProjectsItem
                    position="right"
                    image={balls}
                    projectName="balls"
                    repository="https://github.com/Arrtem4/Ballons"
                    site="https://arrtem4.github.io/Ballons/"
                />
                <ProjectsItem
                    position="left"
                    image={games}
                    projectName="games"
                    repository="https://github.com/Arrtem4/games"
                    site="https://arrtem4.github.io/games/"
                />
            </section>
        </section>
    );
}
