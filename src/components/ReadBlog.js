import React from 'react'

const ReadBlog = (props) => {
  return (
    <div className='container'>

        <h2>{props.title}</h2>

        <p>{props.description}</p>
        
    </div>
  )
}

export default ReadBlog