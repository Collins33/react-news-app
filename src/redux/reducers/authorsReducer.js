import * as types from "../constants/ActionConstants";

const initialState = {
  authors: [],
  loading: false,
  error: null
};

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_REQUEST:
      return { ...state, loading: true };
    case types.LOAD_AUTHORS_SUCCESS:
      return { ...state, authors: action.authors, loading: false };
    default:
      return state;
  }
}
