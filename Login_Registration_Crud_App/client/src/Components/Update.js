import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Update(e) {

    const usehistory= useHistory();
    const{id}=useParams();
    const [user, setUser] = useState({
        fname: "", lname: "", email: "", password: ""

    });

//Get Data from DB and Load on Update Form Page

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    useEffect(()=>{
        LoadUser();
    },[]);


//Load User Data For Update Info

    const LoadUser =async ()=>{
        const result = await axios.get(`http://localhost:4000/load/${id}`);
        setUser(result.data);

    }

//Update User API Call Function

    const updateUser = async ()=>{
        const result= await axios.put(`http://localhost:4000/update/${id}`, user);
        result.data ? usehistory.push('/dashboard') : alert("Error Occured!");
    }


//Update User Information Front-End HTML-CSS Code

    return (
        <div>

            <div class="back">
                <div class="div-center border border-success rounded-top rounded-bottom">
                    <div class="content">
        

                        <h5 className="text-center register-heading">Edit User Information</h5>
                        <hr/>

                        <div class="form-group ">
                            <label for="fname " className="register-heading" >First Name</label>
                            <input type="text" class="form-control" name="fname" placeholder="First Name" value={user.fname} onChange={e=>handleInputs(e)}/>
                        </div>
                        <div class="form-group mt-3">
                            <label for="fname" className="register-heading" >Last Name</label>
                            <input type="text" class="form-control" name="lname" placeholder="Last Name" value={user.lname} onChange={e=>handleInputs(e)}/>
                        </div>
                        <div class="form-group mt-3">
                            <label for="email" className="register-heading">Email address</label>
                            <input type="email" class="form-control" name="email" value={user.email} placeholder="Email" onChange={e=>handleInputs(e)}/>
                        </div>
                        <div class="form-group mt-3">
                            <label for="password" className="register-heading">Password</label>
                            <input class="form-control" name="password" value={user.password} placeholder="Password" onChange={e=>handleInputs(e)}/>
                        </div>
                        <button class="btn btn-success mt-3 button-width register-heading" onClick={updateUser}>Update Changes</button>
                        <hr />



                    </div>
                </div>
            </div>


        </div>
    )
}
