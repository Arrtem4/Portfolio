import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import SkillsListItem from "../components/SkillsListItem";
import DecorativeSeparator from "../components/DecorativeSeparator";
import skills from "../data/skills";

export default function Skills() {
    const { t } = useTranslation();
    const [justList, setJustList] = useState(false);
    return (
        <section className="skills page-enter">
            <section className="skills_toggle center">
                <p
                    className={`menu-large_links_link ${
                        justList ? "" : "active"
                    }`}
                    onClick={() => setJustList(false)}
                >
                    {t("skills.cards-button")}
                </p>
                <p
                    className={`menu-large_links_link ${
                        justList ? "active" : ""
                    } `}
                    onClick={() => setJustList(true)}
                >
                    {t("skills.list-button")}
                </p>
            </section>
            {justList ? (
                <section className="skills_list">
                    <DecorativeSeparator
                        text={t("skills.separator1")}
                        variant="list"
                    />
                    <section className="skills_list_block">
                        {skills.fundamental.map((el, i) => {
                            return (
                                <SkillsListItem
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator
                        text={t("skills.separator2")}
                        variant="list"
                    />
                    <section className="skills_list_block">
                        {skills.additional.map((el, i) => {
                            return (
                                <SkillsListItem
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator
                        text={t("skills.separator3")}
                        variant="list"
                    />
                    <section className="skills_list_block">
                        {skills.serverAndData.map((el, i) => {
                            return (
                                <SkillsListItem
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator
                        text={t("skills.separator4")}
                        variant="list"
                    />
                    <section className="skills_list_block">
                        {skills.interfaceStyling.map((el, i) => {
                            return (
                                <SkillsListItem
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator
                        text={t("skills.separator5")}
                        variant="list"
                    />
                    <section className="skills_list_block">
                        {skills.developmentTools.map((el, i) => {
                            return (
                                <SkillsListItem
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                </section>
            ) : (
                <section className="skills_cards">
                    <DecorativeSeparator text={t("skills.separator1")} />
                    <section className="skills_cards_block">
                        {skills.fundamental.map((el, i) => {
                            return (
                                <Card
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator text={t("skills.separator2")} />
                    <section className="skills_cards_block">
                        {skills.additional.map((el, i) => {
                            return (
                                <Card
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator text={t("skills.separator3")} />
                    <section className="skills_cards_block">
                        {skills.serverAndData.map((el, i) => {
                            return (
                                <Card
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator text={t("skills.separator4")} />
                    <section className="skills_cards_block">
                        {skills.interfaceStyling.map((el, i) => {
                            return (
                                <Card
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                    <DecorativeSeparator text={t("skills.separator5")} />
                    <section className="skills_cards_block">
                        {skills.developmentTools.map((el, i) => {
                            return (
                                <Card
                                    key={el}
                                    image={`pictures/skills/${el}.webp`}
                                    name={t(`skills.cards.${el}.name`)}
                                    description={t(
                                        `skills.cards.${el}.description`
                                    )}
                                    delay={i * 0.1}
                                />
                            );
                        })}
                    </section>
                </section>
            )}
        </section>
    );
}
