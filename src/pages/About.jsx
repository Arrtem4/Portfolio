import { useTranslation } from "react-i18next";
import AboutCard from "../components/AboutCard";
// import { useState } from "react";

// const cards = [
//     {
//         num: 1,
//     },
//     { num: 2 },
//     { num: 3 },
//     { num: 4 },
//     { num: 5 },
// ];
export default function About() {
    const { t } = useTranslation();
    // const [index1, setIndex1] = useState(999);
    // const [index2, setIndex2] = useState(998);
    // const [index3, setIndex3] = useState(997);
    // const [index4, setIndex4] = useState(996);
    // const [index5, setIndex5] = useState(995);

    return (
        <section className="about page-enter">
            <AboutCard text={t("about.card1")} indexIn={999} />
            <AboutCard text={t("about.card2")} indexIn={998} />
            <AboutCard text={t("about.card3")} indexIn={997} />
            <AboutCard text={t("about.card4")} indexIn={996} />
            <AboutCard text={t("about.card5")} indexIn={995} />
        </section>
    );
}
