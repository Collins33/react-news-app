import * as types from "../constants/ActionConstants";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.courseData }];
    default:
      return state;
  }
}
