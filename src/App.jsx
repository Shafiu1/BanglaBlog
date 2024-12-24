// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';

// Placeholder components for additional routes
const AboutPage = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl">About Page</h2>
    <p>Welcome to the About Page!</p>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl">Contact Page</h2>
    <p>Get in touch with us!</p>
  </div>
);

const CategoryPage = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl">Category Page</h2>
    {/* TODO: Fetch and display posts based on category slug */}
  </div>
);

const PostDetailPage = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl">Post Detail Page</h2>
    {/* TODO: Fetch and display post details based on post ID */}
  </div>
);

const NotFoundPage = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl">404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/categories/:slug" element={<CategoryPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
