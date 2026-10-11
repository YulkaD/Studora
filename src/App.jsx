import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import TasksPage from './pages/TasksPage/TasksPage';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
      </Routes>
    </Router>
  );
}