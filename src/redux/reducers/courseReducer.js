import * as types from "../constants/ActionConstants";

const initilState = {
  courses: [],
  loading: false,
  error: null
};
export default function courseReducer(state = initilState, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.courseData }];
    case types.LOAD_COURSE_REQUEST:
      return { ...state, loading: true };
    case types.LOAD_COURSES_SUCCESS:
      return { ...state, courses: action.courses, loading: false };
    default:
      return state;
  }
}
