import { combineReducers } from 'redux';
import graphReducer from './graphReducer';
import formReducer from './formReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  target_data: graphReducer,
  user_data: formReducer,
  auth: loginReducer,
  website_data: profileReducer
});
