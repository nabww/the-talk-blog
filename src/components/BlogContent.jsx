import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import blogdata from './blogdata'
import BlogDisplay from './BlogDisplay'

function BlogContent(props) {

  const blogContent = blogdata.map(blog => { return <BlogDisplay title={blog.title} content={blog.content} image={blog.image}/>})

// function content() {
//   return (  
//   <div className='container'>
//         <h2>{props.title}</h2>
//         {props.image}
//         <p>{props.content}</p>
//       </div>
//       );
// }

// export default content;


  return (
    <div >
      <Navbar/>
      {/* {blogContent} */}
      <Footer/>
    </div>
  )
}

export default BlogContent
