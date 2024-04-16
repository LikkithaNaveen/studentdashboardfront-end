import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const QueriesProduct = () => {
    const[addquery,setAddquery]=useState([])

    useEffect(()=>{
        getQueryProduct();
    },[])

    const getQueryProduct=async()=>{
        let result=await fetch('https://studentdashboard-new-2.onrender.com/Queries-details',{
            headers:{
                        authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
        })
       
        result=await result.json()
        setAddquery(result)
    }
    

   


    const Querydelete=async (id)=>{
        let result=await fetch(`https://studentdashboard-new-2.onrender.com/Queries-details/${id}`,{
            method:"Delete"

        });
        result=await result.json()
        if(result)
        {
            getQueryProduct()
        }

    }


    const searchQueryproduct=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`https://studentdashboard-new-2.onrender.com/searchqueries/${key}`)
            //     headers:{
            //                 authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            //             }
            // });
            result=await result.json()
            if(result)
            {
                setAddquery(result)
            }
            else{
                getQueryProduct()
            }
            

        }
    }

  return (
    <div className="queries">
    
    <i class="fa fa-search-plus"/><input  class='SearchProduct' type='text' placeholder='Search'
        onChange={searchQueryproduct}/>
        
        {
            addquery.length>0 ? addquery.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.topiccategory}</li>
                <li>{item.language}</li>
                <li>{item.title}</li>
                <li>{item.querydesc}</li>
                <li>{item.timings}</li>
                <li><button onClick={()=>Querydelete(item._id)}>Delete</button>  
                <button><Link to={"/updateQuery/"+item._id}>Update</Link> </button>
                </li>
                
            </ul>
    )           :<h1>No Result Found</h1>
    }
      
    



      
    </div>
  )
}

export default QueriesProduct