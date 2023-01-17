import React from "react";
import SertifikatItem from "./SertifikatItem";
import "../styles/style-sertifikat.css";

const SertifikatList = ({ sertifikats }) => {
  return (
    <>
      <h1 className="title">CERTIFICATE</h1>
      <div className="sertifikat-list">
        {sertifikats.map((sertifikat) => (
          <SertifikatItem key={sertifikat.id} {...sertifikat} />
        ))}
      </div>
    </>
  );
};

export default SertifikatList;
