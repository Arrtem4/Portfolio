import { useEffect } from "react";
import photo from "../pictures/photo-central.webp";

export default function Main() {
    useEffect(() => {
        const changeColorCircleAnimation = async () => {
            await new Promise((resolve) => setTimeout(resolve, 4500));
            let element = document.querySelector(
                ".main_central_composition_circle-color"
            );
            element.classList.remove("animation1");
            element.classList.add("animation2");
        };
        changeColorCircleAnimation();
    });

    return (
        <section className="main">
            <section className="main_central">
                <section className="main_central_h1"></section>
                <section className="main_central_composition">
                    <div className="main_central_composition_circle-color animation1"></div>
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
