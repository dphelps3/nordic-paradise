import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import BlogListPage from './pages/BlogListPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <img src={logo} height={150} width={150} />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

