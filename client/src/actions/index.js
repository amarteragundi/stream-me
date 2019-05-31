import actionTypes from "./types";
import streams from "../apis/streams";
import history from "../history";

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
  dispatch({
    type: actionTypes.CREATE_STREAM,
    payload: response.data
  });
  // navigate back to all streams after successful response
  history.push("/");
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
