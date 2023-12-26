import React,{useState, useContext} from 'react'
import blogContext from "../context/blogs/blogContext"

const AddBlog = () => {

    const context = useContext(blogContext);
    const { addBlog } = context;

    const [blog, setBlog] = useState({ title: "", description: "", tag: "" })
    const handleAddBlog = (e) => {
        e.preventDefault();
        addBlog(blog.title, blog.description, blog.tag);
        let addBlogForm = document.getElementById("addBlogForm");
        addBlogForm.reset();
    }

    const onChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Upload new Blog</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form id='addBlogForm' >
        <div className="form-group">
            <label htmlFor="title">Add your Title</label>
            <input type="text" className="form-control mb-1" id="title" name="title" aria-describedby="emailHelp" placeholder="Title" onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="description">Write, what you think!</label>
            <textarea className="form-control mb-1" id="description" name='description' placeholder="Type in what you think!" rows="10" onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="tag">Categorise your Blog </label>
            <input type="text" className="form-control mb-1" id="tag" name='tag' placeholder="tag" onChange={onChange} />
        </div>
    </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary my-2" data-bs-dismiss="modal" onClick={handleAddBlog}>Upload now</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddBlog