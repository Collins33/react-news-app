import * as types from "../constants/ActionConstants";
import * as authorAPI from "../../../src/api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthorsRequest() {
  return { type: types.LOAD_AUTHORS_REQUEST };
}

export function loadAuthorsFail(error) {
  return { type: types.LOAD_AUTHORS_FAIL, error };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(loadAuthorsRequest());
    return authorAPI
      .getAuthors()
      .then(response => {
        dispatch(loadAuthorsSuccess(response));
      })
      .catch(error => {
        dispatch(loadAuthorsFail(loadAuthorsFail(error)));
      });
  };
}
