import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/js/bootstrap.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
