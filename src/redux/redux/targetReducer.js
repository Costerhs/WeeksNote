import produce from 'immer';

const SET_NAME_TARGET = 'SET_NAME_TARGET';
const ADD_TARGET = 'ADD_TARGET';
const TOGGLE_FLAG = 'TOGGLE_FLAG';
const DELETE_TARGET = 'DELETE_TARGET';
const SET_COUNT = 'SET_COUNT';
const initialize = {
  items: [
    [
      { name: '0zadacha1', flag: false, id: 0 },
      { name: '0zadacha2', flag: false, id: 1 },
      { name: '0zadacha3', flag: false, id: 2 },
    ],
    [
      { name: '1asdas', flag: false, id: 0 },
      { name: '1qqqqq', flag: false, id: 1 },
    ],
    [
      { name: '2asdas', flag: false, id: 0 },
      { name: '2qqqqq', flag: false, id: 1 },
    ],
    [
      { name: '3asdas', flag: false, id: 0 },
      { name: '3qqqqq', flag: false, id: 1 },
    ],
    [],
    [],
    [],
  ],
  count: null,
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const targetReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_NAME_TARGET:
      return produce(state, (draft) => {
        draft.items[action.id][action.child].name = action.text;
      });
    case ADD_TARGET:
      const lengthTarget = state.items[action.id].length;
      return produce(state, (draft) => {
        draft.items[action.id].push({
          name: 'новая задача',
          flag: false,
          id: lengthTarget,
        });
      });

    case TOGGLE_FLAG:
      return produce(state, (draft) => {
        draft.items[action.id][action.child].flag = action.flag;
      });

    case DELETE_TARGET:
      return produce(state, (draft) => {});

    case SET_COUNT:
      return {
        ...state,
        count: getTotalSum(state.items, 'flag'),
      };
    default:
      return state;
  }
};

export const deleteElementTarget = (id, child) => ({ type: DELETE_TARGET, id, child });
export const addTarget = (id) => ({ type: ADD_TARGET, id });
export const setTargetName = (text, id, child) => ({ type: SET_NAME_TARGET, text, id, child });
export const toggleFlag = (flag, id, child) => ({ type: TOGGLE_FLAG, flag, id, child });
export const setCount = () => ({ type: SET_COUNT });

export default targetReducer;
