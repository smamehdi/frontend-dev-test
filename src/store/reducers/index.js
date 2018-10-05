import { combineReducers } from 'redux';

let baseReducer = (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }

export default combineReducers({
    baseReducer
});