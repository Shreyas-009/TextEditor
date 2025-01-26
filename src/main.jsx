import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EditorProvider } from "./context/EditorContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <EditorProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EditorProvider>
);
