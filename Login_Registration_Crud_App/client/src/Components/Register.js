import React from 'react';
export default function Register(props) {
    return (
        <div>
                            
            <hr />         
                <h5 className="text-center register-heading">Register to Donesol Technologies</h5>    
                <div class="form-group ">
                <label for="fname " className="register-heading" >First Name</label>
                <input type="text" class="form-control" name="fname" placeholder="First Name" onChange={props.setRegister}/>
                </div>
                <div class="form-group mt-3">
                <label for="fname" className="register-heading">Last Name</label>
                <input type="text" class="form-control" name="lname" placeholder="Last Name" onChange={props.setRegister}/>
                </div>
                <div class="form-group mt-3">
                <label for="email" className="register-heading">Email address</label>
                <input type="email" class="form-control" name="email" placeholder="Email" onChange={props.setRegister}/>
                </div>
                <div class="form-group mt-3">
                <label for="password" className="register-heading">Password</label>
                <input type="password" class="form-control" name="password" placeholder="Password" onChange={props.setRegister}/>
                </div>
                <button  class="btn btn-success mt-3 button-width register-heading" onClick={props.submitData}>Register</button>
                <hr />
                                       
        </div>
    )
}
