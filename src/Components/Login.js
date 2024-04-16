import React ,{ useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth)
    {
        navigate('/')
    }

},[])

  const handlelogin=async()=>{
    console.warn(email,password)
    let result=await fetch('https://studentdashboard-new-2.onrender.com/login',{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
          'Content-Type':'application/json',
           authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
                  
  });
  result=await result.json()
  console.warn(result)
  if(result.auth)
  {
    localStorage.setItem("user",JSON.stringify(result.user))
    localStorage.setItem("token",JSON.stringify(result.auth))
    navigate('/')
  }
  else{
    alert("Please enter valid details")
  }
  }

  return (
    <div>
       <h1 class='signinh1'>Sign Up</h1>

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
            <button onClick={handlelogin} type="submit" class="signupbtn">Login</button>
            </div>
    </div>

  )
}

export default Login