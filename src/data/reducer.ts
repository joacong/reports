import { combineReducers } from "redux";

import { reducer as listCheckedReducer } from "./listChecked/reducer";
import { reducer as cardListReducer } from "./cardList/reducer";

export const reducer = combineReducers({
  listChecked: listCheckedReducer,
  cardList: cardListReducer
});