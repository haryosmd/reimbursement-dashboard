import {
  FETCH_USER_DETAIL,
  SET_REGISTER_USER,
  SET_LOGIN_USER,
  PUT_USER,
  SET_IS_LOGIN,
  SET_LOADING,
  SET_ERROR,
} from './actionType';

export function setFetchUserDetail(payload) {
  return {
    type: FETCH_USER_DETAIL,
    payload: payload,
  };
}

export function setRegisterUser(payload) {
  return {
    type: SET_REGISTER_USER,
    payload: payload,
  };
}

export function setLoginUser(payload) {
  return {
    type: SET_LOGIN_USER,
    payload: payload,
  };
}

export const setUserIsLogin = (payload) => {
  return {
    type: SET_IS_LOGIN,
    payload,
  };
};

export function setEditUser(payload) {
  return {
    type: PUT_USER,
    payload: payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload: payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload,
  };
}

export const userRegister = (inputs) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return fetch('http://localhost:4000/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setRegisterUser(data));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const userLogin = (inputs) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return fetch('http://localhost:4000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('role', data.role);
        localStorage.setItem('id', data.id);
        dispatch(setLoginUser(data));
        dispatch(setUserIsLogin(true));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const userDetail = (id, user) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return fetch('http://localhost:4000/users/' + id, {
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setFetchUserDetail(data));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const userEdit = (id, user) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return fetch('http://localhost:4000/users/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setEditUser(data));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };
};
