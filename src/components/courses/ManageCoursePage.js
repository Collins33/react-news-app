import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import * as authorsAction from "../../redux/actions/authorActions";

import PropTypes from "prop-types";

function ManageCoursePage({ loadAuthors, loadCourses, courses, authors }) {
  useEffect(() => {
    loadAuthors();
    loadCourses;
  }, []); // the passed array represents when the useEffect should run
  // right now it runs only once since the array is empty

  return (
    <Fragment>
      <h2>Manage Course</h2>
    </Fragment>
  );
}

ManageCoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ courses, authors }) {
  return {
    courses: courses,
    authors: authors
  };
}

const mapDispatchToProps = {
  loadCourses: courseAction.loadCourses,
  loadAuthors: authorsAction.loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage); // connect returns function which then calls the component
