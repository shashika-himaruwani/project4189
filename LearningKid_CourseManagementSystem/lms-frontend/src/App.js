import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel';
import CourseList from './components/CourseList'
import CourseContent from './components/User/CourseContent';
import LessonForm from './components/LessonForm';
import Features from './components/CourseList';
import CourseDetails from './components/User/CourseDetails';

const App = () => {
  const isAdmin = true; // Replace with your actual logic for checking admin status

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAdmin ? <Navigate to="/admin" /> : <Navigate to="/user" />}
        />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<UserPanel />} />

        <Route path="/create" element={<AdminPanel />} />
        <Route path="/course" element={<UserPanel />} />
        <Route path="/courses" element={<CourseList />} />
        
        <Route path="/coursecontent/:courseId" element={<CourseContent />} />
        <Route path="/add-lesson/:courseId" element={<LessonForm />} />

        <Route path="/" element={<Features/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />



      </Routes>
    </Router>
  );
};

export default App;
