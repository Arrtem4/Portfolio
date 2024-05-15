import { useTranslation } from "react-i18next";
import AboutCard from "../components/AboutCard";
import { useState } from "react";
import cards from "../data/about";

export default function About() {
    const { t } = useTranslation();
    const [animationInProgress, setAnimationInProgress] = useState(false);

    return (
        <section className="about page-enter">
            <div className="about_fake-card"></div>
            {cards.map((card) => (
                <AboutCard
                    key={card.num}
                    text={t(`about.card${card.num}`)}
                    indexIn={9999 - card.num}
                    indexTotal={cards.length}
                    animationInProgress={animationInProgress}
                    setAnimationInProgress={setAnimationInProgress}
                />
            ))}
        </section>
    );
}
