import React, { useState } from "react";
import './login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios"
const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({email, password})
    const handleEmail = (e) =>{
setEmail(e.target.value)
    }
const handlePassword = (e) =>{
    setPassword(e.target.value)
}


const handleApi = () =>{
    console.log({email, password})
    axios.post("https://reqres.in/api/login",{
email : email,
password : password
   
})
    .then(result=>{
        console.log(result.data)
        alert("seccess")
    })
    .catch(error =>{
        alert("service error ")
console.log(error)
    })
}

    return(
    <div className="wrapper">
        <form action="">

<h1>Login</h1>
<div className="input-box">
<input  value={email} onChange={handleEmail}   
type="email" placeholder="email" required/>
<FaUser className="icon"/>

</div>
<div className="input-box">
    <input value={password} onChange={handlePassword} type="password" placeholder="password" required/>
<FaLock className="icon"/>
</div>


<div className="remmember-forget">
    <label><input type="checkbox"/>Remember me</label>
    <a href="#">Forgot password</a>
</div>

<button onClick={handleApi} type="submit" >Login</button>

<div className="register-link">
<p>Don't have ana account? <a href="#">register</a></p>


</div>







        </form>
    </div>
)
}
export default Login 