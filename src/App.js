
import './App.css';
import Nav from './Components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import SignUp  from './Components/SignUp'
import PrivateComponents from './Components/PrivateComponents';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateList from './Components/UpdateProduct';
import TaskAssigned from './Components/TaskAssigned'
import TaskUpdate from './Components/TaskUpdate'
import AddCapstone from './Components/Capstone/AddCapstone'
import UpdateCapstone from './Components/Capstone/CapstoneUpdate'
import QueryAdd from './Components/Queries/AddQueries'
import UpdateQuery from './Components/Queries/QueriesUpdate'
import RequirementProductss from './Components/Requirement/RequirementProductBE';
import Applications from './Components/Requirement/Applications'
import InterviewTasks from './Components/Requirement/InterviewTasks'
import Leaveapplications from './Components/Leave/AddLeave'

function App() {
  return (
    <div >
    <BrowserRouter>
       <Nav/>
      <Routes>
       <Route element={<PrivateComponents/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateList/>}/>
        <Route path="/updatetask/:id" element={<TaskUpdate/>}/>
        <Route path="/updatecapstone/:id" element={<UpdateCapstone/>}/>
        <Route path="/updateQuery/:id" element={<UpdateQuery/>}/>
        <Route path="/taskassign" element={<TaskAssigned/>}/>
        <Route path="/capstone" element={<AddCapstone/>}/>
        <Route path="/addqueries" element={<QueryAdd/>}/>
        <Route path="/requirement" element={<RequirementProductss/>}/>
        <Route path="/applications" element={<Applications/>}/>
        <Route path="/interviewtasks" element={<InterviewTasks/>}/>
        <Route path="/leaveapplications" element={<Leaveapplications/>}/>
        <Route path="/logout" element={<h1 class="content">logout </h1>}/>
        <Route path="/profile" element={<h1 class="content">Profile</h1>}/>
      </Route> 
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
