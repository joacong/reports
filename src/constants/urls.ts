import variables from '../config/variables';

const KEY = variables.KEY;
const TOKEN = variables.TOKEN;

const URL_BASE = (path, params={}) => {
  let _params = Object.keys(params).map(k => {
    return `${k}=${params[k]}`
  }).join("&");
  return `https://api.trello.com/1/boards/PA5OnH10/${path}?key=${KEY}&token=${TOKEN}&${_params}`;
}

export const BOARD_LIST_URL = URL_BASE('lists',{filter: 'all'});
export const LIST_CHECKED_URL = URL_BASE('actions', {filter: 'updateCard:idList'});
export const CARD_LIST_URL = URL_BASE('cards');