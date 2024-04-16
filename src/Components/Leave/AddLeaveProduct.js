import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AddProductLeave = () => {
    const[addleave,setaddleave]=useState([])

    useEffect(()=>{
        getaddleave();
    },[])

    const getaddleave=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/Leave-Details',{
            headers:{
                        authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
        })
       
        result=await result.json()
        setaddleave(result)
    }
    

   


    const leavedelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/Leave-Details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getaddleave()
        }

    }


    const searchleave=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchleave/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setaddleave(result)
            }
            else{
                getaddleave()
            }
            

        }
    }

  return (
    <div className="capstone">
    
    <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchleave}/>
        
        {
            addleave.length>0 ? addleave.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.days}</li>
                <li>{item.fromdate.slice(1,10)}</li>
                <li>{item.todate.slice(1,10)}</li>
                <li>{item.reason}</li>
                <li><button onClick={()=>leavedelete(item._id)}>Delete</button>
                </li>
                
            </ul>
    )           :<h1>No Result Found</h1>
    }       
      
    



      
    </div>
  )
}

export default AddProductLeave