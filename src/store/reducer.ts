import { combineReducers } from 'redux';
import { reducer as boardsReducer } from '../boards/reducer';

export const reducer = combineReducers({
  boards: boardsReducer,
});
