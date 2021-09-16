import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import axios from 'axios'
import { useHistory } from 'react-router';
export default function ParentForm() {

    const usehistory= useHistory();

//User Log In Checking

    const tkn= localStorage.getItem("token");
    if(tkn){
        usehistory.push("/dashboard");
    }

//Login Or Register Render Check

    let [check1, loginregister] = useState(true);


//Login User State Handling

    const [user1, loginUser] = useState({
        email: "", password: ""

    });

//Register User State Handling

    const [user2, registerUser] = useState({
        fname: "", lname: "", email: "", password: ""

    });

//Login User Inputs OnChange Handling

    const handleInputs1 = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        loginUser({ ...user1, [name]: value })

    }

//Registeration User Inputs OnChange Handling

    let name, value;
    const handleInputs2 = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        registerUser({ ...user2, [name]: value })
    }

    
//Email Format Checking Function 

    function validation(email){
        const expression= /^[A-Za-z0-9]{3,}@donesol.co.uk$/
        if(expression.test(email)){
            return true;
        }
        else
        {
            return false;
        }
    }

//User Login Authentication Function
    
    async function loginData() {
        const { email,  password} =user1;
            if(email&&password)
            {
                if(validation(email))
                {

                    const result = await axios.post('http://localhost:4000/login', user1)
                    if(result.data){ 
                        usehistory.push("/dashboard");
                        localStorage.setItem("token", user1.email);
                    } 
                    else 
                    {
                        alert("Invalid Email or Password!");
                    } 
                }
                else{
                    alert("Email Format is not Valid!")
                }
                
            }
            else{
                alert("Fill All Fields!");
            }
            

        }

//User Register Validation & Authentication Function

    async function RegisterData(e) {
        const {fname, lname, email, password} =user2;
        if(fname&&lname&&email&&password)
        {
            if(validation(email))
            {
                const result = await axios.post('http://localhost:4000/register', user2);
                result.data ? alert(`${result.data}`) : alert("Invalid Inputs!");
            }
            else{
                alert("Invalid Email Format!")
            }
        }
        else{
            alert("Fill All Fields!");
        }
    }




//Front-End HTML-CSS Code


    return (
        <div>

            <nav class="navbar navbar-expand-lg    navbar navbar-dark bg-success ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:3000">Haider's Developer</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="http://localhost:3000navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="http://localhost:3000">Home</a>
                            </li>                
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-secndary border border-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="back">
                <div class="div-center border border-success rounded-top rounded-bottom">
                    <div class="content">

                        <button className="register-heading btn btn-success login-width" onClick={() => loginregister(check1 = true)}>Log In</button>
                        <button className="register-heading btn btn-success ms-2 register-width" onClick={() => loginregister(check1 = false)}>Register</button>
                        <div>
                        {check1 ? <Login loginData={() => loginData()} setLogin={handleInputs1} /> : <Register submitData={() => RegisterData()} setRegister={handleInputs2} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
