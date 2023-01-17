import React from 'react';
import SertifikatItemBody from './SertifikatItemBody';
import SertifikatItemImage from './SertifikatItemImage';
import SertifikatItemButton from './SertifikatItemButton';

const SertifikatItem = ({ imageUrl, title, date, issuer, link }) => {
  return (
    <div className='sertifikat-item'>
      <SertifikatItemImage imageUrl={imageUrl} />
      <SertifikatItemBody title={title} date={date} issuer={issuer} />
      <SertifikatItemButton link={link} />
    </div>
  );
};

export default SertifikatItem;
