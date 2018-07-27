import variables from '../config/variables';

const KEY = variables.KEY;
const TOKEN = variables.TOKEN;

const URL_BASE = `https://api.trello.com/1/boards/PA5OnH10/lists?key=${KEY}&token=${TOKEN}`;

export const BOARD_LIST_URL = `${URL_BASE}&filter=all`;
