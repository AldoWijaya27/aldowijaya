import React from "react";
import ExperienceBody from "./ExperienceBody";
import "../../styles/style-experience.css";
import "aos/dist/aos.css";

const ExperienceList = ({ experiences }) => {
  return (
    <div className="experience" data-aos="zoom-in">
      <h1>EXPERIENCE</h1>
      <div className="container">
        {experiences.map((experience) => (
          <ExperienceBody key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
