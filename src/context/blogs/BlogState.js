import React from "react";
import BlogContext from "./blogContext";
import { useState } from 'react'


const BlogState = (props) => {

  const host = "http://127.0.0.1:5000";

  const initialBlogs = [{
    "_id": "658862d64a2a71b53fb7aef1",
    "user": "6587d1c095bb75216d628b81",
    "title": "Hello",
    "description": "New note is here",
    "tag": "General",
    "date": "2023-12-24T16:56:54.438Z",
    "__v": 0
  },
  {
    "_id": "658862d74a2a81b53fb7af11",
    "user": "6587d1c095bb75216d628b81",
    "title": "Hello",
    "description": "New note is here",
    "tag": "General",
    "date": "2023-12-24T16:56:55.330Z",
    "__v": 0
  },
  {
    "_id": "658862d74a2a781b3fb7af31",
    "user": "6587d1c095bb75216d628b81",
    "title": "Hello",
    "description": "New note is here",
    "tag": "General",
    "date": "2023-12-24T16:56:55.907Z",
    "__v": 0
  }]
  const [blogs, setBlogs] = useState(initialBlogs)

// Fetching all blogs from database
  const getAllBlogs = async () => {
    try {
      const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('blogtoken')
        }
      })
      const dBlogs = await response.json();
      console.log(dBlogs);
      setBlogs(dBlogs);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);

    }
  }

// Fetching my blogs from database
  const getMyBlogs = async () => {
    try {
      const response = await fetch(`${host}/api/blogs/fetchmyblogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('blogtoken')
        }
      })
      const dBlogs = await response.json();
      console.log(dBlogs);
      setBlogs(dBlogs);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);

    }
  }


  // Add blog
  const addBlog = async (title, description, tag) => {
    // todo api call
    const response = await fetch(`${host}/api/blogs/addblogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('blogtoken')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // frontend
    const blog = await response.json();
    setBlogs(blogs.concat(blog));
  }

  // Delete blog
  const deleteBlog = async (id) => {
    // Api calls 
    const response = await fetch(`${host}/api/blogs/deleteblogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('blogtoken')
      }
    });
    // const json = response.json();
    // console.log(json);

    console.log(`blog deleted ${id}`);
    const newBlogs = blogs.filter((blog) => { return blog._id !== id })
    setBlogs(newBlogs);
  }
  // Edit blog
  let newBlogs = JSON.parse(JSON.stringify(blogs));
  const editBlog = async (id, title, description, tag) => {
    for (let i = 0; i < blogs.length; i++) {
      if (newBlogs[i]._id === id) {
        newBlogs[i].title = title;
        newBlogs[i].description = description;
        newBlogs[i].tag = tag;
        // console.log(newBlogs[i]);
        break;
      }
    }
    setBlogs(newBlogs);

    // API calls

    await fetch(`${host}/api/blogs/updateblogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('blogtoken')
      },
      body: JSON.stringify({ id, title, description, tag }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    })
  }

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog, editBlog, getAllBlogs, getMyBlogs }}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogState;
