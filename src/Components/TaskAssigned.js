import React ,{ useState}from 'react'
import { useNavigate } from 'react-router-dom';



const TaskAssigned = () => {

    const[name,setName]=useState("")
    const[course,setCourse]=useState("")
    const[language,setLanguage]=useState("")
    const[taskdetails,settaskdetails]=useState("")
    const[assigndate,setAssigndate]=useState("")
    const[completedate,setCompletedate]=useState("")
    const[desc,setDesc]=useState("")
    const[error,setError]=useState(false)
    const navigate = useNavigate();

    const taskproduct=async()=>{


        console.warn(name,course,language,taskdetails,assigndate,completedate,desc)
        if(!name|| !course|| !language|| !taskdetails|| !assigndate|| !completedate|| !desc)
        {
            setError(true)
            return false;
        }
        

       
        const userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('https://studentdashboard-new-2.onrender.com/addTask-details',{
            method:"post",
            body:JSON.stringify({name,course,language,taskdetails,assigndate,completedate,desc,userId}),
            headers:{
                'Content-Type':'application/json'
                //authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            },  
        });
        result=await result.json()
        console.warn(result)
        navigate('/')
        
    }
                

    return (
    <div className="container">
     
        <h1 class='headingtaskass'>Task Assigned Details </h1>
      <form  className="form">
        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        {error && !name && <span class='invalid-input'>Enter valid name</span>}<br></br>


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
        {error && !course && <span class='invalid-input'>Enter Course</span>}<br></br>


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

        <label class="taskadd">Task Details </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Task Details" class="taskinput"
          value={taskdetails} onChange={(e)=>{settaskdetails(e.target.value)}}
        ></textarea><br></br>
        {error && !taskdetails && <span class='invalid-input'>Enter Details</span>} 
        


            <label class="taskadd">Start Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='Start Time'
            value={assigndate} onChange={(e)=>{setAssigndate(e.target.value)}}/>
            {error && !assigndate && <span class='invalid-input'> StartDate</span>} 
            <label class="taskadd">End Date</label><br></br>
            <input type="date" name="party" min="1990-01-01"  class="datepicker" max="5000-04-30" placeholder='End Time'
            value={completedate} onChange={(e)=>{setCompletedate(e.target.value)}}/>
            {error && !completedate && <span class='invalid-input'>ToDate</span>} 

        <label class="taskadd">Description </label><br></br>
        <textarea 
          required
          name="desc"
          rows="3"
          placeholder="Description" class="taskinput"
          value={desc} onChange={(e)=>{setDesc(e.target.value)}}
        ></textarea><br></br>
        {error && !desc && <span class='invalid-input'>Enter Description</span>}
  
         <button   type="submit" class="tasksubmit" onClick={taskproduct}>Submit</button>
      </form>
    </div>
  );
};



export default TaskAssigned
