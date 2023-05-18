import React, { useEffect, useState } from "react";
import AchievementBody from "./AchievementBody";
import "../styles/style-achievement.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getDataAch } from "../dataAch";

const AchievementList = () => {
  const achievements = getDataAch();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const recordsPerPage = 14;
  const npage = Math.ceil(achievements.length / recordsPerPage);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredAchievements = achievements.filter((achievement) => {
    return achievement.name.toLowerCase().includes(query) || achievement.event.toLowerCase().includes(query) || achievement.date.toLowerCase().includes(query) || achievement.issuer.toLowerCase().includes(query);
  });

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredAchievements.slice(firstIndex, lastIndex);

  return (
    <div className="achievement-list">
      <h1 className="title">ACHIEVEMENTS</h1>
      <div className="achievement-list__header">
        <div className="search">
          <input className="search-box" type="text" placeholder="Search " onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="pagination">
          <a href="#" onClick={prevPage}>
            <IoIosArrowBack />
          </a>
          <p>
            {currentPage} / {npage}
          </p>
          <a href="#" onClick={nextPage}>
            <IoIosArrowForward />
          </a>
        </div>
      </div>
      <div className="achievement-list__detail">
        {records.length > 0 ? (
          records.map((achievement, id) => <AchievementBody key={id} {...achievement} />)
        ) : (
          <div className="not-found-box">
            <p className="not-found-text">Not Found</p>
            <p>Data tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementList;
