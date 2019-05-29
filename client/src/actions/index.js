import actionTypes from "./types";

export const SignIn = userId => {
  return {
    type: actionTypes.SIGN_IN,
    payLoad: userId
  };
};

export const SignOut = () => {
  return {
    type: actionTypes.SIGN_OUT
  };
};
