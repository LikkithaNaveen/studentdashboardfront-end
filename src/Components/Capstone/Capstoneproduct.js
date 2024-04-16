import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CapstoneProduct = () => {
    const[addcapstone,setAddcapstone]=useState([])

    useEffect(()=>{
        getCapstonedetails();
    },[])

    const getCapstonedetails=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/capstone-details',{
            headers:{
                        authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
        })
       
        result=await result.json()
        setAddcapstone(result)
    }
    

   


    const capstonedelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/capstone-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getCapstonedetails()
        }

    }


    const searchcapstonedetails=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchcapstone/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setAddcapstone(result)
            }
            else{
                getCapstonedetails()
            }
            

        }
    }

  return (
    <div className="capstone">
    
    <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchcapstonedetails}/>
        
        {
            addcapstone.length>0 ? addcapstone.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.capstonetitle}</li>
                <li>{item.language}</li>
                <li>{item.status}</li>
                <li>{item.desc}</li>
                <li><button onClick={()=>capstonedelete(item._id)}>Delete</button>  
                <button><Link to={"/updatecapstone/"+item._id}>Update</Link> </button>
                </li>
                
            </ul>
    )           :<h1>No Result Found</h1>
    }
      
    



      
    </div>
  )
}

export default CapstoneProduct