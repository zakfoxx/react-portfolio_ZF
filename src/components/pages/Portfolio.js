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
              <img src={heroBg} alt="herobg" width="500" />
            </div>
          </a>
        </div>
      </div>
      <div id="small-images">
        <div className="robots">
          <a href="https://github.com/zakfoxx/robot-gladiators.git">
            <img src={robots} alt="robots" width="200" />
          </a>
        </div>
        <div className="horiseon">
          <a href="https://github.com/zakfoxx/Horiseon_ZF.git">
            <img src={horiseon} alt="horiseon" />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/zechariah-foxx-0031948b/">
            <img src={linkedIn} alt="Zechariah Foxx linkedin" width="200" />
          </a>
        </div>
        <div className="git">
          <a href="https://github.com/zakfoxx/">
            <img src={gitHub} alt="Zechariah Foxx Github" width="200" />
          </a>
        </div>
        <div className="yoda">
          <a href="https://ericksonvik.github.io/YodaIM/">
            <img src={gifYoda} alt="gifyoda" width="200" />
          </a>
        </div>
        <div className="movie-gallery">
          <a href="https://movie-galleries.herokuapp.com/">
            <img src={movieGallery} alt="moviegallery" width="200" />
          </a>
        </div>
      </div>
    </div>
  );
}
