import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const logger = process.env.NODE_ENV == "development" ?
               store => next => action => {
                 console.log('dispatching', action);
                 let result = next(action);
                 console.log('new state', store.getState());
                 return result;
               } :
               store => next => action => {};

let store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

export default store;
