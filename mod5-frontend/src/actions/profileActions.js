import { NEW_WEBSITE } from './types'
import { FETCH_WEBSITES } from './types'
import { WEBSITE_GRAPH } from '../actions/types';
import { SINLGE_WEBSITE } from '../actions/types';

export const createWebsite = (websiteData) => dispatch => {
  let {name, user_id} = websiteData
  fetch(`http://localhost:5000/api/v1/websites/`, {
       method: "POST",
       headers: {
         "Action": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify(websiteData)
    })
      .then(resp => resp.json())
      .then(new_website =>
        dispatch({
          type: NEW_WEBSITE,
          payload: new_website
        }))
}

export const fetchWebsites = (id) => dispatch => {
  fetch(`http://localhost:5000/api/v1/users/${id}/websites`)
  .then(resp => resp.json())
  .then(websiteData => dispatch({
    type: FETCH_WEBSITES,
    payload: websiteData
  }));
}

export const websiteGraph = (id) => dispatch => {
     fetch(`http://localhost:5000/api/v1/websites/${id}/targets`)
     .then(resp => resp.json())
     .then(data => dispatch({
       type: WEBSITE_GRAPH,
       payload: data
     }));
}

export const singleWebsite = (id) => dispatch => {
     fetch(`http://localhost:5000/api/v1/websites/${id}`)
     .then(resp => resp.json())
     .then(data => dispatch({
       type: SINLGE_WEBSITE,
       payload: data
     }));
}
