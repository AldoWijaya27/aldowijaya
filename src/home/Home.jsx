import React from 'react';
import Intro from './Intro';
import ButtonDownload from './ButtonDownload';
import EducationList from '../home/education/EducationList';
import OrganizationList from '../home/organization/OrganizationList';
import Skills from '../home/skills/Skills';
import Project from '../home/project/Project';
import ExperienceList from '../home/experience/ExperienceList';
import { getDataEd } from '../dataEd';
import { getDataOrg } from '../dataOrg';
import { getDataExp } from '../dataExp';

const Home = () => {
  const educations = getDataEd();
  const organizations = getDataOrg();
  const experiences = getDataExp();

  return (
    <div className='home'>
      <Intro />
      <ButtonDownload />
      <div className='edu-org'>
        <EducationList educations={educations} />
        <div className='vertikal'></div>
        <OrganizationList organizations={organizations} />
      </div>
      <Skills data-aos='fade-up' />
      <Project />
      <ExperienceList experiences={experiences} />
    </div>
  );
};

export default Home;
