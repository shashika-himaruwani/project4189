import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';
import mainthumb1 from "../../assets/images/c1.jpg"; 
import mainthumb2 from "../../assets/images/c2.jpg"; 
import mainthumb3 from "../../assets/images/c3.jpg";
import mainthumb4 from "../../assets/images/c4.jpg";
import mainthumb5 from "../../assets/images/c5.jpg";
import mainthumb6 from "../../assets/images/c6.jpeg";
import mainthumb7 from "../../assets/images/c7.jpg";

const Features = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Basic Mathematics for Beginners",
      description: "Start your journey with foundational mathematics concepts.",
      students: 55,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb1,
      price: "FREE",
      reviews: "(51 Reviews)",
    },
    {
      id: 2,
      title: "Science Essentials for Beginners",
      description: "Explore the basics of scientific principles and experiments.",
      students: 45,
      lessons: 10,
      duration: "1 Hours",
      image: mainthumb2,
      price: "$50.00",
      reviews: "(48 Reviews)",
    },
    {
      id: 3,
      title: "Introduction to Geography",
      description: "Understand the fundamentals of geography and Earth's features.",
      students: 45,
      lessons: 25,
      duration: "1.5 Hours",
      image: mainthumb3,
      price: "FREE",
      reviews: "(41 Reviews)",
    },
    {
      id: 4,
      title: "Art and Creativity Basics",
      description: "Discover the essentials of art, colors, and creative expression.",
      students: 35,
      lessons: 20,
      duration: "2.5 Hours",
      image: mainthumb4,
      price: "FREE",
      reviews: "(31 Reviews)",
    },
    {
      id: 5,
      title: "English Language Skills for Beginners",
      description: "Develop basic skills in reading, writing, and speaking English.",
      students: 25,
      lessons: 15,
      duration: "3.5 Hours",
      image: mainthumb5,
      price: "$50.00",
      reviews: "(21 Reviews)",
    },
    {
      id: 6,
      title: "Introduction to Information Technology",
      description: "Learn the basics of computers, software, and digital literacy.",
      students: 55,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb6,
      price: "FREE",
      reviews: "(30 Reviews)",
    },
    {
      id: 7,
      title: "Advanced Mathematics Concepts",
      description: "Dive into advanced mathematics for deeper understanding.",
      students: 35,
      lessons: 15,
      duration: "1.5 Hours",
      image: mainthumb7,
      price: "$50.00",
      reviews: "(31 Reviews)",
    },
  ];

  const handleLearnClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="features-container">
      <h2 className="heading-with-lines">All Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-price">{course.price}</div>
            <div className="course-rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <span className="reviews-text">{course.reviews}</span>
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button
              className="learn-button"
              onClick={() => handleLearnClick(course.id)}
            >
              Learn
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
