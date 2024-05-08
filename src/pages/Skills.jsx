import Card from "../components/Card";
import html from '../pictures/skills/html.webp'
import css from "../pictures/skills/css.webp";
import scss from "../pictures/skills/scss.webp";
import git from "../pictures/skills/git.webp"
import js from "../pictures/skills/js.webp"
import ts from "../pictures/skills/ts.webp"
import react from "../pictures/skills/react.webp"
import redux from "../pictures/skills/redux.webp"
import router from "../pictures/skills/router.webp"
import vscode from "../pictures/skills/vscode.webp"
import node from "../pictures/skills/node.webp"
import express from "../pictures/skills/express.webp"
import mongo from "../pictures/skills/mongo.webp"
import postgresql from "../pictures/skills/postgresql.webp"
import passport from "../pictures/skills/passport.webp"
import api from "../pictures/skills/api.webp"
import jquery from "../pictures/skills/jquery.webp"
import vite from "../pictures/skills/vite.webp"
export default function Skills() {
    return (
        <section className="skills page-enter">
            <Card image={html} />
            <Card image={css} />
            <Card image={scss} />
            <Card image={git} />
            <Card image={js} />
            <Card image={ts} />
            <Card image={react} />
            <Card image={redux} />
            <Card image={router} />
            <Card image={vscode} />
            <Card image={node} />
            <Card image={express} />
            <Card image={mongo} />
            <Card image={postgresql} />
            <Card image={passport} />
            <Card image={api} />
            <Card image={jquery} />
            <Card image={vite} />
        </section>
    );
}
