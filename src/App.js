import React from 'react'
import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import ManageBlogs from './components/ManageBlogs';
import ReadBlog from './components/ReadBlog';
import BlogState from './context/blogs/BlogState';
import Login from './components/Login';
import Signup from './components/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>

      <BlogState>

        <Router>
          <Navbar />
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/manageblogs" element={<ManageBlogs />} />
            <Route exact path="/readblog" element={<ReadBlog />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />

          </Routes>
        </Router>

      </BlogState>

    </div>
  )
}

export default App