import { useTranslation } from "react-i18next";
export default function Header() {
    const { t } = useTranslation();
    return <p>{t("header.first")}</p>;
}
