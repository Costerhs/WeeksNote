const SET_NAME_TARGET = 'SET_NAME_TARGET';

const initialize = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
};

const targetReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_NAME_TARGET:
      return {
        ...state,
        value: action.text,
      };

    default:
      return state;
  }
};

export const setTargetName = (text) => ({ type: SET_NAME_TARGET, text });
export default targetReducer;
