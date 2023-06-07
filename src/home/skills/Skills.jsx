import React from "react";
import "../../styles/style-skill.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div className="div" data-aos="zoom-in">
      <h1>Skills</h1>
      <div className="skills-wrapper">
        <article className="skills-detail">
          <BsFillPatchCheckFill className="icon-check" />
          <div className="skills-detail__wrapper">
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="skills-detail">
          <BsFillPatchCheckFill className="icon-check" />
          <div className="skills-detail__wrapper">
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="skills-detail">
          <BsFillPatchCheckFill className="icon-check" />
          <div className="skills-detail__wrapper">
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="skills-detail">
          <BsFillPatchCheckFill className="icon-check" />
          <div className="skills-detail__wrapper">
            <h4>React JS</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="skills-detail">
          <BsFillPatchCheckFill className="icon-check" />
          <div className="skills-detail__wrapper">
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="skills-detail">
          <BsFillPatchCheckFill className="icon-check" />
          <div className="skills-detail__wrapper">
            <h4>Tailwind</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="skills-detail">
          <BsFillPatchCheckFill className="icon-check" />
          <div className="skills-detail__wrapper">
            <h4>Github</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Skills;
