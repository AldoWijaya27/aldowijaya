import React, { useState } from 'react';
import AchievementBody from './AchievementBody';
import '../styles/style-achievement.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { getDataAch } from '../dataAch';

const AchievementList = () => {
  const achievements = getDataAch();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const recordsPerPage = 14;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = achievements.slice(firstIndex, lastIndex);
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

  return (
    <div className='achievement-list'>
      <h1 className='title'>ACHIEVEMENTS</h1>
      <div className='search'>
        <input
          className='search-box'
          type='text'
          placeholder='Search '
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='pagination'>
        <a href='#' onClick={prevPage}>
          <IoIosArrowBack />
        </a>
        <p>
          {currentPage} / {npage}
        </p>
        <a href='#' onClick={nextPage}>
          <IoIosArrowForward />
        </a>
      </div>
      <div className='achievement-list__detail'>
        {records
          .filter((achievement) => {
            return (
              achievement.name.toLowerCase().includes(query) ||
              achievement.event.toLowerCase().includes(query) ||
              achievement.date.toLowerCase().includes(query) ||
              achievement.issuer.toLowerCase().includes(query)
            );
          })
          .map((achievement, id) => (
            <AchievementBody key={id} {...achievement} />
          ))}
      </div>
    </div>
  );
};

export default AchievementList;
