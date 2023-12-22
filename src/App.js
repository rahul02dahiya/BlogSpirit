import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import ManageBlogs from './components/ManageBlogs';
import ReadBlog from './components/ReadBlog';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contactus" element={<ContactUs/>} />
      <Route exact path="/manageblogs" element={<ManageBlogs/>} />
      <Route exact path="/readblog" element={<ReadBlog/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App