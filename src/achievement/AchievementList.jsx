import React from "react";
import AchievementBody from "./AchievementBody";
import "../styles/style-achievement.css";

const AchievementList = ({ achievements }) => {
  return (
    <div className="achievement-list">
      <h1 className="title">ACHIEVEMENTS</h1>
      <div className="achievement-list__detail">
        {achievements.map((achievement) => (
          <AchievementBody key={AchievementBody.id} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default AchievementList;
