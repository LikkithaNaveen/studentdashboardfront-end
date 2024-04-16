import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp=()=>{
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth)
        {
            navigate('/')
        }

    },[])

    const collectData=async()=>{
       // console.warn(name,password,email)
        let result=await fetch('https://studentdashboard-new-2.onrender.com/register',{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result=await result.json()
        console.warn(result)
        localStorage.setItem("user",JSON.stringify(result.result))
        localStorage.setItem("token",JSON.stringify(result.auth))
        navigate('/')
        

    }

    return(

        <div>
            <h1 class='signinh1'>Sign Up</h1>
            <p class='signinp'>Please fill in this form to create an account.</p>
            <label class='signuplabel'><b>Name</b></label>
            <input class='signupbox' type="text" 
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required/>

            <label class='signuplabel'><b>Email</b></label>
            <input class='signupbox' type="text" 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter Email" required/>


            <label class='signuplabel'><b> Password</b></label>
            <input class='signupbox' type="password" 
             value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Password"  requireid/>
            
            <br></br>
            <div>
            <button onClick={collectData} type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>
       
    )}
export default SignUp
    