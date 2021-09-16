import React from 'react'
import { Link } from 'react-router-dom';
export default function Login(props) {


//Login Front-End HTML-CSS Code

    return (
        <div>
                <hr />
                
                    <h5 className="text-center register-heading">Login to Donesol</h5>
                    <div class="form-group">
                    <label for="exampleInputEmail1" className="register-heading"  >Email address</label>
                    <input type="email" class="form-control register-heading" name="email" placeholder="Email" onChange={props.setLogin}/>
                    </div>
                    <div class="form-group mt-3">
                    <label for="exampleInputPassword1" className="register-heading">Password</label>
                    <input type="password" class="form-control" name="password" placeholder="Password" onChange={props.setLogin}/>
                    </div>
                    <button  class="register-heading btn btn-success mt-3 button-width" onClick={ props.loginData}>Login</button>
                <hr />
                
            <Link to="/" type="button" class="register-heading padding-reset">Forget Password?</Link>

                                            
        </div>
    )
}
