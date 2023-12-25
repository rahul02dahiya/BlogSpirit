import React from 'react'
import Blogs from './Blogs'

const Home = () => {
  return (
    <div>
       <div>
        <div className="container mt-2" >
        <h3 className='text-center my-3'>The Sprit of Blogs is here</h3>
        <Blogs type="allBlogs" />
    </div>
    </div>
    </div>
  )
}

export default Home