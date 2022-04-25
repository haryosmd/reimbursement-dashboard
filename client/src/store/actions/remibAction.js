import {
  FETCH_REIMBURSEMENT,
  SET_REIMBURSEMENT,
  PATCH_REIMBURSEMENT,
  DELETE_REIMBURSEMENT,
  SET_LOADING,
  SET_ERROR,
} from './actionType';

export function setFetchReimb(payload) {
  return {
    type: FETCH_REIMBURSEMENT,
    payload: payload,
  };
}

export function setReimb(payload) {
  return {
    type: SET_REIMBURSEMENT,
    payload: payload,
  };
}

export function setEditReimb(payload) {
  return {
    type: PATCH_REIMBURSEMENT,
    payload: payload,
  };
}

export function setDeleteReimb(payload) {
  return {
    type: DELETE_REIMBURSEMENT,
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

export const createReimb = (inputs) => {
  return (dispatch) => {
    // console.log(localStorage.access_token);
    const dataForm = new FormData();
    dataForm.append('receipt', inputs);

    console.log(inputs);
    dispatch(setLoading(true));
    return fetch('http://localhost:4000/reimbursements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        access_token: localStorage.access_token,
      },
      body: dataForm,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setReimb(data));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const fetchReimb = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return fetch('http://localhost:4000/reimbursements', {
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setFetchReimb(data));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };
};

export const reimbEdit = (id, reimbursement) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return fetch('http://localhost:4000/reimbursements/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(reimbursement),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setEditReimb(data));
      })
      .catch((error) => dispatch(setError(error.message)))
      .finally(() => dispatch(setLoading(false)));
  };
};
