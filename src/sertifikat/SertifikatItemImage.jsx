import React from 'react';

const SertifikatItemImage = ({ imageUrl }) => {
  return (
    <div className='sertifikat-item__image'>
      <img src={imageUrl} alt='foto sertifikat' />
    </div>
  );
};

export default SertifikatItemImage;
