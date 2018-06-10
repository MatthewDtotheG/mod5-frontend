import { NEW_WEBSITE } from '../actions/types';

const intialState = {
  website_data: []
}

export default function(state = intialState, action) {
  switch (action.type) {
    case NEW_WEBSITE:
      return {
        ...state,
        website_data: action.payload
      }
    default:
      return state;
  }
}
