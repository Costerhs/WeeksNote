import React from 'react';
import { NavLink } from 'react-router-dom';
const WeekBlock = ({ procent, name, id }) => {
  return (
    <div className="boss_block">
      <NavLink className={'adr'} to={`/targets/${id}`}>
        <div className="back_color" style={{ width: procent || 0 }}>
          {' '}
        </div>
        <div className="day">
          <p className="day_name">{name}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default WeekBlock;
