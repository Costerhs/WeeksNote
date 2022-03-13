import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeekBlock from './WeekBlock';

const Week = () => {
  const items = useSelector((state) => state.target.days);

  const days = items.map((obj, index) => {
    return <WeekBlock procent={obj.procent} name={obj.name} key={index} id={obj.id} />;
  });

  return <div className="week">{days}</div>;
};

export default Week;
