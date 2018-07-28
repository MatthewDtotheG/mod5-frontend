import { combineReducers } from 'redux';
import formReducer from './formReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  user_data: formReducer,
  auth: loginReducer,
  website_data: profileReducer
});
