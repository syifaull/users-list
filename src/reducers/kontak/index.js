import { GET_LIST_USERS } from "../../actions/userAction";

const initialState = {
  getListUsersResult: false,
  getListUsersLoading: false,
  getListUsersError: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_USERS:
      return {
        ...state,
        getListUsersResult: action.payload.data,
        getListUsersLoading: action.payload.loading,
        getListUsersError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
