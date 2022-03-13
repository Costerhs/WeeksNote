const initialize = {
  items: [
    { name: 'Понедельник', id: 0 },
    { name: 'Вторник', id: 1 },
    { name: 'Среда', id: 2 },
    { name: 'Четверг', id: 3 },
    { name: 'Пятница', id: 4 },
    { name: 'Суббота', id: 5 },
    { name: 'Воскресенбе', id: 6 },
  ],
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
