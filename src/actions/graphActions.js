import { FETCH_GRAPHS } from './types'

export const fetchGraphs = () => dispatch => {
     fetch('http://localhost:5000/api/v1/targets')
     .then(resp => resp.json())
     .then(data => dispatch({
       type: FETCH_GRAPHS,
       payload: data
     }));
}
