import React from "react";

import { headshot, space } from "../../assets";

import "../style.css";

export default function Home() {
  return (
    <div id="about-me">
      <div className="sections">
        <h2>
          About me:
          <div className="headshot">
            <img
              src={headshot}
              alt="Zechariah Foxx"
            />
          </div>
        </h2>
      </div>
      <div id="intro">
        <h3>
          <p>
            Hello, my name is Zechariah Foxx and I am currently enrolled in The
            Coding Bootcamp at UNC Chapel Hill. Prior to attending bootcamp,
            I've worked in the automotive, insurance and construction
            industries. I attended Fairmont State University where I recieved my
            Bachelors of Science in Business Adminstration. I'm excited to be
            learning a new skill and would love to connect! Please see below for
            my current projects and how to reach out!
          </p>
        </h3>
      </div>
    </div>
  );
}
