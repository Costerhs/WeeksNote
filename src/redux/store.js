import { createStore, combineReducers } from 'redux';
import targetReducer from './redux/targetReducer';
import weekReducer from './redux/weekReducer';

const reducer = combineReducers({
  week: weekReducer,
  target: targetReducer,
});

let store = createStore(reducer);
window.store = store;
export default store;
