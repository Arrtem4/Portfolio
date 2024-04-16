import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
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
                    {/* <section className="menu-large_links">
                        <NavLink to="/">1</NavLink>
                        <NavLink to="contacts">2</NavLink>
                        <NavLink to="about">3</NavLink>
                    </section> */}
                    <section className="menu-large_buttons">
                        {/* <ButtonTheme /> */}
                        <ButtonLanguage />
                    </section>
                </section>
            </section>
        );
    } else {
        return (
            <>
                <IoMenu
                    className="menu-small_icon"
                    onClick={() => setMenuIsVisible(!menuIsVisible)}
                />
                <section
                    className={`menu-small ${menuIsVisible ? "" : "hidden"}`}
                >
                    <section
                        className="menu-small_wrapper"
                        onClick={(event) => {
                            if (event.currentTarget === event.target) {
                                setMenuIsVisible(false);
                            }
                        }}
                    >
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
