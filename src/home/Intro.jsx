import React from "react";
import "../styles/style-intro.css";
import profil from "../image-profil/profil.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-name">
        <p className="text1">Hello!</p>
        <p className="text2">I am Aldo Wijaya</p>
        <p className="text3">
          An informatics engineering student on university of Lampung. Familiar with front end development languages such as html, css, javascript, and many frameworks (bootstrap and react). Active in various competitions and organizations.
          Recently developed some website projects. Interested in continuing to develop front end development skills. Able to work in a team or individually.
        </p>
      </div>
      <div className="intro-image">
        <div className="intro-image2">
          <img src={profil} alt="foto" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
