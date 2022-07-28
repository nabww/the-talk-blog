import React from 'react'
import BlogSection from '../components/BlogSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import ScrollToTop from "react-scroll-to-top";


function Home() {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        {/* this is the cookie alert */}
        {/* <div class="alert alert-success">
            <h4 class="alert-heading">Attention</h4>
            <button class="close" data-dismiss="alert">&times;</button>
           <p>Hello, This website uses cookies to liven up your experience! </p>
        </div> */}
        <HeroSection/>
        <BlogSection/>
        <Contacts/>
        <About/>  
        <Footer/>
    </div>
  )
}

export default Home