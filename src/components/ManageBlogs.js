import React from 'react'
import Blogs from './Blogs'

const ManageBlogs = () => {
  return (
    <div>
       <div>
        <div className="container mt-2" >
        <h3 className='text-center my-3'>You can work here : )</h3>
        <Blogs type="myBlogs" />
    </div>
    </div>
    </div>
  )
}

export default ManageBlogs