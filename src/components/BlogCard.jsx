/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function BlogCard(props) {
  return (
    <div class=" container mb-5" >
        <div class="card h-200">
            <img class="card-img-top" alt=" " src={props.image}/>
            <div class="card-body">
             <h5 class="card-title mb-0">{props.title}</h5>
             <p class=" card-text"> {props.text}
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