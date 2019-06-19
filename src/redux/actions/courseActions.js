import * as types from "../constants/ActionConstants";
import * as courseAPI from "../../../src/api/courseApi";

export function createCourse(courseData) {
  return {
    type: types.CREATE_COURSE,
    courseData
  };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCoursesFail(error) {
  return { type: types.LOAD_COURSES_FAIL, error };
}
export function loadCourses() {
  // every thunk returns a function that accepts dispatch
  return function(dispatch) {
    return courseAPI
      .getCourses()
      .then(response => {
        dispatch(loadCoursesSuccess(response));
      })
      .catch(error => {
        dispatch(loadCoursesFail(error));
      });
  };
}
