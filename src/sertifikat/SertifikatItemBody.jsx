import React from 'react';

const SertifikatItemBody = ({ title, date, issuer }) => {
  return (
    <div className='sertifikat-item__body'>
      <h3 className='sertifikat-item__title'>{title}</h3>
      <p className='sertifikat-item__issuer'>{issuer}</p>
      <p className='sertifikat-item__date'>{date}</p>
    </div>
  );
};

export default SertifikatItemBody;
