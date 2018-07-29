import { combineReducers } from 'redux';
import { reducer as boardsReducer } from '../boards/reducer';
import { reducer as dataReducer } from '../data/reducer';

export const reducer = combineReducers({
  boards: boardsReducer,
  data: dataReducer
});
