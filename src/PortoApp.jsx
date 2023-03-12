import React from 'react';
import SertifikatList from './sertifikat/SertifikatList';
import AchievementList from './achievement/AchievementList';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';
import { getData } from './data';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import '../src/styles/style.css';

const PortoApp = () => {
  const sertifikats = getData();

  return (
    <>
      <div className='main-page'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/certificate'
            element={<SertifikatList sertifikats={sertifikats} />}
          />
          <Route path='/achievement' element={<AchievementList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default PortoApp;
