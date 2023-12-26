import React, { useState, useContext, useRef } from 'react'
import Blogs from './Blogs'
import blogContext from '../context/blogs/blogContext'

const ManageBlogs = () => {

  const [blog, setBlog] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const {editBlog} = useContext(blogContext)

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
    <button type="button" ref={ref} className="btn btn-primary" style={{"display":"none"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Update your Blog</h5>
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
        <Blogs type="myBlogs" updateBlog={updateBlog} />
    </div>
    </div>
    </div>
  )
}

export default ManageBlogs