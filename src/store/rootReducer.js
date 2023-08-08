import { combineReducers } from 'redux';
import contribitionSlices from './slices/contribitionSlices';

const rootReducer = combineReducers({
  contribitions: contribitionSlices.reducer,
});

export default rootReducer;
