const initialize = {
  items: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
};

const weekReducer = (state = initialize, action) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      return state;
  }
};

export default weekReducer;
