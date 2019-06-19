import * as types from "../constants/ActionConstants";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.courseData }];
    case types.LOAD_COURSES_SUCCESS:
      return [...state, action.courses];
    default:
      return state;
  }
}
