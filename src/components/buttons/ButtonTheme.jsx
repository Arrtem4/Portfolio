import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function ButtonTheme() {
    const { theme, setTheme } = useTheme();
    const [animationStarted, setAnimationStarted] = useState(false);
    const handleDivClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        setAnimationStarted(true);
    };

    return (
        <div className="button-theme" onClick={handleDivClick}>
            {theme === "light" && (
                <>
                    <div
                        className={`${
                            animationStarted ? "button-theme_icon-wrapper" : ""
                        }`}
                    >
                        <BsFillSunFill />
                    </div>
                    <div
                        className={`${
                            animationStarted
                                ? "button-theme_icon-wrapper-hidden"
                                : ""
                        } button-theme_icon-wrapper-hidden-static`}
                    >
                        <BsFillMoonStarsFill />
                    </div>
                </>
            )}
            {theme === "dark" && (
                <>
                    <div
                        className={`${
                            animationStarted ? "button-theme_icon-wrapper" : ""
                        }`}
                    >
                        <BsFillMoonStarsFill />
                    </div>
                    <div
                        className={`${
                            animationStarted
                                ? "button-theme_icon-wrapper-hidden"
                                : ""
                        } button-theme_icon-wrapper-hidden-static`}
                    >
                        <BsFillSunFill />
                    </div>
                </>
            )}
        </div>
    );
}
