import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/index.css";
import "./styles/customStyles.css";
import "./styles/container.css";
import "./styles/landingPage.css";
import "./styles/nav.css";
import "./styles/about.css";
import "./styles/work.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/footer.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
