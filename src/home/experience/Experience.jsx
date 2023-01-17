import React from "react";
import "../../styles/style-experience.css";
import { GiTeacher, GiFlatfish } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

const Experience = () => {
  return (
    <div className="experience">
      <h1>EXPERIENCE</h1>
      <div className="container">
        <div className="card">
          <div className="imgBox">
            <GiTeacher className="icon" />
            <h2 className="judul1">Assistant</h2>
          </div>
          <div className="content">
            <div className="teks">
              <p className="education-item__program">Lab Teknik Komputer</p>
              <p className="education-item__date">Sep 2022 - Present</p>
              <p className="education-item__grade">Universitas Lampung</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <FaChalkboardTeacher className="icon" />
            <h2 className="judul1">Mentor</h2>
          </div>
          <div className="content">
            <div className="teks">
              <p className="education-item__program">Beasiswa Unggulan</p>
              <p className="education-item__date">May 2022 - Sep 2022</p>
              <p className="education-item__grade">Mentoring Beasiswa</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <TfiWrite className="icon-writer" />
            <h2 className="judul1">Writer</h2>
          </div>
          <div className="content">
            <div className="teks">
              <p className="education-item__program">Loker Programmer</p>
              <p className="education-item__date"> Jan 2022 - Apr 2022</p>
              <p className="education-item__grade">Lokpro Media</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <GiFlatfish className="icon" />
            <h2 className="judul1">Founder</h2>
          </div>
          <div className="content">
            <div className="teks">
              <p className="education-item__program">Betta.Geh</p>
              <p className="education-item__date">Sep 2020 - Jul 2021</p>
              <p className="education-item__grade">Bandar Lampung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
