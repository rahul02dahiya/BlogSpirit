import React from 'react'
import { useLocation } from 'react-router-dom';

const ReadBlog = () => {
  const location = useLocation();
  let blog = location.state
 
  return (
    <div className='container'>

        <h2 className='m-3'>{blog.title}</h2>
        <hr className='mb-5' />
        <p className="m-3">{blog.description}</p>        
    </div>
  )
}

export default ReadBlog
