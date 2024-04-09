import { useLayoutEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(
        localStorage.getItem("data-theme") || "dark"
    );

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("data-theme", theme);
    }, [theme]);
    return { theme, setTheme };
}
