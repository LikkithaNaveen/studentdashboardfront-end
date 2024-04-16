import React ,{useEffect, useState}from 'react'
import "bootstrap/dist/css/bootstrap.css"; 
import Capstoneproduct from './Capstoneproduct'

const AddCapstone = () => {
    const[name,setName]=useState("")
    const[capstonetitle,setCapstonetitle]=useState("")
    const[language,setLanguage]=useState("")
    const[status,setStatus]=useState("")
    const[desc,setDesc]=useState("")
    const[error,setError]=useState(false)
    

    const addcapstonedetails=async()=>{
        console.warn(name,capstonetitle,language,status,desc)

        if(!name|| !capstonetitle|| !language|| !status|| !desc)
        {
            setError(true)
            return false;
        }
       
        const userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('https://studentdashboard-new-2.onrender.com/capstone-details',{
            method:"post",
            body:JSON.stringify({name,capstonetitle,language,status,desc,userId}),
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
        <h1 class='headingtaskass'> Capstone Details </h1>
      <form  className="form">
        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        {error && !name && <span class='invalid-input'>Enter valid name</span>}<br></br><br></br>

        <label class="taskadd">Capstone Title</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={capstonetitle} onChange={(e)=>{setCapstonetitle(e.target.value)}} 
         required />
        {error && !capstonetitle && <span class='invalid-input'>Enter valid name</span>}<br></br>
        

        <label class="taskadd">Language </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={language} onChange={(e)=>{setLanguage(e.target.value)}}
        >
          <option value="general">Choose a Language</option>
          <option value="Java">Java</option>
          <option value="Python ">Python</option>
          <option value=".Net">.Net</option>
          <option value="C/C++">C/C++</option>
          <option value="HTML/CSS">HTML/CSS</option>
          <option value="React Js">React Js</option>
          <option value="Node Js">Node Js</option>
        </select>
        {error && !language && <span class='invalid-input'>Enter Language</span>}<br></br>

        <label class="taskadd">Status </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={status} onChange={(e)=>{setStatus(e.target.value)}}
        >
          <option value="general">Choose a Status</option>
          <option value="Pending">Pending</option>
          <option value="Competed ">Competed</option>
        </select>
        {error && !status && <span class='invalid-input'>Enter Status</span>}<br></br>

        

        <label class="taskadd">Description </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Description" class="taskinput"
          value={desc} onChange={(e)=>{setDesc(e.target.value)}}
        ></textarea><br></br>
        {error && !desc && <span class='invalid-input'>Enter Description</span>}
  
         <button   type="submit" class="tasksubmit" onClick={addcapstonedetails}>Submit</button>
      </form>
      <Capstoneproduct/>

  

      
    </div>
  );
};



export default AddCapstone
