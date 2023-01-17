import React from "react";
import SertifikatList from "./sertifikat/SertifikatList";
import AchievementList from "./achievement/AchievementList";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import { getData } from "./data";
import { getDataAch } from "./dataAch";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";

const PortoApp = () => {
  const sertifikats = getData();
  const achievements = getDataAch();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificate" element={<SertifikatList sertifikats={sertifikats} />} />
        <Route path="/achievement" element={<AchievementList achievements={achievements} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default PortoApp;
