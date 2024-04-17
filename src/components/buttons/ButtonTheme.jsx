import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { useSpring, animated } from "react-spring";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function ButtonTheme() {
    const { theme, setTheme } = useTheme();
    const [clicked, setClicked] = useState(false);

    const icon1Props = useSpring({
        opacity: clicked ? 0 : 1,
        transform: clicked ? "translateY(30px)" : "translateY(0)",
        config: { duration: 450 },
    });

    const icon2Props = useSpring({
        opacity: clicked ? 1 : 0,
        transform: clicked ? "translateY(0)" : "translateY(-30px)",
        config: { duration: 450 },
    });
    const handleDivClick = () => {
        setClicked(!clicked);
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return (
        <div className="button-theme" onClick={handleDivClick}>
            <animated.div
                className="button-theme_icon-wrapper"
                style={{
                    ...icon1Props,
                    position: "absolute",
                    pointerEvents: icon1Props.opacity.to((o) =>
                        o === 0 ? "none" : "auto"
                    ),
                }}
            >
                {theme === "light" ? <></> : <BsFillMoonStarsFill />}
            </animated.div>
            <animated.div
                className="button-theme_icon-wrapper"
                style={{
                    ...icon2Props,
                    position: "absolute",
                    pointerEvents: icon1Props.opacity.to((o) =>
                        o === 1 ? "none" : "auto"
                    ),
                }}
            >
                {theme === "light" ? <BsFillSunFill /> : <></>}
            </animated.div>
        </div>
    );
}
