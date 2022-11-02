import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Header() {
  return (
    <div id="header">
      <h1> Zechariah Foxx</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
