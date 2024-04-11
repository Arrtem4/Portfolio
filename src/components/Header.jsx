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
                    <p>IA</p>
                </div>
                <div className="header_logo_title">
                    <div className="header_logo_title_header">
                        <p>IAKOVENKO ARTEM</p>
                    </div>
                    <div className="header_logo_title_subtitle">
                        <p>FULLSTACK DEVELOPER</p>
                    </div>
                </div>
            </div>
            <div className="header_space"></div>
            <NavLink to="/">1</NavLink>
            <NavLink to="contacts">2</NavLink>
            <NavLink to="about">3</NavLink>
            <ButtonLanguage />
            <ButtonTheme />
        </section>
    );
}
