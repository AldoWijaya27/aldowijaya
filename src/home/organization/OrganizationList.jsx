import React from "react";
import OrganizationBody from "./OrganizationBody";
import "../../styles/style-sertifikat.css";
import "../../styles/style-education.css";

const OrganizationList = ({ organizations }) => {
  return (
    <>
      <div className="education-list">
        <h1>
          Organization <hr />{" "}
        </h1>
        {organizations.map((organization) => (
          <OrganizationBody key={organization.id} {...organization} />
        ))}
      </div>
    </>
  );
};

export default OrganizationList;
