import React, { useState,useEffect, useContext, useRef } from 'react'
import blogContext from '../context/blogs/blogContext'
import BlogItem from './BlogItem'
import { useNavigate } from 'react-router-dom'


const ManageBlogs = () => {

  const [blog, setBlog] = useState({ id: "", etitle: "", edescription: "", etag: "" })
  const { blogs = [], editBlog , getMyBlogs} = useContext(blogContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('blogtoken')){
      getMyBlogs();
    }
    else{
        navigate("/login");
    }
    // eslint-disable-next-line
}, []);


  const updateBlog = (currentBlog) => {
    ref.current.click();
    setBlog({ id:currentBlog._id, etitle: currentBlog.title, edescription: currentBlog.description, etag: currentBlog.tag });
  }
  
  const handleEditBlog = (e) => {
    e.preventDefault();
    console.log("Blog updated");
    editBlog(blog.id, blog.etitle, blog.edescription, blog.etag);
  }
  
  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }
  
  const ref = useRef(null);

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
    <button type="button" ref={ref} className="btn btn-primary" style={{"display":"none"}} data-bs-toggle="modal" data-bs-target="#blogModal">
        Launch demo modal
    </button>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="blogModal" tabIndex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="blogModalLabel">Update your Blog</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
            <div className="form-group">
                <label htmlFor="etitle">Add your Title</label>
                <input type="text" className="form-control" id="etitle" value={blog.etitle} name="etitle" aria-describedby="emailHelp" placeholder="Title" onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="edescription">Descrption</label>
                <input type="text" className="form-control" id="edescription" value={blog.edescription} name='edescription' placeholder="description" onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="etag">Tag</label>
                <input type="text" className="form-control" id="etag" value={blog.etag} name='etag' placeholder="tag" onChange={onChange} />
            </div>
        </form>
                </div>
                <div className="modal-footer">
                <button type="submit" disabled={blog.etitle.length<2 || blog.edescription.length<5} className="btn btn-primary my-2" onClick={handleEditBlog} data-bs-dismiss="modal">Update</button>

                </div>
            </div>
        </div>
    </div>
       <div>
        <div className="container mt-2" >
        <h3 className='text-center my-3'>You can work here : )</h3>
        <div className="row">
      {
        blogs.map((element) => {
          // console.log(element)
          return (
            <div className="col-md-4" key={element._id}>
              <BlogItem blog={element} type="myBlogs" updateBlog={updateBlog} />
            </div>
          )
        })
      }
    </div>
    </div>
    </div>
    </div>
  )
}

export default ManageBlogs