import React from 'react'
import BlogCard from './BlogCard'
import blogdata from './blogdata'

function BlogSection() {

  const blogCardContent = blogdata.map(blog => { return <BlogCard image={blog.image} title={blog.title} text={blog.text} />}
  )
  return (
    <div>
        {blogCardContent}
    </div>
  )
}

export default BlogSection