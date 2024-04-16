import React ,{useState,useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom';


 const CapstoneUpdate = () => {
    const[name,setName]=useState("")
    const[capstonetitle,setCapstonetitle]=useState("")
    const[language,setLanguage]=useState("")
    const[status,setStatus]=useState("")
    const[desc,setDesc]=useState("")
    const params=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        getCapstoneupdatedetails()
    },[])

    const getCapstoneupdatedetails=async()=>{
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/capstone-details/${params.id}`,{
        headers:{
                    authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
    });
      result=await result.json();
      console.warn(result)
      setName(result.name)
      setCapstonetitle(result.capstonetitle)
      setLanguage(result.language)
      setStatus(result.status)
      setDesc(result.desc)

      

    }
                

    const UpdateCapstone=async()=>{
      //console.log(name,course,language,taskdetails,assigndate,completedate,desc)
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/capstone-details/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,capstonetitle,language,status,desc}),
        headers:{
            'Content-Type':'application/json'
            //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
    });
    result=await result.json()
    console.warn(result)
    navigate("/capstone")
    
}
    

    return (
        <div className="container">
        <h1 class='headingtaskass'> Capstone Details </h1>
      <form  className="form">
        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
       <br></br>

        <label class="taskadd">Capstone Title</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={capstonetitle} onChange={(e)=>{setCapstonetitle(e.target.value)}} 
         required />
       <br></br>
        

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
       <br></br>

        <label class="taskadd">Status </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={status} onChange={(e)=>{setStatus(e.target.value)}}
        >
          <option value="general">Choose a Status</option>
          <option value="Pending">Pending</option>
          <option value="Competed ">Competed</option>
        </select>
       <br></br>

        

        <label class="taskadd">Description </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Description" class="taskinput"
          value={desc} onChange={(e)=>{setDesc(e.target.value)}}
        ></textarea><br></br>
        
  
         <button   type="submit" class="tasksubmit" onClick={UpdateCapstone}>Submit</button>
      </form>
      

  

      
    </div>
  );
};


export default CapstoneUpdate
