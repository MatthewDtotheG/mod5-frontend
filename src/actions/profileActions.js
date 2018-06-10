import { NEW_WEBSITE } from './types'

export const createWebsite = (websiteData) => dispatch => {
  let {user_id, name} = websiteData

  fetch(`http://localhost:5000/api/v1/websites/${user_id}`, {
       method: "POST",
       headers: {
         "Action": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify(websiteData)
    })
      .then(resp => resp.json())
      .then(new_user =>
        dispatch({
          type: NEW_WEBSITE,
          payload: new_user
        }));
}
