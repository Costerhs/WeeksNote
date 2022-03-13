import produce from 'immer';

const SET_PROCENT = 'SET_PROCENT';
const SET_NAME_TARGET = 'SET_NAME_TARGET';
const ADD_TARGET = 'ADD_TARGET';
const TOGGLE_FLAG = 'TOGGLE_FLAG';
const DELETE_TARGET = 'DELETE_TARGET';
const SET_COUNT = 'SET_COUNT';
const initialize = {
  items: [
    [
      { name: 'Задача', flag: false, id: 0 },
      { name: 'Задача', flag: false, id: 1 },
    ],
    [
      { name: 'Задача', flag: false, id: 0 },
      { name: 'Задача', flag: false, id: 1 },
    ],
    [
      { name: 'Задача', flag: false, id: 0 },
      { name: 'Задача', flag: false, id: 1 },
    ],
    [
      { name: 'Задача', flag: false, id: 0 },
      { name: 'Задача', flag: false, id: 1 },
    ],
    [
      { name: 'Задача', flag: false, id: 0 },
      { name: 'Задача', flag: false, id: 1 },
    ],
    [
      { name: 'Задача', flag: false, id: 0 },
      { name: 'Задача', flag: false, id: 1 },
    ],
    [
      { name: 'Задача', flag: false, id: 0 },
      { name: 'Задача', flag: false, id: 1 },
    ],
  ],
  days: [
    { name: 'Понедельник', id: 0, procent: null },
    { name: 'Вторник', id: 1, procent: null },
    { name: 'Среда', id: 2, procent: null },
    { name: 'Четверг', id: 3, procent: null },
    { name: 'Пятница', id: 4, procent: null },
    { name: 'Суббота', id: 5, procent: null },
    { name: 'Воскресенье', id: 6, procent: null },
  ],
  fetch: false,
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
      let lengthTarget = state.items[action.id].length;

      if (lengthTarget >= 9) {
        return {
          ...state,
          fetch: true,
        };
      }
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
      return produce(state, (draft) => {
        const obj = draft.items[action.id].filter((elem) => elem.id != action.child);
        draft.items[action.id] = obj;
      });

    case SET_COUNT:
      return {
        ...state,
        count: getTotalSum(state.items, 'flag'),
      };

    case SET_PROCENT:
      let num = 0;
      let lengthOb = 0;
      let res = 0;
      state.items[action.id].map((elem) => {
        if (elem.flag == true) {
          num += 1;
          lengthOb += 1;
        } else {
          lengthOb += 1;
        }
      });
      res = (420 / 100) * Math.trunc(num / (lengthOb / 100));
      return produce(state, (draft) => {
        draft.days[action.id].procent = res;
      });
    default:
      return state;
  }
};

export const setProcent = (id) => ({ type: SET_PROCENT, id });
export const deleteElementTarget = (id, child) => ({ type: DELETE_TARGET, id, child });
export const addTarget = (id) => ({ type: ADD_TARGET, id });
export const setTargetName = (text, id, child) => ({ type: SET_NAME_TARGET, text, id, child });
export const toggleFlag = (flag, id, child) => ({ type: TOGGLE_FLAG, flag, id, child });
export const setCount = () => ({ type: SET_COUNT });

export default targetReducer;
