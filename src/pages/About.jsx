import { useTranslation } from "react-i18next";
import AboutCard from "../components/AboutCard";
import { useState } from "react";
import cards from "../data/about";

export default function About() {
    const { t } = useTranslation();
    const [animationInProgress, setAnimationInProgress] = useState(false);

    const animationFakeCardOff = () => {
        let el = document.querySelector(".about_fake-card");
        el.classList.remove("initial-animation");
    };

    return (
        <section className="about page-enter">
            <div className="about_filter"></div>
            <div className="about_wrapper">
                <div
                    className="about_fake-card initial-animation"
                    onAnimationEnd={animationFakeCardOff}
                ></div>
                {cards.map((card) => (
                    <AboutCard
                        key={card.num}
                        text={t(`about.card${card.num}`)}
                        h1={card.num === 1 ? t(`about.card1H1`) : ""}
                        small={card.num === 3 ? true : false}
                        indexIn={9999 - card.num}
                        indexTotal={cards.length}
                        animationInProgress={animationInProgress}
                        setAnimationInProgress={setAnimationInProgress}
                        initialAnimationDelay={2 - card.num * 0.25}
                    />
                ))}
            </div>
        </section>
    );
}
