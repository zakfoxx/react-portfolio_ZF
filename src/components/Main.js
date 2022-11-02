import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/portfolio" exact element={<Portfolio />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  );
}
