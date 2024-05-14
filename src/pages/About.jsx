import { useTranslation } from "react-i18next";
import AboutCard from "../components/AboutCard";
import { useState } from "react";

const cards = [
    {
        num: 1,
    },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
];
export default function About() {
    const { t } = useTranslation();
    const [animationInProgress, setAnimationInProgress] = useState(false);

    return (
        <section className="about page-enter">
            {cards.map((card) => (
                <AboutCard
                    key={card.num}
                    text={t(`about.card${card.num}`)}
                    indexIn={9999 - card.num}
                    animationInProgress={animationInProgress}
                    setAnimationInProgress={setAnimationInProgress}
                />
            ))}
        </section>
    );
}
