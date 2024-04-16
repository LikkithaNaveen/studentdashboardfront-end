import React ,{useEffect, useState}from 'react'
import "bootstrap/dist/css/bootstrap.css";
import ProductQueries from './QueriesProduct'

const AddQueries = () => {
    const[name,setName]=useState("")
    const[topiccategory,setTopicategory]=useState("")
    const[language,setLanguage]=useState("")
    const[title,setTitle]=useState("")
    const[querydesc,setQuerydesc]=useState("")
    const[timings,setTimings]=useState("")
    const[error,setError]=useState(false)
    

    const addqueriesproduct=async()=>{
        console.warn(name,topiccategory,language,title,querydesc,timings)

        if(!name|| !topiccategory|| !language|| !title|| !querydesc || !timings)
        {
            setError(true)
            return false;
        }
       
        const userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('https://studentdashboard-new-2.onrender.com/Queries-details',{
            method:"post",
            body:JSON.stringify({name,topiccategory,language,title,querydesc,timings,userId}),
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
        <h1 class='headingtaskass'> Queries</h1>
      <form  className="form">
        <label class="taskadd">Name</label><br></br>
        <input type="text" placeholder="Name" name="Name"  class="taskinput"
         value={name} onChange={(e)=>{setName(e.target.value)}} 
         required />
        {error && !name && <span class='invalid-input'>Enter valid name</span>}<br></br><br></br>

        <label class="taskadd">Topic Category </label><br></br>
        <select name="cat" id="cat" class="taskinputdropdown"
        value={topiccategory} onChange={(e)=>{setTopicategory(e.target.value)}}
        >
          <option value="general">Choose a Language</option>
          <option value="Java">Zen-Class-Doubt</option>
          <option value="Python ">Placement-Related</option>
          <option value=".Net">Cordination Related</option>
          <option value="C/C++">Pre-Bootcamp-related</option>
        </select>
        {error && !topiccategory && <span class='invalid-input'>Enter Category</span>}<br></br>


        <label class="taskadd"> Topic Language </label><br></br>
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

        <label class="taskadd">Query title</label><br></br>
        <input type="text" placeholder="title" name="Name"  class="taskinput"
         value={title} onChange={(e)=>{setTitle(e.target.value)}} 
         required />
        {error && !title && <span class='invalid-input'>Enter title</span>}<br></br>
        

        <label class="taskadd">Query Description</label><br></br>
        <input type="text" placeholder="Description" name="Name"  class="taskinput"
         value={querydesc} onChange={(e)=>{setQuerydesc(e.target.value)}} 
         required />
        {error && !querydesc && <span class='invalid-input'>Enter Description</span>}<br></br>
        
        <label class="taskadd">Timings</label><br></br>
        <input type="time" placeholder="time" name="time"  class="taskinput"
         value={timings} onChange={(e)=>{setTimings(e.target.value)}} 
         required />
        {error && !timings && <span class='invalid-input'>Enter timing</span>}<br></br>
         <button   type="submit" class="tasksubmit" onClick={addqueriesproduct}>Submit</button>
      </form>

      <ProductQueries/>

  

      
    </div>
  );
};



export default AddQueries
