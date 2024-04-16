import React ,{useState,useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom';


 const UpdateProduct = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState("")
    const[phonenumber,setPhonenumber]=useState("")
    const[gender,setGender]=useState("")
    const[spec,setSpec]=useState("")
    const[address,setAddress]=useState("")
    const[category,setCategory]=useState("")
    const[city,setCity]=useState("")
    const[state,setState]=useState("")
    const[pincode,setPincode]=useState("")
    const[desc,setDesc]=useState("")
    //const[error,setError]=useState(false)
    const params=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
      getProductdetails()
    },[])

    const getProductdetails=async()=>{
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/personal-details/${params.id}`,{
        headers:{
                    authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
    });
      result=await result.json();
      console.warn(result)
      setName(result.name)
      setEmail(result.email)
      setAge(result.age)
      setPhonenumber(result.phonenumber)
      setGender(result.gender)
      setSpec(result.spec)
      setAddress(result.address)
      setCategory(result.category)
      setCity(result.city)
      setState(result.state)
      setPincode(result.pincode)
      setDesc(result.desc)

      

    }
                

    const updateproduct=async()=>{
      console.log(name,email,age,phonenumber,gender,spec,address,category,city,state,pincode,desc)
      let result=await fetch(`https://studentdashboard-new-2.onrender.com/personal-details/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,email,age,phonenumber,gender,spec,address,category,city,state,pincode,desc}),
        headers:{
            'Content-Type':'application/json',
            authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
    });
    result=await result.json()
    console.warn(result)
    navigate("/")
    
}
    

    return (
    <div className="container">
        <h1 class='signinh1'> Add Personal Details</h1>
      <form  className="form">
        <input type="text" placeholder="Name" name="Name"  
         value={name} onChange={(e)=>{setName(e.target.value)}} required />
       

        <input type="text" placeholder="Email" name="Email" 
        value={email} onChange={(e)=>{setEmail(e.target.value)}}required />

       
        <input type="text" placeholder="Age" name="Age" 
        value={age} onChange={(e)=>{setAge(e.target.value)}}required />

       


        <input type="number" placeholder="Phone Number" name="Phone Number" 
        value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}required />

       

        <select name="cat" id="cat" 
        value={gender} onChange={(e)=>{setGender(e.target.value)}}>
         <option value="general">Choose Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="others">others</option>
        </select>
        

        <input type="text" placeholder="Specification" name="Specification" 
        value={spec} onChange={(e)=>{setSpec(e.target.value)}}required />

       



        <textarea 
          required
          name="desc"
          id="desc"
          rows="2"
          placeholder="Address"
          value={address} onChange={(e)=>{setAddress(e.target.value)}}
        ></textarea>
       

        <select name="cat" id="cat"
        value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="general">Choose a Category</option>
          <option value="Java developer">Java developer</option>
          <option value="Python developer">Python developer</option>
          <option value="Front-End Developer">Front-End Developer</option>
          <option value="Back-End Developer">Back-End Developer</option>
          <option value="Full stack Developer">Full stack Developer</option>
        </select>
        
        
        <input type="text" placeholder="City" name="City" 
         value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
        

        <input type="text" placeholder="State" name="State" 
        value={state} onChange={(e)=>{setState(e.target.value)}} required/>
       

        <input type="number" placeholder="Pincode" name="Pincode" 
        value={pincode} onChange={(e)=>{setPincode(e.target.value)}} required/>
        

        <textarea
          required
          name="desc"
          id="desc"
          rows="4"
          placeholder="Description"
          value={desc} onChange={(e)=>{setDesc(e.target.value)}} 
        ></textarea>
        
        <button  onClick={updateproduct} type="submit">Update</button>
      </form>
    </div>
  );
};


export default UpdateProduct
