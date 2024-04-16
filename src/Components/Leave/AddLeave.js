import React ,{useEffect, useState}from 'react'
import "bootstrap/dist/css/bootstrap.css"; 
import AddProductLeave from './AddLeaveProduct'


const AddLeave = () => {
  const[name,setName]=useState("")
    const[days,setDays]=useState("")
    const[fromdate,setFromdate]=useState("")
    const[todate,settodate]=useState("")
    const[reason,setReason]=useState("")
    const[error,setError]=useState(false)
    

    const addleavedetails=async()=>{
        console.warn(name,days,fromdate,todate,reason)

        if(!name|| !days|| !fromdate|| !todate|| !reason)
        {
            setError(true)
            return false;
        }
       
        const userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('https://studentdashboard-new-2.onrender.com/Leave-Details',{
            method:"post",
            body:JSON.stringify({name,days,fromdate,todate,reason,userId}),
            headers:{
                'Content-Type':'application/json'
                //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            },  
        });
        result=await result.json()
        console.warn(result)
      
        
    }
                

    return (
    <div className="container">
        <h1 class='headingtaskass'> Leave Applications</h1>
      <form  className="form">
        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        {error && !name && <span class='invalid-input'>Enter valid name</span>}<br></br><br></br>

      
        

        <label class="taskadd">Days </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={days} onChange={(e)=>{setDays(e.target.value)}}
        >
          <option value="general">Choose a Days</option>
          <option value="1">1</option>
          <option value="More than 1 ">More than 1 </option>
        </select>
        {error && !days && <span class='invalid-input'>Enter days</span>}<br></br>

        <label class="taskadd">Start Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='Start Time'
            value={fromdate} onChange={(e)=>{setFromdate(e.target.value)}}/>
           
            <label class="taskadd">End Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='End Time'
            value={todate} onChange={(e)=>{settodate(e.target.value)}}/>
         

        

        <label class="taskadd">Reason </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="reason" class="taskinput"
          value={reason} onChange={(e)=>{setReason(e.target.value)}}
        ></textarea><br></br>
        {error && !reason && <span class='invalid-input'>Enter Reason</span>}
  
         <button   type="submit" class="tasksubmit" onClick={addleavedetails}>Submit</button>
      </form>
      <AddProductLeave/>

  

      
    </div>
  );
};



export default AddLeave
