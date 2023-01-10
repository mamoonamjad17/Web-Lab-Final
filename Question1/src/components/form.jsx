import React,{useState} from 'react';
import axios from 'axios';
import "./form.css" 

const Form = () => {
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');

const usernameHandler =(event) =>{
    setUsername(event.target.value);   
    console.log(username)
}
const passwordHandler = (event)=>{
    setPassword(event.target.value)
    console.log(password)
}
const Submit=()=>{
fetch('https://dummyjson.com/auth/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
  
  username,
  password
  
})
})
.then(res => res.json())
.then(res=>{localStorage.setItem('token',res.token)})
 
}
    return ( 
        <>
<div className="back pt-5">
<div className="text-center centre-div" id="login">
<div className="container w-25 border py-5" >
    <h1 className="text-center">Login Here</h1>
    <form>
        <div className="form-group text-left">
            <label for="username">Username:</label>
            <input type="text" className="form-control" placeholder="Username" value={username} onChange={usernameHandler}/>
        </div>
        <div className="form-group text-left">
            <label for="password">Password: </label>
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={passwordHandler}/>
        </div>
        <button className="btn btn-primary" onClick={Submit}>Submit</button>
    </form>
</div>
</div>
</div>
        </>
     );
}
 
export default Form;