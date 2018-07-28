import { NEW_USERS } from '../actions/types';

const intialState = {
  user_data: []
}

export default function(state = intialState, action) {
  switch (action.type) {
    case NEW_USERS:
      return {
        ...state,
        user_data: action.payload
      }
    default:
      return state;
  }
}
