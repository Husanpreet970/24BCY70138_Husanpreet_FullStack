//Experiment 2 — TechGear Product Catalog Using React Router
//Problem Statement
//Develop a React-based TechGear Product Catalog application that displays products and allows users to filter products using URL query parameters such as category and maximum price. The application should also provide navigation to individual product details using a dynamic URL parameter.

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
