import useTheme from "../../hooks/useTheme";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function ButtonTheme() {
    const { theme, setTheme } = useTheme();
    const handleDivClick2 = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div className="button-theme" onClick={handleDivClick2}>
            {theme === "light" && (
                <div className="button-theme_icon-wrapper">
                    <BsFillSunFill />
                </div>
            )}{" "}
            {theme === "dark" && (
                <div className="button-theme_icon-wrapper">
                    <BsFillMoonStarsFill />
                </div>
            )}
        </div>
    );
}
