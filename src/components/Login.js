import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../stylesheets/form.css'

const host = "http://127.0.0.1:5000";

const Login = () => {

  const [credentials, setCredentials] = useState({email:"",password:""});
   const navigate = useNavigate();
   
    const handleSubmit = async (e)=>{

        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`,{
            method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email:credentials.email, password:credentials.password})
        });

        const json = await response.json();
        // console.log(json.authToken);

        if(json.authToken){
            // Save auth blogtoken and redirect to notes page
            localStorage.setItem("blogtoken",json.authToken);
            navigate("/");
        }
        else{
            alert(json.errors);
            console.log(json)
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  return (
    <>
    <div id="login" className="_form" >
    <form className='login-form' onSubmit={handleSubmit} >
        <h3>Login Here</h3>
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter email" id="email" name="email" value={credentials.email} onChange={onChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" value={credentials.password} onChange={onChange}/>

        <button type="submit">LogIn</button>
        <Link to="/signup">Create a account</Link>
    </form>

        </div>
        
   </>
  )
}

export default Login