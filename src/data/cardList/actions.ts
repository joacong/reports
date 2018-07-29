import axios from 'axios';
import { CARD_LIST_URL } from '../../constants/urls';
import { GET_CARD_LIST } from '../../constants/action_names';
import store from '../../store/index';

export const getCardList = () => {
  return (dispatch) => {
    axios.get(CARD_LIST_URL)
      .then(response => {
        let { data } = response;
        console.log(data);
        dispatch({
          type: GET_CARD_LIST,
          cardList: data
        })
      })
  }
}