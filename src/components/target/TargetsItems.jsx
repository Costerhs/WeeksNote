import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTargetName } from './../../redux/redux/targetReducer';
const TargetsItems = ({ name, id, child, checks, onToggle, onDelete }) => {
  //dis
  const dispatch = useDispatch();
  //
  const [flag, setFlag] = useState(false);
  const forTargetName = React.createRef();
  const changeText = () => {
    const text = forTargetName.current.value;
    dispatch(setTargetName(text, id, child));
  };
  const newText = () => {
    setFlag(true);
  };
  const toggleCheck = () => {
    onToggle(!checks, id, child);
  };
  const deleteTarget = () => {
    onDelete(id, child);
  };
  return (
    <div className="container">
      {flag && (
        <>
          <input onChange={changeText} value={name} ref={forTargetName} className="target_inp" />
          <button className="btn_inp" onClick={() => setFlag(false)}>
            Save
          </button>
        </>
      )}
      <div className="container_text_flag">
        <div onClick={newText} className="target_elem">
          <p className={'p_target'}>{name}</p>
        </div>
        <div className="check">
          <div className="check_cont">
            <div className="check_false">
              <button onClick={deleteTarget} className="btn_delete">
                Удалить
              </button>
            </div>
            <div className="check_true">
              <p className="text_check">Выполнено</p>
              <input
                onClick={toggleCheck}
                className="in_check"
                checked={checks}
                type={'checkbox'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetsItems;
