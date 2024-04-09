import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
    return (
        <section className="main-layout">
            <Header />
            <section className="outlet">
                <Outlet />
            </section>
        </section>
    );
}
