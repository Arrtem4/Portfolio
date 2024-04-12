import Menu from "./Menu";
import { useEffect, useState } from "react";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            {windowWidth > 700 ? <Menu size="large" /> : <Menu size="small" />}
        </section>
    );
}
