import React,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import AddBlog from './AddBlog';
import '../App.css';

export const Navbar = () => {

  let location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
    }, [location]);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid d-flex">
      <Link className="navbar-brand fw-bolder fs-3" style={{"fontFamily":"cursive"}} to="/">BlogSpirit</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/" ? "text-decoration-underline active" : ""}`} aria-current="page" to="/">Home</Link>
          </li>
      <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Blogs
          </div>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Upload new Blog</button></li>
            <li><Link className="dropdown-item" to="/manageblogs">Manage Blogs</Link></li>
          </ul>
        </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/contactus" ? "text-decoration-underline active" : ""}`} to="/contactus">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className='px-3'>
      <button className='btn btn-outline-dark custom-tooltip'><i className="fa-solid fa-up-right-from-square"></i></button>
      
      </div>
    </div>
  </nav>
  <AddBlog />
  </>
  )
}
