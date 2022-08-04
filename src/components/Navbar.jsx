/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./styling.css"
import logo from "../resources/image-logo-white.png"

function Navbar() {
  return (
   <div>
        <nav class="navbar navbar-dark text-white bg-dark navbar-expand-lg" style={{"margin-bottom":"0"}} >
            <img src={logo} alt="" className="logo"/>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="navbar-item li">
                        <a href="#" class="nav-link">Homepage</a>
                    </li>
                    <li class="navbar-item li">
                        <a href="#" class="nav-link">Blog</a>
                    </li>
                    <li class="navbar-item li">
                        <a href="#" class="nav-link">About Us</a>
                    </li>
                    <li class="navbar-item li">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                    <li class="navbar-item li">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Blogs by Author</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item a">Author 1</a>
                            <a href="#" class="dropdown-item a">Author 2</a>
                            <a href="#" class="dropdown-item a">Author 3</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar