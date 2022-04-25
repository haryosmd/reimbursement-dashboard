import {
  FETCH_REIMBURSEMENT,
  SET_REIMBURSEMENT,
  PATCH_REIMBURSEMENT,
  DELETE_REIMBURSEMENT,
  SET_LOADING,
  SET_ERROR,
} from '../actions/actionType';

const initialState = {
  reimbursements: [],
  reimbursement: {},
  isLoading: true,
  error: null,
};

function reimbReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REIMBURSEMENT:
      return { ...state, reimbursements: payload };
    case SET_REIMBURSEMENT:
      return { ...state, reimbursements: [payload, ...state.reimbursements] };
    case PATCH_REIMBURSEMENT:
      return { ...state, reimbursement: payload };
    case DELETE_REIMBURSEMENT:
      const newReimb = state.reimbursements.filter(
        (reimbursement) => reimbursement.id !== payload
      );
      return { ...state, reimbursements: newReimb };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}

export default reimbReducer;
