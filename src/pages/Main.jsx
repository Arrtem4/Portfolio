import { useEffect } from "react";
import photo from "../pictures/photo-central.webp";
import { useTranslation } from "react-i18next";

export default function Main() {
    const { t } = useTranslation();
    const visited = document.documentElement.dataset.isVisited;

    // useLayoutEffect(() => {
    //     let status = document.documentElement.dataset.isVisited;
    //     if (status === "true") {
    //         console.log(`trueeee`)
    //     }
    // })

    useEffect(() => {
        const changeColorCircleAnimation = async (timer) => {
            await new Promise((resolve) => setTimeout(resolve, timer));
            let element = document.querySelector(
                ".main_central_composition_circle-color"
            );
            let element2 = document.querySelector(".main_central_h1_p-1");
            element.classList.remove("animation1");
            element2.classList.remove("animation1");
            element.classList.add("animation2");
            element2.classList.add("animation2");
        };
        changeColorCircleAnimation(visited ? 0 : 4000);
    });

    return (
        <section className="main">
            <section className="main_central">
                <section className="main_central_h1">
                    <p className="main_central_h1_p-1 animation1">
                        {t("main.p-1")}
                    </p>
                    <p className="main_central_h1_p-2">{t("main.p-2")}</p>
                </section>
                <section
                    className={`main_central_composition ${
                        visited ? "" : "non-visited-animation"
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
