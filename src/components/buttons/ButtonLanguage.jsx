import useLanguage from "../../hooks/useLanguage";
import i18n from "i18next";

export default function ButtonLanguage() {
    const [language, setLanguage] = useLanguage("language", "en");
    const handleChange = () => {
        if (language === "en") {
            setLanguage("ru");
            i18n.changeLanguage("ru");
        } else {
            setLanguage("en");
            i18n.changeLanguage("en");
        }
    };
    return <button onClick={handleChange}>ButtonLanguage</button>;
}

// return (
//     <div className="language-select">
//         <Select value={language} onChange={handleChange} displayEmpty>
//             <MenuItem value="en">EN</MenuItem>
//             <MenuItem value="ru">RU</MenuItem>
//         </Select>
//     </div>
// );
