/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react'
import "./styling.css"
import logo from "../resources/image-logo-white.png"
import {useNavigate} from "react-router-dom"
import Home from '../Pages/Home'
import {useRef} from "react"

function Navbar() {
    const navigate = useNavigate()

    // const BlogSection = useRef(null)
    // const ContactSection = useRef(null)
    // const AboutSection = useRef(null)
    const goHome = () => {
        navigate("/")
        console.log("Icon Clicked")
    }
    
    const goAddBlog = () => {
        navigate("/addnew")
    }

  return (
   <div >
        <nav className="navbar navbar-dark text-white bg-dark navbar-expand-lg mb-0" >
            <img src={logo} alt="" className="logo" onClick={goHome}/>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-link navbar-item a">
                       Browse Our Stories
                    </li> */}
                    {/* <li class="navbar-item li">
                        <a href="#" class="nav-link">Blog</a>
                    </li> */}
                    <li class="navbar-item li nav-link">
                        Who are We?
                    </li>
                    <li className="navbar-item li nav-link">
                        Talk to us
                    </li>
                    <li className="navbar-item li nav-link" onClick={goAddBlog}>
                        Add New Blog
                    </li>
                    <li className="navbar-item li">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blogs by Author</a>
                        <div class="dropdown-menu">
                            <a href="#" className="dropdown-item a">Author 1</a>
                            <a href="#" className="dropdown-item a">Author 2</a>
                            <a href="#" className="dropdown-item a">Author 3</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar