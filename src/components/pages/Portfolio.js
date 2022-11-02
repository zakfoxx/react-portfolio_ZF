import React from "react";
import {
  heroBg,
  gifYoda,
  gitHub,
  horiseon,
  linkedIn,
  movieGallery,
  profilePhoto,
  robots,
  screenShot,
} from "../../assets";
export default function Portfolio() {
  return (
    <div id="my-work">
      <div className="sections">
        <h2>My Work:</h2>
        <div className="run-buddy" id="intro">
          <a href="https://zakfoxx.github.io/run-buddy/">
            <div className="container">
              <img src="assets/images/hero-bg.jpeg" width="500" />
            </div>
          </a>
        </div>
      </div>
      <div id="small-images">
        <div className="robots">
          <a href="https://github.com/zakfoxx/robot-gladiators.git">
            <img src="assets/images/robots.jpg" width="200" />
          </a>
        </div>
        <div className="horiseon">
          <a href="https://github.com/zakfoxx/Horiseon_ZF.git">
            <img src="assets/images/horiseon.png" width="200" />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/zechariah-foxx-0031948b/">
            <img
              src="assets/images/linkedin.png"
              alt="Zechariah Foxx linkedin"
              width="200"
            />
          </a>
        </div>
        <div className="git">
          <a href="https://github.com/zakfoxx/">
            <img
              src="assets/images/github.png"
              alt="Zechariah Foxx Github"
              width="200"
            />
          </a>
        </div>
        <div className="yoda">
          <a href="https://ericksonvik.github.io/YodaIM/">
            <img
              src="assets/images/Gifyoda-logo.png"
              alt="gifyoda"
              width="200"
            />
          </a>
        </div>
        <div className="movie-gallery">
          <a href="https://movie-galleries.herokuapp.com/">
            <img
              src="assets/images/moviegallery.png"
              alt="moviegallery"
              width="200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
