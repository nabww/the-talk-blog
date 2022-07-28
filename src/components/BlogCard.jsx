/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image from "../resources/pexels-люда-кавун-12616283.jpg"

function BlogCard() {
  return (
    <div class=" container" style={{"margin-top": "30px"}}>
        <div class="card h-200">
            <img class="card-img-top" alt=" " src={image}/>
            <div class="card-body">
             <h5 class="card-title mb-0">Blog Title 1</h5>
             <p class=" card-text"> lorem ipsum dolor lorem ipsum dolor 
                                    lorem ipsum dolor lorem ipsum dolor 
                                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
                                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
            </p> 
            <a href='#' class="btn btn-primary">Read More</a>
            </div>
        </div>
        
    
        {/* List group items, notifications
        
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                Blog 1
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                Blog 2
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                Blog 3
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                New Blogs 
                <span class="badge badge-primary badge-pill">10</span>
            </a>
        </div> */}
    </div>
  )
}

export default BlogCard