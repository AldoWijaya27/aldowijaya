import React from "react";
import Resume from "./Resume/resume.pdf";
import "../styles/style-buttonDownload.css";

const ButtonDownload = () => {
  return (
    <div className="button-wrapper" data-aos="zoom-in">
      <a href={Resume} download>
        <button className="button s-button">Resume</button>
      </a>
      <a href="mailto:aldowijayasept27@gmail.com">
        <button className="button e-button">Hire</button>
      </a>
    </div>
  );
};

export default ButtonDownload;
