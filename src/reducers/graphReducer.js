import { FETCH_GRAPHS } from '../actions/types';

const intialState = {
  items: []
}

export default function(state = intialState, action) {
  switch (action.type) {
    case FETCH_GRAPHS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
