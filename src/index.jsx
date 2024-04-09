import React from "react";
import ReactDOM from "react-dom/client";
import "./language/i18next.js";
import App from "./App.jsx";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
