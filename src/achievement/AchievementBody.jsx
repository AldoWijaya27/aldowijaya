import React from 'react';

const AchievementBody = ({ name, event, issuer, date }) => {
  return (
    <div className='achievement'>
      <div className='achievement-body'>
        <h3 className='achievement-name'>{name}</h3>
        <p className='achievement-event'>{event}</p>
        <p className='achievement-issuer'>{issuer}</p>
        <p className='achievement-date'>{date}</p>
        <br />
      </div>
    </div>
  );
};

export default AchievementBody;
