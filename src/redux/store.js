import { createStore, combineReducers } from 'redux';
import targetReducer from './redux/targetReducer';

const reducer = combineReducers({
  target: targetReducer,
});

let store = createStore(reducer);
window.store = store;
export default store;
