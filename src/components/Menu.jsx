import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import ButtonLanguage from "./buttons/ButtonLanguage";
import ButtonTheme from "./buttons/ButtonTheme";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Menu({ size }) {
    const { t } = useTranslation();
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const closeMenu = async () => {
        let menu = document.querySelector(".menu-small_wrapper");
        menu.classList.add("hidden");
        await new Promise((resolve) => setTimeout(resolve, 400));
        menu.classList.remove("hidden");
        setMenuIsVisible(false);
    };

    if (size === "large") {
        return (
            <section className="menu-large">
                <section className="menu-large_wrapper">
                    <section className="menu-large_links">
                        <NavLink
                            className="menu-large_links_link link_1"
                            to="projects"
                        >
                            {t("header.projects")}
                        </NavLink>
                        <NavLink
                            className="menu-large_links_link link_2"
                            to="skills"
                        >
                            {t("header.skills")}
                        </NavLink>
                        <NavLink
                            className="menu-large_links_link link_3"
                            to="about"
                        >
                            {t("header.about")}
                        </NavLink>
                        <NavLink
                            className="menu-large_links_link link_4"
                            to="contacts"
                        >
                            {t("header.contacts")}
                        </NavLink>
                    </section>
                    <section className="menu-large_buttons link_5">
                        <ButtonTheme />
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
                                closeMenu();
                            }
                        }}
                    >
                        <section className="menu-small_buttons">
                            <ButtonLanguage />
                            <ButtonTheme />
                        </section>
                        <section className="menu-small_links">
                            <NavLink
                                onClick={() => closeMenu()}
                                className="menu-small_links_link"
                                to="/"
                            >
                                {t("header.main")}
                            </NavLink>
                            <NavLink
                                onClick={() => closeMenu()}
                                className="menu-small_links_link"
                                to="projects"
                            >
                                {t("header.projects")}
                            </NavLink>
                            <NavLink
                                onClick={() => closeMenu()}
                                className="menu-small_links_link"
                                to="skills"
                            >
                                {t("header.skills")}
                            </NavLink>
                            <NavLink
                                onClick={() => closeMenu()}
                                className="menu-small_links_link"
                                to="about"
                            >
                                {t("header.about")}
                            </NavLink>
                            <NavLink
                                onClick={() => closeMenu()}
                                className="menu-small_links_link"
                                to="contacts"
                            >
                                {t("header.contacts")}
                            </NavLink>
                        </section>
                    </section>
                </section>
            </>
        );
    }
}
