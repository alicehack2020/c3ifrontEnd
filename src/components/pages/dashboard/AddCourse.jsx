import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import "../Auth/Registration.css"
import { useNavigate } from 'react-router-dom';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';

const AddCourse = () => {

  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const navigate=useNavigate()
  const saveData=()=>{

     
    const data={
      name:name,
      description:description  
    }


// POST request using fetch()
fetch("https://c3ihub.herokuapp.com/api/course/add", {
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
      alert(json.message);
      navigate("/admin")
    }
}



 
  return (
    <div>
      <NavBarAfterLogin/>

      <div className="main">
        <div className='register_form'>
            <TextField className='TextField' label="Enter course name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} sx={{marginTop:"60px"}}/>
            <TextField className='TextField' label="Enter information" variant="outlined" value={description} onChange={(e)=>setDescription(e.target.value)} sx={{marginTop:"30px"}}/>
             <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Add</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default AddCourse