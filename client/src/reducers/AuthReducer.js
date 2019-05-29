import actionTypes from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payLoad };
    case actionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
