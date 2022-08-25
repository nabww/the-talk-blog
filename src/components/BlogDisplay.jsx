import React from 'react'

function BlogDisplay(props) {
  return (
    <div className='container'>
        <h2>{props.title}</h2>
        <img src={props.image} alt=""/>
        <p>{props.content}</p>
    </div>
  )
}

export default BlogDisplay