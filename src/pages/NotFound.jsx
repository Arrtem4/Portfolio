import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="not-found center page-enter">
            <p className="not-found_text">{t("not-found.text")}</p>
            <button className="not-found_button" onClick={() => navigate("/")}>
                {t("not-found.button-to-home")}
            </button>
            <button
                className="not-found_button"
                onClick={() => window.history.back()}
            >
                {t("not-found.button-back")}
            </button>
        </section>
    );
}
