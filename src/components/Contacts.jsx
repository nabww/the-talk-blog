import React from 'react'

function Contacts() {
  return (
    <div class="container mb-7" style={{"margin-top":"20px"}}>
        <form class="shadow-sm p-3 mb-5 bg-body rounded">
            <h3 class="text-center mb-5 mt-5">Join Our Mailing List!</h3>

            <div  class="form-group row mt-2">
            <label class="col-sm-3 col-form-label" for="email">Email Address</label>
            <div class="col-md-9">
            <input class="form-control" type="text"></input>
            </div>
            </div>
            
            <div class="form-group row mt-2">
            <label class="col-sm-3 col-form-label" for="contact">Phone</label>
            <div class="col-md-9">
            <input class="form-control" type="text"></input>
            </div>
            </div>
            <div class="form-group row">
            <label class="col-sm-3 col-form-label">Message</label>
            <div class="col-md-9">
            <textarea class="form-control" type="text" rows="3"></textarea>
            </div>
            </div>
            <div class="row">
                    <div class="col-sm-9 offset-sm-3">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </div>
        </form>
        
    </div>
  )
}

export default Contacts