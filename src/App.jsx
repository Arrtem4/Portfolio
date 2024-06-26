import { Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <HashRouter>
            <section className="app">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Main />}></Route>
                        <Route path="about" element={<About />}></Route>
                        <Route path="contacts" element={<Contacts />}></Route>
                        <Route path="projects" element={<Projects />}></Route>
                        <Route path="skills" element={<Skills />}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </section>
        </HashRouter>
    );
}
