import React from "react";

const SertifikatItemButton = ({ link }) => {
  return (
    <a href={link}>
      <button className="sertifikat-item__button">DETAIL</button>
    </a>
  );
};

export default SertifikatItemButton;
