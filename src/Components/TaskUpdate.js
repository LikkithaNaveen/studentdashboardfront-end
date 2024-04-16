import React ,{useState,useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom';


 const Taskupdate = () => {
    const[name,setName]=useState("")
    const[course,setCourse]=useState("")
    const[language,setLanguage]=useState("")
    const[taskdetails,settaskdetails]=useState("")
    const[assigndate,setAssigndate]=useState("")
    const[completedate,setCompletedate]=useState("")
    const[desc,setDesc]=useState("")
    const params=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        getTaskdetails()
    },[])

    const getTaskdetails=async()=>{
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/addTask-details/${params.id}`,{
        headers:{
                    authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
    });
      result=await result.json();
      console.warn(result)
      setName(result.name)
      setCourse(result.course)
      setLanguage(result.language)
      settaskdetails(result.taskdetails)
      setAssigndate(result.assigndate)
      setCompletedate(result.completedate)
      setDesc(result.desc)

      

    }
                

    const Updatetask=async()=>{
      //console.log(name,course,language,taskdetails,assigndate,completedate,desc)
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/addTask-details/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,course,language,taskdetails,assigndate,completedate,desc}),
        headers:{
            'Content-Type':'application/json'
            //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
    });
    result=await result.json()
    console.warn(result)
    navigate("/")
    
}
    

    return (
        <div className="container">
        <h1 class='headingtaskass'> Task Assigned Details </h1>
      <form  className="form">
        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        

        <label class="taskadd">Course </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={course} onChange={(e)=>{setCourse(e.target.value)}}
        >
          <option value="general">Choose a Course</option>
          <option value="Java developer">Java developer</option>
          <option value="Python developer">Python developer</option>
          <option value="Front-End Developer">Front-End Developer</option>
          <option value="Back-End Developer">Back-End Developer</option>
          <option value="Full stack Developer">Full stack Developer</option>
        </select>
       


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
        

        <label class="taskadd">Task Details </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Task Details" class="taskinput"
          value={taskdetails} onChange={(e)=>{settaskdetails(e.target.value)}}
        ></textarea><br></br>
       
        


            <label class="taskadd">Start Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='Start Time'
            value={assigndate} onChange={(e)=>{setAssigndate(e.target.value)}}/>
           
            <label class="taskadd">End Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='End Time'
            value={completedate} onChange={(e)=>{setCompletedate(e.target.value)}}/>
         

        <label class="taskadd">Description </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Description" class="taskinput"
          value={desc} onChange={(e)=>{setDesc(e.target.value)}}
        ></textarea><br></br>
        
  
         <button   type="submit" class="tasksubmit" onClick={Updatetask}>Submit</button>
      </form>
    </div>
  );
};


export default Taskupdate
