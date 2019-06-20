import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";

import PropTypes from "prop-types";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    const { loadAuthors, loadCourses } = this.props;
    loadCourses();
    loadAuthors();
  }

  renderAuthor(authors, courseAuthorId) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <td>{authors.find(author => author.id == courseAuthorId)}</td>;
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

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage); // connect returns function which then calls the component
