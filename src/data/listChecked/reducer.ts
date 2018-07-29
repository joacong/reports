import { LIST_CHECKED } from '../../constants/propTypes';
import { GET_LIST_CHECKED } from '../../constants/action_names';

export const reducer= (state=LIST_CHECKED, action) => {
  switch(action.type) {
    case GET_LIST_CHECKED:
      return {
        ...state,
        backLog: action.backLog,
        inDevelopment: action.inDevelopment,
        done: action.done
      }
    default:
      return state;
  }
}