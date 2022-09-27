import React, { useState } from 'react'
import NavBarLogin from '../navbar/NavBarlogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import "../Auth/Registration.css"
import { useNavigate, useParams } from 'react-router-dom';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';
import storage  from "../../../config/firebaseconfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddVideo = () => {

  const [title,setTitle]=useState("")
  const [info,setInfo]=useState("")
  const [image_url,setImage_url]=useState("")
  const [video_url,setVideo_url]=useState("")
  const [pdf_url,setPdf_url]=useState("")
  const [doc_url,setDoc_url]=useState("")
  const [text_url,setText_url]=useState("")

  const params=useParams()
  const course_id=params.course_id;
  const navigate=useNavigate()

   // State to store uploaded file
   const [file, setFile] = useState("");
   const [fileVideo, setFileVideo] = useState("");
   const [filePdf, setFilePdf] = useState("");
   const [fileDoc, setFileDoc] = useState("");
   const [fileText, setFileText] = useState("");
  
    // progress
    const [percent, setPercent] = useState(0);
    const [percentVideo, setPercentVideo] = useState(0);
    const [percentPdf, setPercentPdf] = useState(0);
    const [percentDoc, setPercentDoc] = useState(0);
    const [percentText, setPercentText] = useState(0);


   


    // Handle file upload event and update state
    function handleChange(event) {
      setFile(event.target.files[0]);
    }

    function handleChangeVideo(event) {
      setFileVideo(event.target.files[0]);
    }

    function handleChangePdf(event) {
      setFilePdf(event.target.files[0]);
    }

    function handleChangeDoc(event) {
      setFileDoc(event.target.files[0]);
    }

    function handleChangeText(event) {
      setFileText(event.target.files[0]);
    }




   const handleUpload = () => {
    if (!file) {
        alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setImage_url(url)
            });
        }
    );
   };


   const handleUploadVideo = () => {
    if (!fileVideo) {
        alert("Please upload an video first!");
    }

    const storageRef = ref(storage, `/files/${fileVideo.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercentVideo(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setVideo_url(url)
            });
        }
    );
   };

   const handleUploadPdf = () => {
    if (!filePdf) {
        alert("Please upload an pdf first!");
    }

    const storageRef = ref(storage, `/files/${filePdf.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercentPdf(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setPdf_url(url)
            });
        }
    );
   };

   const handleUploadDoc = () => {
    if (!fileDoc) {
        alert("Please upload an document first!");
    }

    const storageRef = ref(storage, `/files/${fileDoc.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercentDoc(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setDoc_url(url)
            });
        }
    );
   };

   const handleUploadText = () => {
    if (!fileText) {
        alert("Please upload an document first!");
    }

    const storageRef = ref(storage, `/files/${fileText.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercentText(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setText_url(url)
            });
        }
    );
   };


  const saveData=()=>{

     
    const data={
        course_id:course_id,
        title:title,
        info:info ,
        image_url:image_url,
        video_url:video_url,
        pdf_url:pdf_url,
        text_url:text_url,
        doc_url:doc_url
    }


// POST request using fetch()
fetch("http://localhost:8000/api/course/addvideo", {
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
            <h3>Add Video</h3>
            <TextField className='TextField' label="Enter video name" variant="outlined" value={title} onChange={(e)=>setTitle(e.target.value)} sx={{marginTop:"20px"}}/>
            <TextField className='TextField' label="Enter video info" variant="outlined" value={info} onChange={(e)=>setInfo(e.target.value)} sx={{marginTop:"20px",marginBottom:"10px"}}/>
        
             
            <Button className="Button" variant="contained"   onClick={saveData} sx={{width:"20rem",marginTop:"10px"}}>Add</Button>       
            
            <div>
              <p>select image</p>
                <input type="file" onChange={handleChange} accept="image/*" />
                <button onClick={handleUpload}>Upload</button>
              <p>{percent} "% done"</p>
           </div>

           <div>
              <p>select video</p>
                <input type="file" onChange={handleChangeVideo} accept="video/*" />
                <button onClick={handleUploadVideo}>Upload</button>
              <p>{percentVideo} "% done"</p>
           </div>

           <div>
              <p>select Pdf</p>
                <input type="file" onChange={handleChangePdf} accept="application/pdf" />
                <button onClick={handleUploadPdf}>Upload</button>
              <p>{percentPdf} "% done"</p>
           </div>

           <div>
              <p>select Document</p>
                <input type="file" onChange={handleChangeDoc} accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                <button onClick={handleUploadDoc}>Upload</button>
              <p>{percentDoc} "% done"</p>
           </div>


           <div>
              <p>select text file</p>
                <input type="file" onChange={handleChangeText} accept=".txt"/>
                <button onClick={handleUploadText}>Upload</button>
              <p>{percentText} "% done"</p>
           </div>
            
            <p>note:<br></br>after completion of file upload clik on add button</p>
        </div>
      </div>

     
    </div>
  )
}

export default AddVideo