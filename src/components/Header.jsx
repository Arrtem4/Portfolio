import { NavLink } from "react-router-dom";
import ButtonLanguage from "./buttons/ButtonLanguage";
import ButtonTheme from "./buttons/ButtonTheme";

// import { useTranslation } from "react-i18next";
export default function Header() {
    // const { t } = useTranslation();
    return (
        <section className="header">
            <div className="header_logo">
                <div className="header_logo_circle">
                    <p>YA</p>
                </div>
                <div className="header_logo-_title">
                    <p>ARTEM YAKOVENKO</p>
                </div>
                <div className="header_logo_subtitle">
                    <p>FULLSTACK DEVELOPER</p>
                </div>
            </div>
            <div className="header_space"></div>
            <ButtonLanguage />
            <ButtonTheme />

            <NavLink to="/">1</NavLink>
            <NavLink to="contacts">2</NavLink>
            <NavLink to="about">3</NavLink>
        </section>
    );
}
