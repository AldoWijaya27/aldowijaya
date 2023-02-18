import React from 'react';
import ExperienceBody from './ExperienceBody';
import '../../styles/style-experience.css';

const ExperienceList = ({ experiences }) => {
  return (
    <div className='experience'>
      <h1>EXPERIENCE</h1>
      <div className='container'>
        {experiences.map((experience) => (
          <ExperienceBody key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
