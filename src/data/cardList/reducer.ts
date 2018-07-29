import { CARD_LIST } from '../../constants/propTypes';
import { GET_CARD_LIST } from '../../constants/action_names';

export const reducer = (state = CARD_LIST, action) => {
  switch(action.type) {
    case GET_CARD_LIST:
      return action.cardList;
    default:
      return state;
  }
}