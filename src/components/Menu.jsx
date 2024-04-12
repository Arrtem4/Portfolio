import { NavLink } from "react-router-dom";
import ButtonLanguage from "./buttons/ButtonLanguage";
import ButtonTheme from "./buttons/ButtonTheme";
import { useState } from "react";
// import { useTranslation } from "react-i18next";

export default function Menu({ size }) {
    // const { t } = useTranslation();
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    if (size === "large") {
        return (
            <section className="menu-large">
                <section className="menu-large_wrapper">
                    <section className="menu-large_buttons">
                        <ButtonLanguage />
                        <ButtonTheme />
                    </section>
                    <section className="menu-large_links">
                        <NavLink to="/">1</NavLink>
                        <NavLink to="contacts">2</NavLink>
                        <NavLink to="about">3</NavLink>
                    </section>
                </section>
            </section>
        );
    } else {
        return (
            <>
                <button onClick={() => setMenuIsVisible(!menuIsVisible)}>
                    visible
                </button>
                <section
                    onClick={() => setMenuIsVisible(!menuIsVisible)}
                    className={`menu-small ${menuIsVisible ? "" : "hidden"}`}
                >
                    <section className="menu-small_wrapper">
                        <section className="menu-small_buttons">
                            <ButtonLanguage />
                            <ButtonTheme />
                        </section>
                        <section className="menu-small_links">
                            <NavLink to="/">1</NavLink>
                            <NavLink to="contacts">2</NavLink>
                            <NavLink to="about">3</NavLink>
                        </section>
                    </section>
                </section>
            </>
        );
    }
}
