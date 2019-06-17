import * as types from "../constants/ActionConstants";

const createCourse = courseData => ({
  type: types.CREATE_COURSE,
  courseData
});

export default createCourse;
