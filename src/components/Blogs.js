import React, { useState, useContext, useEffect, useRef } from 'react'
import BlogItem from './BlogItem'
import blogContext from '../context/blogs/blogContext'
import { useNavigate } from 'react-router-dom'

const Blogs = (props) => {

  const navigate = useNavigate();
  const bContext = useContext(blogContext);
  
  
  const{blogs = [], getAllBlogs} = bContext;

  useEffect(() => {
    if(localStorage.getItem('blogtoken')){
      getAllBlogs();
    }
    else{
        navigate("/login");
    }
    // eslint-disable-next-line
}, []);



  return (

    <div className="row">
      {
        blogs.map((element) => {
          console.log(element)
          return (
            <div className="col-md-4" key={element._id}>
              <BlogItem blog={element} type={props.type} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Blogs