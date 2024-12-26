import React, { useEffect, useState } from "react";
import "./User/Features.css";
import mainthumbnew from "../assets/images/newcourse.jpg"; // Update image paths as needed
import axios from "axios";
import { Link } from "react-router-dom";

const Features = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/courses")
      .then((response) => {
        console.log("Courses data:", response.data); // Debug
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses", error);
      });
  }, []);

  return (
    <div className="features-container" data-section="section5" id='section5'>
      <h2 className="heading-with-lines">New Courses</h2>
      <div className="courses-list">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={ mainthumbnew} // Fallback to a default image
                alt={course.title}
                className="course-image"
              />
              <div className="course-price">{`$${course.price}`}</div>
              <div className="course-rating">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span className="reviews-text">{course.review}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p>
                <span role="img" aria-label="students">
                  👥
                </span>{" "}
                {course.student} Students
              </p>
              <p>
                <span role="img" aria-label="lessons">
                  📚
                </span>{" "}
                {course.lesson} Lessons
              </p>
              <p>
                <span role="img" aria-label="duration">
                  ⏱️
                </span>{" "}
                {course.duration}
              </p>
              <Link to={`/coursecontent/${course.id}`}>
                <button className="learn-button">Learn</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default Features;
