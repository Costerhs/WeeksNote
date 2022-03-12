import React from 'react';
import { NavLink } from 'react-router-dom';
const WeekBlock = ({ name, id }) => {
  // console.log(name);

  return (
    <div className="day">
      <NavLink className={'adr'} to={`/targets/${id}`}>
        <p className="day_name">{name}</p>
      </NavLink>
    </div>
  );
};

export default WeekBlock;
