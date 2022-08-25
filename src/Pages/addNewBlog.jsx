/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { toast, ToastContainer} from 'react-toastify';
import Navbar from '../components/Navbar'
import {useNavigate, useParams} from "react-router-dom"


function addNewBlog() {

    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [content, setContent] = useState("")
    const {id} =useParams(); 
    const [file, setFile]=useState("");



    // eslint-disable-next-line react-hooks/rules-of-hooks
    
//function to handle attaching of blog image
    function handleChange(e){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    


//add a new blog
const addBlog = () =>{
    axios.post('/addnew', {
        title: title, content:content
    }).then((response) => {
        toast.success("Blog Added Successfully")
        navigate("/")
}).catch((error)=>{
    console.log(error)
    alert("Error" + error.message)
})
}


//save and upload image
const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        // formData.append("fileName", fileName);
        try {
          const res = await axios.post(
            "http://localhost:5000/addnew",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };



//update a blog
const updateBlog = async () =>{
   try{
    const response = await axios.put(`/addnew/${id}`, {
        title: title, content: content
    })
    console.log(response.data)
    toast.success("Blog Updated Successfully")
    navigate("/")
}catch(error){
    console.log(error)
}}

//handle click on add/update button click
  const handleSubmit =(e) =>{
    e.preventDefault();
      if(id){
        updateBlog();
    } else {
        addBlog();
    }
  }



  return (
    <div >
        <Navbar/>
        <div className='container'>
            <h2 align='center' className="mt-3 font-weight-bold">Add New Blog</h2>
            <form>
                <div className="form-group row mt-2">
                    <div className="col-md-6">
                    <h3>Blog Title</h3>
                    <input 
                    onChange ={(e) => setTitle(e.target.value)} 
                    type="text" 
                    className="form-control mb-5" 
                    placeholder="Enter Blog Title" 
                    value={title}/>
                    </div>
                    <div className='col-md-7'>
                    <h3 >Add Blog Image Here</h3>
                    <input 
                    type="file" 
                    onChange={handleChange} 
                    className="btn btn-outline-warning" 
                    value={image}/>
                    <img src={file} alt=""/>
                    </div>
                    <div className='col-md-12 mt-3'>
                    <h3>Blog Content</h3>
                    <textarea
                    onChange ={(e) => setContent(e.target.value)} 
                    type="textarea"
                    rows="18"
                    className="form-control"
                    value={content}
                    />
                    </div>
                    <div className='col-md-6 mt-2'>
                    <button 
                    className="btn btn-outline-success"
                    onClick={handleSubmit && uploadFile}
                    > {id 
                 ? <> Update Blog </>
                 : <> Add New Blog</>}</button>
                    </div>
                    </div>
            </form>
        <ToastContainer />

        </div>
    </div>
  )
}

export default addNewBlog