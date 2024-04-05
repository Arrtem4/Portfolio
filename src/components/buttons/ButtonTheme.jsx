import useTheme from "../../hooks/useTheme";

export default function ButtonTheme() {
    const { theme, setTheme } = useTheme();
    const handleChange = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return <button onClick={handleChange}>ButtonTheme</button>;
}
