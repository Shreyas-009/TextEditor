import React from "react";
import { Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Editor />} />
    </Routes>
  );
};

export default Routing;
