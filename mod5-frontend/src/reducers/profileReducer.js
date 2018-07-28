import { NEW_WEBSITE } from '../actions/types';
import { FETCH_WEBSITES } from '../actions/types';
import { WEBSITE_GRAPH } from '../actions/types';
import { SINLGE_WEBSITE } from '../actions/types';

const intialState = {
  user_website_data: [],
  website_target_data: [],
  single_website_data: []
}

export default function(state = intialState, action) {
  switch (action.type) {
    case NEW_WEBSITE:
      return {
        ...state,
        new_website_data: action.payload
      }
    case FETCH_WEBSITES:
      return {
        ...state,
        user_website_data: action.payload
      }
    case WEBSITE_GRAPH:
      return {
        ...state,
        website_target_data: action.payload
      }
    case SINLGE_WEBSITE:
      return {
        ...state,
        single_website_data: action.payload
      }
    default:
      return state;
  }
}
