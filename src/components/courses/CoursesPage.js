import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    const { loadCourses } = this.props.actions;
    loadCourses();
  }
  render() {
    const { courses } = this.props;
    console.log(courses);
    return (
      <Fragment>
        <h2>Courses</h2>
        {courses.loading ? (
          <h1>No data to display</h1>
        ) : (
          <CourseList courses={courses.courses} />
        )}
      </Fragment>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ courses }) {
  return {
    courses: courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage); // connect returns function which then calls the component
