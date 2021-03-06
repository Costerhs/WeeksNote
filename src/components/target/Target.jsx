import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink, useMatch } from 'react-router-dom';
import { addTarget, deleteElementTarget, toggleFlag } from '../../redux/redux/targetReducer';
import { setProcent } from '../../redux/redux/targetReducer';
import TargetsItems from './TargetsItems';

const Target = () => {
  const add = useMatch('/targets/:name');
  const namead = add.params.name;
  const fetch = useSelector((state) => state.target.fetch);
  const name = useSelector((state) => state.target.items);

  //dispatch
  const dispatch = useDispatch();
  const addNewTarget = () => {
    dispatch(addTarget(namead));
  };
  const deleteElem = (id, child) => {
    dispatch(deleteElementTarget(id, child));
  };
  const toggleFlagCheck = (cheks, id, child) => {
    dispatch(toggleFlag(cheks, id, child));
  };

  const func = () => {
    dispatch(setProcent(namead));
  };

  <p className="error_text">Превышен лимит задач!Не перетруждайтесь</p>;
  const tgs = name[namead].map((obj, index) => {
    return (
      <TargetsItems
        onDelete={deleteElem}
        onToggle={toggleFlagCheck}
        checks={obj.flag}
        name={obj.name}
        key={index}
        id={namead}
        child={obj.id}
      />
    );
  });

  return (
    <div className="target">
      <h1 className="zag">Задачи</h1>
      {tgs}
      <div className="for_btn_tr">
        <div className="add_new_target">
          <button onClick={addNewTarget} className="btn_new_target">
            Добавить
          </button>
        </div>
        <div className="back">
          <NavLink onClick={func} to={'/'}>
            <button className="btn_back">Вернуться</button>
          </NavLink>
        </div>
      </div>
      {fetch && <p className="error_text">Превышен лимит задач!Не перетруждайтесь</p>}
    </div>
  );
};

export default Target;
