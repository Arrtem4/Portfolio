import { useTranslation } from "react-i18next";
import ContactItem from "../components/ContactItem";
import contacts from "../data/contacts";

export default function Contacts() {
    const { t } = useTranslation();
    return (
        <section className="contacts page-enter">
            {contacts.map((contact, i) => (
                <ContactItem
                    key={i}
                    name={contact.name}
                    image={`pictures/contacts/${contact.name}.webp`}
                    text={t(`contacts.${contact.name}`)}
                    link={contact.link}
                    delay={i * 0.1}
                />
            ))}
        </section>
    );
}
