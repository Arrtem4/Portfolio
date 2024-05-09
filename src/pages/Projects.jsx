import DecorativeSeparator from "../components/DecorativeSeparator";
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
                <DecorativeSeparator text="2024" />
                <ProjectsItem
                    position="left"
                    image={aeroflex}
                    projectName="aeroflex"
                    repository="https://github.com/Arrtem4/Aeroflex-Calculator"
                    site="https://arrtem4.github.io/Aeroflex-Calculator/podderzhka/kalkulyatory/"
                    tools={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "jQuery",
                        "CMS Bitrix",
                    ]}
                />
                <ProjectsItem
                    position="right"
                    image={vzkg}
                    projectName="vzkg"
                    repository="https://github.com/Arrtem4/Configurator"
                    site="https://arrtem4.github.io/Configurator/"
                    tools={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "jQuery",
                        "CMS Bitrix",
                    ]}
                />
                <ProjectsItem
                    position="left"
                    image={flags}
                    projectName="flags"
                    repository="https://github.com/Arrtem4/TS-Countries"
                    site="https://arrtem4.github.io/TS-Countries/#/"
                    tools={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "React-Redux",
                        "React-Router",
                        "API",
                        "Styled-Components",
                    ]}
                />
                <ProjectsItem
                    position="right"
                    image={userFinder}
                    projectName="userFinder"
                    repository="https://github.com/Arrtem4/TS-GitHub-Users"
                    site="https://arrtem4.github.io/TS-GitHub-Users/"
                    tools={[
                        "HTML",
                        "SCSS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "GitHub API",
                    ]}
                />
                <ProjectsItem
                    position="left"
                    image={library}
                    projectName="library"
                    repository="https://github.com/Arrtem4/Redux-Book-Library-App"
                    site="https://arrtem4.github.io/Redux-Book-Library-App/"
                    tools={[
                        "HTML",
                        "SCSS",
                        "JavaScript",
                        "React",
                        "React-Redux",
                    ]}
                />
            </section>
            <section className="projects_year">
                <DecorativeSeparator text="2023" />
                <ProjectsItem
                    position="right"
                    image={reviews}
                    projectName="reviews"
                    repository="https://github.com/Arrtem4/WhatAboutTheReviews"
                    site="https://whatwiththereviews.onrender.com/"
                    tools={[
                        "HTML",
                        "SCSS",
                        "JavaScript",
                        "React",
                        "React-Redux",
                        "Redux-Toolkit",
                        "React-Router",
                        "API",
                        "Node.js",
                        "Express.js",
                        "Passport.js",
                        "PostgreSQL",
                        "i18next",
                        "React-Dropzone",
                        "Vite",
                    ]}
                />
                <ProjectsItem
                    position="left"
                    image={calculator}
                    projectName="calculator"
                    repository="https://github.com/Arrtem4/calc"
                    site="https://arrtem4.github.io/calc/"
                    tools={["HTML", "SCSS", "JavaScript", "React"]}
                />
                <ProjectsItem
                    position="right"
                    image={todos}
                    projectName="todos"
                    repository="https://github.com/Arrtem4/To-do-List"
                    site="https://arrtem4.github.io/To-do-List/#/"
                    tools={[
                        "HTML",
                        "SCSS",
                        "JavaScript",
                        "React",
                        "React-Redux",
                        "Redux-Toolkit",
                        "React-Router",
                        "Framer-Motion",
                        "Firebase",
                    ]}
                />
            </section>
            <section className="projects_year">
                <DecorativeSeparator text="2022" />
                <ProjectsItem
                    position="left"
                    image={geolocation}
                    projectName="geolocation"
                    repository="https://github.com/Arrtem4/IP-Geolocation"
                    site="https://arrtem4.github.io/IP-Geolocation/"
                    tools={["HTML", "SCSS", "JavaScript", "Parcel", "API"]}
                />
                <ProjectsItem
                    position="right"
                    image={balls}
                    projectName="balls"
                    repository="https://github.com/Arrtem4/Ballons"
                    site="https://arrtem4.github.io/Ballons/"
                    tools={["HTML", "SCSS"]}
                />
                <ProjectsItem
                    position="left"
                    image={games}
                    projectName="games"
                    repository="https://github.com/Arrtem4/games"
                    site="https://arrtem4.github.io/games/"
                    tools={["HTML", "SCSS"]}
                />
            </section>
        </section>
    );
}
