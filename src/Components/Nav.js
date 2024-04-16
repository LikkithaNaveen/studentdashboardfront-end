import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Nav=()=>{
    const auth=localStorage.getItem('user')
    const navigate=useNavigate()

    const logout=()=>{

        localStorage.clear()
        navigate('/signup')

    }

    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img 
            src="https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg" 
            alt="logo" 
            class='logo'/>
            {auth ? <ul class="nav-ul">
       

                <li><i class="fa fa-home"/> <Link to ="/">Home</Link></li>
                <li><i class="	fa fa-plus-circle"/> <Link to ="/add">Add Product</Link></li>
                <li><i class="fa fa-external-link-square"/> <Link to ="/update">Update Product</Link></li>
                <li><i class="fa fa-calendar-minus-o"/> <Link to ="/taskassign">Task Assigned</Link></li>
                <li><i class="fa fa-circle-o-notch"/> <Link to ="/capstone">Capstone Details</Link></li>
                <li><i class="fa fa-question-circle"/> <Link to ="/addqueries">Queries</Link></li>
                <li><i class="fa fa-handshake-o"/> <Link to ="/requirement">Requirement</Link></li>
                <li><i class="fa fa-book"/> <Link to ="/applications">Applications</Link></li>
                <li><i class="fa fa-id-badge"/> <Link to ="/interviewtasks">Interview Tasks</Link></li>
                <li><i class="fa fa-id-card"/> <Link to ="/leaveapplications">Leave Applications</Link></li>
                <li><i class="fa fa-sign-out"/> <Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></li> 
            </ul>:
            <div class="nav-ul-nav nav-right">
                <li><i class="fa fa-home"/> <Link to ="/signup">Sign Up</Link></li>
                <li><i class="fa fa-sign-in"/> <Link to ="/login">Login</Link></li>
            </div>
                 
            }

        </div>
        
    )
}

export default Nav