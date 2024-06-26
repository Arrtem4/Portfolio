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
        <div
            className="button-language center"
            onClick={() => setActive(!active)}
        >
            {active && (
                <div className="button-language_background-for-close"></div>
            )}
            <p className="button-language_value-text">
                {language === "en" ? "EN" : "RU"}
            </p>
            <AiOutlineCaretDown className="button-language_caret" />

            <div className={`button-language_list ${active ? "visible" : ""}`}>
                <div
                    className="button-language_list-item"
                    onClick={() =>
                        handleChange(language === "en" ? "ru" : "en")
                    }
                >
                    {language === "en" ? "RU" : "EN"}
                </div>
            </div>
        </div>
    );
}
