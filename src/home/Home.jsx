import React from "react";
import Intro from "./Intro";
import ButtonDownload from "./ButtonDownload";
import EducationList from "../home/education/EducationList";
import OrganizationList from "../home/organization/OrganizationList";
import Skills from "../home/skills/Skills";
import Project from "../home/project/Project";
import Experience from "../home/experience/Experience";
import { getDataEd } from "../dataEd";
import { getDataOrg } from "../dataOrg";

const Home = () => {
  const educations = getDataEd();
  const organizations = getDataOrg();

  return (
    <div className="home">
      <Intro />
      <ButtonDownload />
      <div className="edu-org">
        <EducationList educations={educations} />
        <div className="vertikal"></div>
        <OrganizationList organizations={organizations} />
      </div>
      <Skills />
      <Project />
      <Experience />
    </div>
  );
};

export default Home;
