import React, { useState } from 'react'
import NavBarLogin from '../navbar/NavBarlogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import "../Auth/Registration.css"
import { useNavigate } from 'react-router-dom';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';

const AddStudent = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [passwordConfirmation,setPasswordConfirmation]=useState("")
   

  const navigate=useNavigate()


  const saveData=()=>{

     
    const data={
      name:name,
      email:email,
      password:password,
      role:"student",
      password_confirmation:passwordConfirmation
    }


// POST request using fetch()
fetch("http://localhost:8000/api/user/register", {
	method: "POST",
	body: JSON.stringify(data),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
.then(response => response.json())
.then(json =>handdleError(json));

}


const handdleError=(json)=>{
  console.log(json.status);

  var status=json.status
    if(status==="failed")
    {
      alert(json.message)
    }
    else
    {
     // alert(json.message) 
     alert("Student Added successfully")
      navigate("/admin")
    }
}



 
  return (
    <div>
      <NavBarAfterLogin/>

      <div className="main">
        <div className='register_form'>
            <TextField className='TextField' label="Enter student name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} sx={{marginTop:"60px"}}/>
            <TextField className='TextField' label="Enter student email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter student password" variant="outlined"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter student confirm Password" variant="outlined"  type="password" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} sx={{marginTop:"30px",marginBottom:"30px"}}/>
            <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Add</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default AddStudent