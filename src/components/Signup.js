import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/form.css'

const host = "http://127.0.0.1:5000";


const Signup = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch(`${host}/api/auth/createuser`,{
           method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password})
       });

       const json = await response.json();
       console.log(json.authToken);
       if(json.authToken){
        // Save auth blogtoken and redirect to notes page
        localStorage.setItem("blogtoken",json.authToken);
        navigate("/");
    }
    else{
        alert(json.errors);
    }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div id="signup" className="_form">

                <form className='signup-form' onSubmit={handleSubmit} >

                    <h3>Signup Here</h3>
                    <div>
                        <label htmlFor="name" style={{ display: 'inline-block' }}>Username</label>
                    </div>
                    <input type="text" placeholder="Username" name="name" id="name" value={credentials.name} onChange={onChange} required minLength={3} />
                    <div><label htmlFor="email" style={{ display: "inline-block" }}>Email</label>
                    </div>
                    <input type="email" placeholder="Email" name="email" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required  />
                    <div><label htmlFor="password" style={{ display: "inline-block" }}>Password</label>
                    </div>
                    <input type="password" required placeholder="Password" id="password" name="password" value={credentials.password} onChange={onChange} minLength={5} />
                    <div><label htmlFor="cpassword" style={{ display: "inline-block" }}>Confrom Password</label>
                    </div>
                    <input type="password" required placeholder="Confrom Password" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} />


                    <button type="submit">SignUp</button>

                    <Link to="/login">I have already account</Link>

                </form>
            </div>
        </>
    )
}

export default Signup