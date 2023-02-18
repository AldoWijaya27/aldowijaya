import React from 'react';

const EducationBody = ({ schoolName, study, time, grade }) => {
  return (
    <div className='education-item__body'>
      <div className='education-item__wrapper'>
        <h3 className='education-item__school'>{schoolName}</h3>
        <p className='education-item__program'>{study}</p>
        <p className='education-item__date'>{time}</p>
        <p className='education-item__grade'>{grade}</p>
        <br />
      </div>
    </div>
  );
};

export default EducationBody;
