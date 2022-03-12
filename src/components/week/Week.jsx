import React from 'react';
import { useSelector } from 'react-redux';
import WeekBlock from './WeekBlock';

const Week = () => {
  const items = useSelector((state) => state.week.items);
  const days = items.map((name, index) => {
    return <WeekBlock name={name} key={index} id={index} />;
  });

  return <div className="week">{days}</div>;
};

export default Week;
