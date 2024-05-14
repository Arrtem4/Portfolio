import { useTranslation } from "react-i18next";
import AboutCard from "../components/AboutCard";
export default function About() {
    const { t } = useTranslation();
    return (
        <section className="about page-enter">
            <AboutCard text={t("about.card1")} />
        </section>
    );
}
