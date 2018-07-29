import axios from 'axios';
import * as moment from 'moment';

import { LIST_CHECKED_URL } from '../../constants/urls';
import { GET_LIST_CHECKED } from '../../constants/action_names';

export const getListChecked = () => {
  return (dispatch) => {
    axios.get(LIST_CHECKED_URL)
      .then(response => {
        let { data } = response;
        let done = data.filter(card => card.data.listAfter.name == "Done");
        let inDevelopment = data.filter(card => card.data.listAfter.name == "In Development");
        let backLog = data.filter(card => card.data.listAfter.name == "BackLog");
        dispatch({
          type: GET_LIST_CHECKED,
          backLog,
          inDevelopment,
          done
        })
      })
      .catch(error => console.error(error));
  }
}