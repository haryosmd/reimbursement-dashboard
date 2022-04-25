import {
  FETCH_USER_DETAIL,
  SET_REGISTER_USER,
  SET_LOGIN_USER,
  PUT_USER,
  SET_IS_LOGIN,
  SET_LOADING,
  SET_ERROR,
} from '../actions/actionType';

const initialState = {
  users: [],
  user: {},
  isLogin: false,
  isLoading: true,
  error: null,
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_DETAIL:
      return { ...state, user: payload };
    case SET_REGISTER_USER:
      return { ...state, users: [payload, ...state.users] };
    case SET_LOGIN_USER:
      return { ...state, user: payload };
    case SET_IS_LOGIN:
      return { ...state, isLogin: payload };
    case PUT_USER:
      return { ...state, user: payload };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}

export default userReducer;
