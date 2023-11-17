import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProject } from '../services/allApi';

function AddProject() {
    const [show, setShow] = useState(false);
    const [token,setToken]= useState("")
    const [projectDetails,setProjectDetails]=useState({
      title:"",
      languages:"",github:"",website:"",overview:"",image:"",userID:""
    })
    const [preview,setPreview]=useState("")


    useEffect(()=>{
      if(localStorage.getItem("existingUser") && sessionStorage.getItem("token")){
        setProjectDetails({...projectDetails,userID:JSON.parse(localStorage.getItem("existingUser"))._id})
        setToken(sessionStorage.getItem("token"))
      }
    },[])

    // useEffect(()=>{
    //   if(projectDetails.image){
    //     setPreview(URL.createObjectURL(projectDetails.image))
    //   }
    // },[projectDetails.image])
    console.log(preview);
    const handleClose = () => {
      setShow(false)
      setProjectDetails({
        title:"",
        languages:"",
        github:"",
        website:"",
        overview:"",
        image:"",
        userID:""
      })
      setPreview("")

    };
    
const handelSave=async (e)=>{
e.preventDefault()
const {title,languages,github,website,overview,image,userID} =projectDetails
if(!title || !languages || !github || !website || !overview || !image || !userID){
  toast.warning("please fill the form")
}
else{
  const reqBody = new FormData()
  reqBody.append("title",title)
  reqBody.append("languages",languages)
  reqBody.append("github",github)
  reqBody.append("website",website)
  reqBody.append("overview",overview)
  reqBody.append("projectImage",image)
  reqBody.append("userId",userID)
  const reqHeader ={
    "content-type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }

  const result = await addProject(reqBody,reqHeader)
  console.log(result);
  if(result.status === 200){
    toast.success(`project ${result?.data?.title} added succesfully`)
    setProjectDetails({
      title:"",
      languages:"",
      github:"",
      website:"",
      overview:"",
      image:"",
      // userID:""
    })
    handleClose()
  }else{
    toast.warning(`${result?.response?.data}`)
  }
}
    }
    const handleShow = () => setShow(true);
  return (
    <> <Button variant="primary" onClick={handleShow}>
   Add Project
  </Button>

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    size='lg'
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Project Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Row>
        <Col sm={12} md={6}>
        <label className='text-center' htmlFor="projectpic">

        <input id='projectpic'
          type="file" style={{display:'none'}} 
          onChange={(e)=>{
            const selectedFile = e.target.files[0]
            setProjectDetails({
              ...projectDetails,
              image: selectedFile,
            })
            setPreview(URL.createObjectURL(selectedFile))
          }
          }
          />

            <img src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2_0STiAZyZmqwMSyxAGQji_kToI47_EVjg&usqp=CAU"} alt="" width={"100%"} height={"200px"} />
            </label>
        </Col>
        <Col sm={12} md={6}>
            <input className='form-control' placeholder='Project Name'  type="text" value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} />
            <input className='form-control' placeholder='Website link'  type="text" value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} />
            <input className='form-control' placeholder='Language Used'  type="text" value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}  />
            <input className='form-control' placeholder='Github link'  type="text" value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} />
        </Col>
        <Col md={12}>
        <input className='form-control' placeholder='Project Overview'  type="text" value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}  />

        </Col>
     </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose} >
        Cancel
      </Button>
      <Button variant="primary" 
      onClick={handelSave}
      >
        Save
        </Button>
    </Modal.Footer>
  </Modal>
  <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
  </>
  )
}

export default AddProject