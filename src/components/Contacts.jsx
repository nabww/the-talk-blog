import React from 'react'
import {useState}from "react"
import { privateAxios } from '../api/axios'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Contacts() {
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")
 const [text, setText] = useState("")


// //Adding a new user to the mailing list
//   const addToMail = (e) => {
//       e.preventDefault()
//     privateAxios
//       .post(`/register`, {
//         email: email,
//         phone: phone,
//         message: text
//       }
//       )
//       .then((response) => {
//         toast.success("Email Saved Successfully")
//         console.log(response.data);
//       });
//   };



  const addToMail = (e) =>{
        e.preventDefault();
        privateAxios.post(`/register`, {
            email: email,
        phone: phone,
        message: text
        }).then((response)=>{
      // document.getElementById("user-form").reset();
      console.log(response.data)
      // console.log("user added to list")
      toast.success("Congrats, You have succesfully joined our Mailing List!")

    }).catch((error)=>{
      console.log(error)
      // alert("Error: " + error.message);
      toast.warning(error.message)
      toast.configure()
    });
    };



  return (
    <div class="container mb-7" style={{"margin-top":"20px"}}>
        <form class="shadow-sm p-3 mb-5 bg-body rounded" id="user-form">
            <h3 class="text-center mb-5 mt-5">Join Our Mailing List!</h3>

            <div  class="form-group row mt-2">
            <label class="col-sm-3 col-form-label" for="email">Email Address</label>
            <div class="col-md-9">
            <input 
            class="form-control" 
            value={email}
            type="text"
            onChange= {(e) => setEmail(e.target.value)}
            ></input>
            </div>
            </div>
            
            <div class="form-group row mt-2">
            <label class="col-sm-3 col-form-label" for="contact">Phone</label>
            <div class="col-md-9">
            <input 
            class="form-control" 
            type="text"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            ></input>
            </div>
            </div>
            <div class="form-group row">
            <label class="col-sm-3 col-form-label">Message</label>
            <div class="col-md-9">
            <textarea 
            class="form-control"
             type="text" 
             rows="3"
             value={text}
             onChange={(e)=>setText(e.target.value)}
             ></textarea>
            </div>
            </div>
            <div class="row">
                    <div class="col-sm-9 offset-sm-3">
                        <button type="submit" class="btn btn-primary" onClick={addToMail}>Register</button>
                    </div>
                </div>
        <ToastContainer />

        </form>
        
    </div>
  )
}

export default Contacts