import React from "react";

const OrganizationBody = ({ name, text, position, year }) => {
  return (
    <div className="education-item__body">
      <div className="education-item__wrapper">
        <h3 className="education-item__school">{name}</h3>
        <p className="education-item__program">{text}</p>
        <p className="education-item__date">{position}</p>
        <p className="education-item__grade">{year}</p>
        <br />
      </div>
    </div>
  );
};

export default OrganizationBody;
