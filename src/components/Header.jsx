import { NavLink } from "react-router-dom";

// import { useTranslation } from "react-i18next";
export default function Header() {
    // const { t } = useTranslation();
    return (
        <section className="header">
            <NavLink to="/">1</NavLink>
            <NavLink to="contacts">1</NavLink>
            <NavLink to="about">1</NavLink>
        </section>
    );
}
