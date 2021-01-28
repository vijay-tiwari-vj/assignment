import {RECEIVE_API_DATA} from '../actions';

export const data = (state={}, {type, data}) => {
  switch(type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
}

export default data;