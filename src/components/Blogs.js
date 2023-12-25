import React, { useState, useContext, useEffect } from 'react'
import BlogItem from './BlogItem'
import blogContext from '../context/blogs/blogContext'
import { useNavigate } from 'react-router-dom'

const Blogs = (props) => {

  const navigate = useNavigate();
  const bContext = useContext(blogContext);
  
  const{blogs = [], getAllBlogs, getMyBlogs} = bContext;

  useEffect(() => {
    if(localStorage.getItem('blogtoken')){
      if(props.type==="myBlogs"){getMyBlogs();}
      if(props.type==="allBlogs"){getAllBlogs();}
      
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
              <BlogItem title={element.title} description={element.description} date={element.date} />
            </div>
          )
        })
      }
    </div>

  )
}

export default Blogs