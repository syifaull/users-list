import axios from "axios";

export const GET_LIST_USERS = "GET_LIST_USERS";

export const getListUsers = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_USERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getListUser
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: GET_LIST_USERS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_USERS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
