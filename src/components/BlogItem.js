import React from 'react'
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
   let date = new Date("2023-12-21T14:53:13.813Z");
    date = date.toGMTString();
  return (
        <>
        <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}...</h5>
        <p className="card-text">{props.description}...</p>
        <Link className="btn btn-primary" to="/readblog" >Read Now</Link>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Published at "{date} by "</small>
      </div>
    </div>
    </>
  )
}

export default BlogItem