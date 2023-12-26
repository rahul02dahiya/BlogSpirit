import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import "../stylesheets/App.css"
import blogContext from '../context/blogs/blogContext';


const BlogItem = (props) => {
   let date = new Date(props.blog.date);
    date = date.toGMTString();

    const navigate = useNavigate()

    const capitalizeFirstLetter = (string)=> {

      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleReadNow = ()=>{
    navigate("/readblog",{state:{title:capitalizeFirstLetter(props.blog.title), description:props.blog.description}})
  }

  const context = useContext(blogContext);
  const {deleteBlog} = context;

  return (
        <>
        <div className="card my-2">
          { props.type==="myBlogs" && <div className="card-header d-flex align-items-center">
                    <div className='me-auto'>{props.blog.tag}</div>
                    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteBlog(props.blog._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{props.updateBlog(props.blog)}}></i>
                </div>}
      <div className="card-body">
        <h5 className="card-title">{capitalizeFirstLetter(props.blog.title)}</h5>
        <p className="card-text">{capitalizeFirstLetter(props.blog.description)}...</p>
        <button className="btn btn-primary sticky-bottom" onClick={handleReadNow} >Read Now</button>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Published at "{date} "</small>
      </div>
    </div>
    </>
  )
}

export default BlogItem