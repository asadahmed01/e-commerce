import axios from "axios";
import * as actions from "../apiActionCreator";
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onSuccess, onError, onStart } = action.payload;
    //make api call
    if (onStart) dispatch({ type: onStart });

    next(action);
    try {
      const response = await axios.request({
        baseURL: process.env.REACT_APP_BASEURL,
        url,
        method,
        data,
      });

      dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }

    //handle resolved promise

    //handle rejected promise
  };
export default api;
