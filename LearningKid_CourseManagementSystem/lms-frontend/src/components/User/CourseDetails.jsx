import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();

  // Mock data (You can fetch this dynamically from an API in real use case)
  const courseData = {
    1: {
      title: "Basic Mathematics for Beginners",
      description: "Start your journey with foundational mathematics concepts.",
      students: 55,
      lessons: 15,
      duration: "1.5 Hours",
      content: "Learn the basics of algebra, geometry, and other fundamental topics.",
      youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      questions: [
        {
          question: "What is 2 + 2?",
          options: ["1", "2", "3", "4"],
          answer: "4"
        },
        {
          question: "What is the square root of 16?",
          options: ["2", "4", "8", "16"],
          answer: "4"
        },
        {
          question: "Which shape has 4 equal sides?",
          options: ["Circle", "Square", "Triangle", "Rectangle"],
          answer: "Square"
        }
      ],
      notes: "Basic Mathematics is the cornerstone of many advanced mathematical subjects. It is important to develop a solid understanding of concepts like algebra, geometry, and arithmetic early on. Mastering the fundamentals will make it easier to move on to more complex topics such as calculus or trigonometry. To ensure long-term success, practice regularly by solving problems from different chapters. Use online resources, tutorials, and apps to visualize mathematical concepts. If you ever feel stuck, don’t hesitate to ask for help or review the material again. Remember, mathematics is about understanding patterns and logical reasoning, and with consistent practice, you’ll develop a strong foundation for future learning."
    },
    2: {
      title: "Science Essentials for Beginners",
      description: "Explore the basics of scientific principles and experiments.",
      students: 45,
      lessons: 10,
      duration: "1 Hour",
      content: "Understand the foundations of physics, chemistry, and biology.",
      youtubeLink: "https://www.youtube.com/embed/5nJg8FJxRtM",
      questions: [
        {
          question: "What is the chemical symbol for water?",
          options: ["O2", "CO2", "H2O", "H2"],
          answer: "H2O"
        },
        {
          question: "What is the force that attracts objects toward the Earth?",
          options: ["Magnetism", "Gravity", "Friction", "Inertia"],
          answer: "Gravity"
        },
        {
          question: "Which element is most abundant in Earth's atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
          answer: "Nitrogen"
        }
      ],
      notes: "Science is not just about memorizing facts; it's about understanding how the world works. A strong foundation in science provides critical thinking skills and opens doors to understanding complex systems, from biology and chemistry to physics and environmental science. Make sure to pay close attention to key scientific principles, such as the scientific method, and try to apply them in real-life situations. Conducting simple experiments, even at home, can significantly enhance your learning experience. Also, regularly reading science articles or watching educational science videos will help you stay engaged and excited about the subject. Always ask questions, as curiosity is a driving force in scientific discovery."
    },
    3: {
      title: "Introduction to Geography",
      description: "Understand the fundamentals of geography and Earth's features.",
      students: 40,
      lessons: 20,
      duration: "1.5 Hours",
      content: "Learn about continents, countries, maps, and geographical concepts.",
      youtubeLink: "https://www.youtube.com/embed/wa-2-4FDzRg",
      questions: [
        {
          question: "Which is the largest continent?",
          options: ["Asia", "Africa", "North America", "Europe"],
          answer: "Asia"
        },
        {
          question: "What is the capital city of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris"
        },
        {
          question: "Which ocean is the largest?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          answer: "Pacific Ocean"
        }
      ],
      notes: "Geography is more than just memorizing maps—it's about understanding the complex relationships between the environment, people, and the places where they live. As you explore physical geography, such as mountains, rivers, and climate patterns, you'll develop a greater appreciation for how our planet functions. Additionally, human geography examines how people interact with and adapt to the world around them, including issues like urbanization, migration, and environmental impact. Regularly reviewing world maps, learning about current global issues, and following news related to geographical events (like natural disasters or geopolitical conflicts) will help you apply geographical concepts to the real world."
    },
    4: {
      title: "Art and Creativity Basics",
      description: "Discover the essentials of art, colors, and creative expression.",
      students: 30,
      lessons: 12,
      duration: "2 Hours",
      content: "Explore drawing, painting, and the principles of artistic expression.",
      youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ",
      questions: [
        {
          question: "Which color is created by mixing red and yellow?",
          options: ["Orange", "Purple", "Green", "Blue"],
          answer: "Orange"
        },
        {
          question: "What is the primary color in the RGB color model?",
          options: ["Red", "Green", "Blue", "Yellow"],
          answer: "Red"
        },
        {
          question: "Who painted the Mona Lisa?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
          answer: "Leonardo da Vinci"
        }
      ],
      notes: "Art is a form of personal expression, and it's important to allow yourself to explore freely. As you start, don’t be afraid to make mistakes—these are often where the most valuable lessons are learned. The more you practice, the more you will develop your unique artistic voice. Understanding the fundamentals of design, such as balance, symmetry, and color theory, will give you the tools to improve your work. Additionally, immerse yourself in different styles of art by studying the works of famous artists, both historical and contemporary. Attending art workshops or collaborating with other artists will help you refine your skills. Art can be deeply personal, and it's crucial to enjoy the process as much as the final result."
    },
    5: {
      title: "English Language Skills for Beginners",
      description: "Develop basic skills in reading, writing, and speaking English.",
      students: 60,
      lessons: 25,
      duration: "3 Hours",
      content: "Learn grammar, vocabulary, pronunciation, and conversational English.",
      youtubeLink: "https://www.youtube.com/embed/C0DPdy98e4c",
      questions: [
        {
          question: "Which of these is a verb?",
          options: ["Run", "Blue", "Happy", "Quickly"],
          answer: "Run"
        },
        {
          question: "What is the plural form of 'child'?",
          options: ["Childs", "Children", "Childes", "Childern"],
          answer: "Children"
        },
        {
          question: "Which is the correct form of the sentence?",
          options: ["She can sings.", "She can sing.", "She can sung.", "She can singing."],
          answer: "She can sing."
        }
      ],
      notes: "Becoming fluent in English takes time, but with dedication, you’ll see constant improvement. It’s essential to not only study grammar and vocabulary but also to practice your listening and speaking skills. Engage in daily reading, whether it’s news articles, books, or blogs, to build your vocabulary and sentence structure. Similarly, try speaking with others—whether in person or online—to improve your fluency and pronunciation. Watching English movies and TV shows, as well as listening to podcasts, can also help you improve your comprehension skills. Practice makes perfect, so don’t be afraid to make mistakes. They are part of the learning process and will help you improve faster."
    },
    6: {
      title: "Introduction to Information Technology",
      description: "Learn the basics of computers, software, and digital literacy.",
      students: 50,
      lessons: 18,
      duration: "1.5 Hours",
      content: "Understand computer hardware, software applications, and internet basics.",
      youtubeLink: "https://www.youtube.com/embed/s5r18kdp_U4",
      questions: [
        {
          question: "What does CPU stand for?",
          options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
          answer: "Central Processing Unit"
        },
        {
          question: "What is the main function of RAM?",
          options: ["Storing data permanently", "Running software applications", "Processing data", "Storing temporary data"],
          answer: "Storing temporary data"
        },
        {
          question: "Which of these is an operating system?",
          options: ["Microsoft Word", "Windows", "Photoshop", "Excel"],
          answer: "Windows"
        }
      ],
      notes: "Technology is ever-evolving, and staying current is crucial in the field of Information Technology. Begin by mastering the basics of computer hardware and software, as they form the backbone of any IT-related work. Get hands-on experience by using various operating systems and familiarizing yourself with common software applications. The internet is a vast resource—learn how to navigate it efficiently, keeping security and privacy in mind. As technology changes, it’s important to stay curious and open to learning. Take the time to explore new tools and programs, and be proactive in understanding how technology can improve your personal and professional life."
    },
    7: {
      title: "Advanced Mathematics Concepts",
      description: "Dive into advanced mathematics for a deeper understanding.",
      students: 35,
      lessons: 20,
      duration: "2 Hours",
      content: "Study calculus, linear algebra, and other advanced mathematical topics.",
      youtubeLink: "https://www.youtube.com/embed/Yr2ZjNdP8r4",
      questions: [
        {
          question: "What is the derivative of x^2?",
          options: ["2x", "x^2", "2", "x"],
          answer: "2x"
        },
        {
          question: "Which formula is used to calculate the area of a triangle?",
          options: ["A = bh", "A = lw", "A = 2πr", "A = ½bh"],
          answer: "A = ½bh"
        },
        {
          question: "What is the value of π (Pi)?",
          options: ["3.14", "2.14", "3.1415", "1.618"],
          answer: "3.1415"
        }
      ],
      notes: "Advanced mathematics requires a deep understanding of core concepts, as it builds on foundational principles. Focus on mastering complex techniques such as differentiation, integration, and matrix manipulation. It's important to approach advanced problems methodically, breaking them down into smaller parts. Make sure to regularly review your notes, and don't hesitate to seek help when needed. In advanced mathematics, collaboration with peers or online communities can offer new perspectives and solutions. Remember, success in this field relies heavily on practice, persistence, and an open mind. Enjoy the challenge of tackling complex problems and applying mathematics to real-world scenarios."
    }
  };
  
  
  const course = courseData[id];

  // State to store selected answers for MCQs
  const [selectedAnswers, setSelectedAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const handleAnswerChange = (question, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [question]: answer
    }));
  };

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>👥 {course.students} Students</p>
      <p>📚 {course.lessons} Lessons</p>
      <p>⏱️ {course.duration}</p>
      
      <div className="video-container">
        <h2>Course Video</h2>
        <iframe
          width="560"
          height="315"
          src={course.youtubeLink}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div>
        <h2>Course Content</h2>
        <p>{course.content}</p>
      </div>

      <div className="mcq-questions">
        <h2>MCQ Questions</h2>
        {course.questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.question}</p>
            {question.options.map((option, idx) => (
              <label key={idx} className="option">
                <input
                  type="checkbox"
                  checked={selectedAnswers[`question${index + 1}`] === option}
                  onChange={() => handleAnswerChange(`question${index + 1}`, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
      </div>

      <div className="notes-section">
        <h2>Course Notes</h2>
        <p>{course.notes}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
