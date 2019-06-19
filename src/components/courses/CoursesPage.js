import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import * as authorsAction from "../../redux/actions/authorActions";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    const { loadCourses } = this.props.CourseActions;
    const { loadAuthors } = this.props.AuthorActions;
    loadCourses();
    loadAuthors();
  }

  renderAuthor(authors, courseAuthorId) {
    return authors.find(author => author.id == courseAuthorId);
  }

  render() {
    const { courses, authors } = this.props;
    console.log(authors.authors);
    return (
      <Fragment>
        <h2>Courses</h2>
        {courses.loading ? (
          <h1>No data to display</h1>
        ) : (
          <CourseList
            courses={courses.courses}
            authors={authors.authors}
            renderAuthor={this.renderAuthor}
          />
        )}
      </Fragment>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ courses, authors }) {
  return {
    courses: courses,
    authors: authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CourseActions: bindActionCreators(courseAction, dispatch),
    AuthorActions: bindActionCreators(authorsAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage); // connect returns function which then calls the component
