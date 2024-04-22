import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const rotateLogo = async () => {
        let circle = document.querySelector(".header_logo_circle");
        circle.classList.add("rotate");
        navigate("/");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        circle.classList.remove("rotate");
    };

    useLayoutEffect(() => {
        let circle = document.querySelector(".header_logo_circle");
        circle.classList.add("first-animation");
        setTimeout(() => {
            circle.classList.remove("first-animation");
        }, 1000);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="header">
            <div className="header_logo" onClick={rotateLogo}>
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
            {windowWidth > 700 ? <Menu size="large" /> : <Menu size="small" />}
        </section>
    );
}
