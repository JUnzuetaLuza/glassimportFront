import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlassImportApp } from "./GlassImportApp";

//import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlassImportApp />
  </StrictMode>
);
