import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogItem = (props) => {
   let date = new Date(props.date);
    date = date.toGMTString();

    const navigate = useNavigate()

    const capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleReadNow = ()=>{
    navigate("/readblog",{state:{title:capitalizeFirstLetter(props.title), description:props.description}})
  }

  return (
        <>
        <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{capitalizeFirstLetter(props.title)}...</h5>
        <p className="card-text">{props.description}...</p>
        <button className="btn btn-primary" onClick={handleReadNow} >Read Now</button>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Published at "{date} "</small>
      </div>
    </div>
    </>
  )
}

export default BlogItem