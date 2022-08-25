import React from 'react'
import BlogCard from './BlogCard'
import blogdata from './blogdata'
import {useRef} from "react"

function BlogSection() {

  const blogCardContent = blogdata.map(blog => { return <BlogCard image={blog.image} title={blog.title} text={blog.text} link={blog.link}/>}
  )
  const blogSection = useRef(null)

  return (
    <div ref={blogSection}>
        {blogCardContent}
    </div>
  )
}

export default BlogSection