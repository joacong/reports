import { BOARDS_LIST } from '../constants/propTypes';
import { GET_BOARD_LIST } from '../constants/action_names';

export const reducer = (state = BOARDS_LIST, action) => {
  switch(action.type) {
    case GET_BOARD_LIST:
      return action.boardList;
    default:
      return state;
  }
}
