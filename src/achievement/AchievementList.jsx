import React, { useState } from "react";
import AchievementBody from "./AchievementBody";
import "../styles/style-achievement.css";
import { getDataAch } from "../dataAch";
import { FiSearch } from "react-icons/fi";

const AchievementList = () => {
  const achievements = getDataAch();
  const [query, setQuery] = useState("");

  const filteredAchievements = achievements.filter((achievement) => {
    return achievement.name.toLowerCase().includes(query) || achievement.event.toLowerCase().includes(query) || achievement.date.toLowerCase().includes(query) || achievement.issuer.toLowerCase().includes(query);
  });

  return (
    <div className="achievement-list">
      <h1 className="title">ACHIEVEMENTS</h1>
      <div className="achievement-list__header">
        <div className="search-input">
          <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Ketikan kata kunci ...." className="search-input2" />
          <FiSearch className="search-button" />{" "}
        </div>
      </div>
      <div className="achievement-list__detail">
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement, id) => <AchievementBody key={id} {...achievement} />)
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
