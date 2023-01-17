import React from "react";
import EducationBody from "./EducationBody";
import "../../styles/style-sertifikat.css";
import "../../styles/style-education.css";

const EducationList = ({ educations }) => {
  return (
    <>
      <div className="education-list">
        <h1>
          Education <hr />{" "}
        </h1>
        {educations.map((education) => (
          <EducationBody key={education.id} {...education} />
        ))}
      </div>
    </>
  );
};

export default EducationList;
