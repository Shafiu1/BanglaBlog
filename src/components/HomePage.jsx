// src/components/HomePage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import featuredPostData from '../data/featuredPost';
import latestPostsData from '../data/latestPosts';
import categoriesData from '../data/categories';
import Profile from './Profile'

const HomePage = () => {
  const [featuredPost] = useState(featuredPostData);
  const [latestPosts] = useState(latestPostsData);
  const [categories] = useState(categoriesData);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Search Submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Redirect to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Blog
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600">
              Categories
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link to="./Profile" className="text-gray-700 hover:text-blue-600">
              Profile
            </Link>
          </nav>

          {/* Search and Auth Links */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="w-5 h-5 text-gray-500 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 14.65z"
                />
              </svg>
            </form>

            {/* Auth Links */}
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        {featuredPost && (
          <section className="mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {featuredPost.title}
                </h1>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <Link
                  to={`/posts/${featuredPost.id}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
                >
                  Read More
                </Link>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                  src={featuredPost.image_url}
                  alt={featuredPost.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </section>
        )}

        {/* Latest Posts */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Latest Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/posts/${post.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Categories
            </h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.slug}`}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Blog</h3>
            <p className="text-gray-400">
              Contact: info@blog.com
            </p>
            <p className="text-gray-400">
              Phone: +880-1234-5678
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourprofile"
                className="hover:text-white"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Facebook Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.073C22 6.488 17.523 2 12 2S2 6.488 2 12.073c0 4.99 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.201 22 17.064 22 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/yourprofile"
                className="hover:text-white"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Twitter Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.737 0-4.948 2.21-4.948 4.948 0 .388.044.765.128 1.124C7.728 8.842 4.1 6.88 1.671 3.947a4.822 4.822 0 00-.666 2.482c0 1.713.87 3.23 2.19 4.118a4.904 4.904 0 01-2.24-.616v.062c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 01-2.232.084c.63 1.956 2.445 3.377 4.6 3.417A9.868 9.868 0 010 19.54a13.945 13.945 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/yourprofile"
                className="hover:text-white"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.675 1.095 4.923 4.923 0 011.095 1.675c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.095 1.675 4.923 4.923 0 01-1.675 1.095c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.675-1.095 4.923 4.923 0 01-1.095-1.675c-.163-.46-.349-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.095-1.675 4.923 4.923 0 011.675-1.095c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.014 7.052.072 5.771.13 4.81.304 4.016.605a6.945 6.945 0 00-2.493 1.63A6.945 6.945 0 00.605 4.016C0.304 4.81.13 5.771.072 7.052.014 8.332 0 8.736 0 12c0 3.264.014 3.668.072 4.948.058 1.281.232 2.242.533 2.936a6.945 6.945 0 001.63 2.493 6.945 6.945 0 002.493 1.63c.694.301 1.655.475 2.936.533C8.332 23.986 8.736 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.242-.232 2.936-.533a6.945 6.945 0 002.493-1.63 6.945 6.945 0 001.63-2.493c.301-.694.475-1.655.533-2.936.058-1.28.072-1.684.072-4.948s-.014-3.668-.072-4.948c-.058-1.281-.232-2.242-.533-2.936a6.945 6.945 0 00-1.63-2.493A6.945 6.945 0 0019.984.605c-.694-.301-1.655-.475-2.936-.533C15.668.014 15.264 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="bg-gray-900 text-gray-500 text-center py-4">
          &copy; {new Date().getFullYear()} Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
