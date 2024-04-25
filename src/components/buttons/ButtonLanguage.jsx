import { AiOutlineCaretDown } from "react-icons/ai";
import useLanguage from "../../hooks/useLanguage";
import i18n from "i18next";
import { useState } from "react";

export default function ButtonLanguage() {
    const [language, setLanguage] = useLanguage("language", "en");
    const [active, setActive] = useState(false);
    document.documentElement.dataset.lang = language;
    const handleChange = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className="button-language" onClick={() => setActive(!active)}>
            {active && (
                <div className="button-language_background-for-close"></div>
            )}
            <p className="button-language_value-text">
                {language === "en" ? "EN" : "RU"}
            </p>
            <AiOutlineCaretDown className="button-language_caret" />

            <ul className={`button-language_list ${active ? "visible" : ""}`}>
                <li
                    className="button-language_list-item"
                    onClick={() => handleChange("en")}
                >
                    EN
                </li>
                <li
                    className="button-language_list-item"
                    onClick={() => handleChange("ru")}
                >
                    RU
                </li>
            </ul>
        </div>
    );
}
