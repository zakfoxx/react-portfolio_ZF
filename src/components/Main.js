import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

export default function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/aboutme" exact element={<AboutMe />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  );
}
