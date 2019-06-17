import React, { Component } from "react";
import { connect } from "react-redux";
import courseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    const { createCourse } = this.props;
    event.preventDefault();
    createCourse(this.state.course);
    alert(this.state.course.title);
  };
  render() {
    const { courses } = this.props;
    console.log(courses);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="save" />
          {courses.map(course => (
            <div key={course.title}>{course.title}</div>
          ))}
        </form>
      </div>
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
    createCourse: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage); // connect returns function which then calls the component
