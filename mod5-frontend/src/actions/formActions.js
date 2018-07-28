import { NEW_USERS } from './types'

export const createUser = (userData) => dispatch => {
  fetch(`http://localhost:5000/api/v1/users`, {
       method: "POST",
       headers: {
         "Action": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify(userData)
    })
      .then(resp => resp.json())
      .then(new_user =>
        dispatch({
          type: NEW_USERS,
          payload: new_user
        }));
    }
