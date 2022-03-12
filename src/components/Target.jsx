import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTargetName } from '../redux/redux/targetReducer';
import { NavLink } from 'react-router-dom';

const Target = () => {
  //dispatch
  const dispatch = useDispatch();
  //state
  const name = useSelector((state) => state.target.value);
  const [flag, setFlag] = useState(false);
  //
  const forTargetName = React.createRef();
  const changeText = () => {
    const text = forTargetName.current.value;
    dispatch(setTargetName(text));
  };
  const newText = () => {
    setFlag(true);
  };
  console.log(name);
  console.log(flag);
  return (
    <div className="target">
      <h1 className="zag">Задачи</h1>
      <div className="container">
        {flag && (
          <>
            <input onChange={changeText} value={name} ref={forTargetName} className="target_inp" />
            <button className="btn_inp" onClick={() => setFlag(false)}>
              Save
            </button>
          </>
        )}
        <div onClick={newText} className="target_elem">
          <p>{name}</p>
        </div>
      </div>
      <div className="back">
        <NavLink to={'/'}>
          <button className="btn_back">Вернуться</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Target;
