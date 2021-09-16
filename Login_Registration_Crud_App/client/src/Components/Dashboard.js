import React from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Dashboard() {
   
    const usehistory= useHistory();
    const [userData, setUserData] = useState([]);

    const [page, setPage]=useState(1);


//Log In Token Checking

    const tkn= localStorage.getItem("token");
    if(!tkn){
        usehistory.push("/");
    }
    

//Load User Dashboard

    // function LoadData(){
    //     axios.get('http://localhost:4000/dashboard')
    //     .then((res) => setUserData(res.data)).catch(err => window.alert(err));
    // }
    //     useEffect(()=>{
    //         LoadData();
    //     },[])

//Pagination Load User Data
function Pagination(){
    
    axios.get(`http://localhost:4000/users/${page}`)
    .then((res) => setUserData(res.data)).catch(err => window.alert(err));
}
    useEffect(()=>{
        Pagination();
    },[page])



//Delete User

    const Delete =async (id)=>{
        
        const result =await axios.delete(`http://localhost:4000/delete/${id}`);
        result.data ? alert("Delete Successfully!") : alert("Error");
        //LoadData();
        Pagination();
    }

    // useEffect(()=>{
    //     Delete();
    // })

//Log Out 

    function Logout(){
        localStorage.removeItem("token");
        usehistory.push("/");
    }


//Dashboard Front-End HTML-CSS Code

    return (

        <div>

            <nav className="navbar navbar-expand-lg    navbar navbar-dark bg-success ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://localhost:3000">Haider's Developer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="http://localhost:3000navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:3000">Home</a>
                            </li>
                            <li className="nav-item">
                            <button className="btn btn-success" aria-current="page" onClick={()=>Logout()} >Log Out</button>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-secndary border border-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            
            <div className="container">
                <div className="py-4">
                    <br />
                    <h1 className="text-center">Dashboard</h1>

                    <br />
                    <hr />
                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Sr #</th>
                                <th scope="col" className="text-center">Email</th>
                                <th scope="col" className="text-center">Password</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userData.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td className="text-center">{user.email}</td>
                                    <td className="text-center">{user.password}</td>
                                    <td className="text-center" >
                                        <Link  className=" btn btn-outline-primary" to={`/update/${user._id}`}>Edit</Link>
                                        <button className="btn btn-danger m-2" onClick={()=>Delete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>



                    </table>
                    
                </div>
                
            </div>
            <div className=" text-center ">
            <button className=" btn btn-outline-primary mb-5 button-hide" onClick={()=>setPage(page-1)} >Previous</button>
            <button className=" btn btn-primary mb-5 ms-3" onClick={()=>setPage(page+1)}>Next</button>
            </div>
            
        </div>
    )
}
