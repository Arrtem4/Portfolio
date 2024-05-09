import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import DecorativeSeparator from "../components/DecorativeSeparator";
import html from "../pictures/skills/html.webp";
import css from "../pictures/skills/css.webp";
import scss from "../pictures/skills/scss.webp";
import git from "../pictures/skills/git.webp";
import js from "../pictures/skills/js.webp";
import ts from "../pictures/skills/ts.webp";
import react from "../pictures/skills/react.webp";
import redux from "../pictures/skills/redux.webp";
import router from "../pictures/skills/router.webp";
import vscode from "../pictures/skills/vscode.webp";
import node from "../pictures/skills/node.webp";
import express from "../pictures/skills/express.webp";
import mongo from "../pictures/skills/mongo.webp";
import postgresql from "../pictures/skills/postgresql.webp";
import passport from "../pictures/skills/passport.webp";
import api from "../pictures/skills/api.webp";
import jquery from "../pictures/skills/jquery.webp";
import vite from "../pictures/skills/vite.webp";
import npm from "../pictures/skills/npm.webp";

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
                <section className="skills_list"></section>
            ) : (
                <section className="skills_cards">
                    <DecorativeSeparator text={t("skills.separator1")} />
                    <section className="skills_cards_block page-enter">
                        <Card image={html} />
                        <Card image={css} />
                        <Card image={js} />
                    </section>
                    <DecorativeSeparator text={t("skills.separator2")} />
                    <section className="skills_cards_block page-enter">
                        <Card image={ts} />
                        <Card image={react} />
                        <Card image={redux} />
                        <Card image={router} />
                        <Card image={scss} />
                        <Card image={npm} />
                        <Card image={git} />
                        <Card image={api} />
                        <Card image={vite} />
                        <Card image={jquery} />
                        <Card image={vscode} />
                    </section>
                    <DecorativeSeparator text={t("skills.separator3")} />
                    <section className="skills_cards_block page-enter">
                        <Card image={node} />
                        <Card image={express} />
                        <Card image={passport} />
                        <Card image={mongo} />
                        <Card image={postgresql} />
                    </section>
                </section>
            )}
        </section>
    );
}
