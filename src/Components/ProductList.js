import React, { useEffect, useState,useCallback } from 'react'
import { Link } from 'react-router-dom';
import CapstoneProduct from './Capstone/Capstoneproduct';
import Calender from './Calender'

const ProductList = () => {
    const[products,setProducts]=useState([])
    const[taskassign,setTaskassign]=useState([])
   

    const auth=localStorage.getItem('user')
    
    

    useEffect(()=>{
        getProducts();
        gettaskdetails();
    },[])

    const getProducts=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/personal-details')
        // {
        //     headers:{
        //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //             }
        // })
       
        result=await result.json()
        setProducts(result)
    }
   

    const gettaskdetails=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/addTask-details')
        // {
        //     headers:{
        //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //             }
        // })
       
        result=await result.json()
        setTaskassign(result)
    }
    //console.warn("products",products)

    const deletedetails=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/personal-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getProducts()
        }

    }

    const productdelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/addTask-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            gettaskdetails()
        }

    }
     

    const searchhandle=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/search/${key}`,{
                headers:{
                            authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                        }
            });
            result=await result.json()
            if(result)
            {
                setProducts(result)
            }
            else{
                getProducts()
            }
            

        }
    }

    const searchtaskdetails=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchtask/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setTaskassign(result)
            }
            else{
                gettaskdetails()
            }
            

        }
    }
  return (
    <div className="Personaldetails">

<div class='mainimage'>
      <img src="https://i.pinimg.com/736x/d6/01/16/d60116fccfec4fadb63dc46b628cc344.jpg" height={200}/>
        <div class='maincontent'>
            
            <h1>Hello ({JSON.parse(auth).name})</h1>
            <h5>Welocme to Dashboard</h5>
        </div>

       <div> <Calender/></div>
            
        </div>


        <div class='totalarea'>
            <div class='task1'>
                <h4><i class="fa fa-address-card-o"></i> Total Users</h4><br></br>
                <h4>{products.length}</h4><br></br>
                <p>{(products.length)/100} % is weekly Count</p>
            </div>
            <div class='task1'>
                <h4><i class="fa fa-book"></i> Total Task Assigned</h4><br></br>
                <h4>{taskassign.length}</h4><br></br>
                <p>{(taskassign.length)/100} % is Task assigned to student</p>
            </div>
            <div class='task1'>
                <h4><i class="fa fa-clone"></i>Total Capstone Assigned</h4><br></br>
                <h4>{(taskassign.length)+1}</h4><br></br>
                <p>{(taskassign.length)/100} % is Capstone assigned</p>
            </div>
            <div class='task1'>
                <h4><i class="fa fa-clone"></i>Total Queries</h4><br></br>
                <h4>0</h4><br></br>
                <p>0% is Queries solved</p>
            </div>
        </div>
        <h3>Personal Details</h3>
        <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchhandle}/>
        <ul>
            <li>S.no</li>
            <li>Name</li>
            <li>Email</li>
            <li>Age</li>
            <li>Phone No</li>
            <li>Gender</li>
            <li>Spec</li>
            <li>Address</li>
            <li>Category</li>
            <li>Description</li>
            <li>Operation</li>
        </ul>
        {
            products.length>0 ? products.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.age}</li>
                <li>{item.phonenumber}</li>
                <li>{item.gender}</li>
                <li>{item.spec}</li>
                <li>{item.address.slice(0,20)}</li>
                <li>{item.category}</li>
                <li>{item.desc}</li>
                <li><button onClick={()=>deletedetails(item._id)}>Delete</button>
                <button><Link to={"/update/"+item._id}>Update</Link></button>
                </li>
                
            </ul>
    )           :<h1>No Result Found</h1>
    }


                <h3>Task Assigned Details</h3>
                <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchtaskdetails}/>

        <ul>
            <li>S.no</li>
            <li>Name</li>
            <li>Course</li>
            <li>Language</li>
            <li>Task Details</li>
            <li>Start Date</li>
            <li>End Date</li>
            <li>Description</li>
            <li>Operation</li>
        </ul>
        {
            taskassign.length>0 ? taskassign.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.course.slice(0,10)}</li>
                <li>{item.language}</li>
                <li>{item.taskdetails}</li>
                <li>{item.assigndate.slice(0,10)}</li>
                <li>{item.completedate.slice(0,10)}</li>
                <li>{item.desc}</li>
                <li><button onClick={()=>productdelete(item._id)}>Delete</button>
                <button><Link to={"/updatetask/"+item._id}>Update</Link></button>
                </li>
                
            </ul>
    )           :<h1>No Result Found</h1>
    }
    </div>
  )
}

export default ProductList