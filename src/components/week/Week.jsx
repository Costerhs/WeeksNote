import React from 'react';
import { useSelector } from 'react-redux';
import WeekBlock from './WeekBlock';

const Week = () => {
  const items = useSelector((state) => state.week.items);

  const days = items.map((obj, index) => {
    return <WeekBlock name={obj.name} key={index} id={obj.id} />;
  });

  return <div className="week">{days}</div>;
};

export default Week;
