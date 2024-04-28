import { useEffect } from "react";
import photo from "../pictures/photo-central.webp";
import { useTranslation } from "react-i18next";

export default function Main() {
    const { t } = useTranslation();
    const visited = document.documentElement.dataset.isVisited;
    const lang = document.documentElement.dataset.lang;

    useEffect(() => {
        const changeColorCircleAnimation = async (timer) => {
            await new Promise((resolve) => setTimeout(resolve, timer));
            let element = document.querySelector(
                ".main_central_composition_circle-color"
            );
            let element2 = document.querySelector(".main_central_h1_text");
            element.classList.remove("animation1");
            element2.classList.remove("animation1");
            element.classList.add("animation2");
            element2.classList.add("animation2");
        };
        changeColorCircleAnimation(visited ? 0 : 3500);
    });

    return (
        <section className="main">
            <section className="main_central">
                <section className="main_central_h1">
                    <p
                        className={`main_central_h1_text ${
                            lang === "en" ? "" : "ru"
                        } animation1 `}
                    >
                        {t("main.h-1")}
                    </p>
                </section>
                <section className="main_central_h2">
                    <p className="main_central_h2_text">{t("main.h-2")}</p>
                </section>
                <section
                    className={`main_central_composition ${
                        visited ? "" : "animation"
                    }`}
                >
                    <div
                        className={`main_central_composition_circle-color animation1`}
                    ></div>
                    <div className="main_central_composition_filter"></div>
                    <div className="main_central_composition_circle-1"></div>
                    <div className="main_central_composition_circle-2"></div>
                    <div className="main_central_composition_circle-3"></div>
                    <img src={photo} alt="photo-central"></img>
                </section>
            </section>
        </section>
    );
}
