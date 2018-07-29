import axios from 'axios';

import { GET_BOARD_LIST } from '../constants/action_names';
import { BOARD_LIST_URL } from '../constants/urls';

export const getBoardList = () => {
  return (dispatch:any) => {
    axios.get(BOARD_LIST_URL)
      .then(response => {
        let { data } = response;
        dispatch({
          type: GET_BOARD_LIST,
          boardList: data,
        })
      })
      .catch(error => console.log(error));
  }
}
