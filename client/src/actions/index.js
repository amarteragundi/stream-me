import actionTypes from "./types";
import streams from "../apis/streams";

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

export const CreateStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  debugger;
  dispatch({
    type: actionTypes.CREATE_STREAM,
    payload: response.data
  });
};

export const FetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({
    type: actionTypes.FETCH_STREAMS,
    payload: response.data
  });
};

export const FetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: actionTypes.FETCH_STREAM,
    payload: response.data
  });
};

export const EditStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({
    type: actionTypes.EDIT_STREAM,
    payLoad: response.data
  });
};

export const DeleteStream = id => async dispatch => {
  dispatch({
    type: actionTypes.DELETE_STREAM,
    payload: id
  });
};
