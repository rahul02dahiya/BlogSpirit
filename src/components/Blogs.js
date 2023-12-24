import React, {useState} from 'react'
import BlogItem from './BlogItem'

const Blogs = () => {

    const [blogs, setBlogs] = useState([
        
  {
    "_id": "658451591d6042b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d6042b3a60e7e651",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d6042b3a60e7e652",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d60432b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "6584515914d6042b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "6584515961d6042b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d67042b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d68042b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d60942b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d60042b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d657042b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  },
  {
    "_id": "658451591d60742b3a60e7e65",
    "user": "6557b0032d5a2eb63c681f68",
    "title": "Hello",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste fuga voluptatem ab doloremque excepturi nostrum fugiat! Saepe quas recusandae dolorum neque quidem nesciunt possimus! Quam, repellendus! Sit, modi odio.",
    "tag": "General",
    "date": "2023-12-21T14:53:13.813Z",
    "__v": 0
  }

    ])

  return (
   

       <div className="row">
          {
            blogs.map((element) => {
              console.log(element)
              return (
                <div className="col-md-4" key={element._id}>
                  <BlogItem title={element.title} description={element.description} />
                </div>
              )
            })
          }
        </div>
        
  )
}

export default Blogs