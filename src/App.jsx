import { Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
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
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </section>
        </HashRouter>
    );
}
