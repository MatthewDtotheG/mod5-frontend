
const initialState = {
  currentUser: {
    id: undefined
  }
};

export default function(state = initialState, action){
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, email } = action.user;
      return { ...state, currentUser: { id, email } };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    default:
      return state;
  }
};
