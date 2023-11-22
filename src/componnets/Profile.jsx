import React, { useEffect, useState } from 'react'
import { Button, CardImg, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  const [useProfile,setUseProfile] =useState({
    _id:JSON.parse(localStorage.getItem("existingUser"))._id,
    username:JSON.parse(localStorage.getItem("existingUser")).username,
    email:JSON.parse(localStorage.getItem("existingUser")).email,
    password:JSON.parse(localStorage.getItem("existingUser")).password,
    github:"",
    linkedin:"",
    projectImage:""
  })
  const [preview,setPreview]=useState("")
  useEffect(()=>{
    if(useProfile.profileImage){
      setPreview(URL.createObjectURL(useProfile.projectImage))
    }
    else{
      setPreview("")
    }
  },[useProfile.projectImage])

  // const handleUpdate = async()=>{
  //    const {  _id,
  //    username,
  //    email,password,
  //    github,
  //    linkedin,
  //    projectImage } = useProfile

  //    if(!username || !languages || !github || !website || !overview || !image || !userID){
  //     toast.warning("please fill the form")
  //   }
  //   else{
  //     const reqBody = new FormData()
  //     reqBody.append("title",title)
  //     reqBody.append("languages",languages)
  //     reqBody.append("github",github)
  //     reqBody.append("website",website)
  //     reqBody.append("overview",overview)
  //     reqBody.append("projectImage",image)
  //     reqBody.append("userId",userID)
  //     const reqHeader ={
  //       "content-type":"multipart/form-data",
  //       "Authorization":`Bearer ${token}`
  //     }
    
  // }}
  return (
    <>
     <Card  className='shadow w-75 ms-5'>
      
      <Card.Body>
        <div className='w-100 d-flex justify-content-between'>
            
                <h2 className='' >My Profile </h2>
                <Button className=' ' 
                // onClick={handleUpdate}
                ><i className='fa-solid fa-check  '></i></Button>
        </div>
      
      <div className='d-flex justify-content-center align-tems-center'>
          
          <label htmlFor="projects" className='text-center'>
                  <input type="file" id='projects'  style={{display:'none'}} onChange={(e)=>{setUseProfile({...useProfile,projectImage:e.target.files[0]})}}
                  />
                  <img src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyW_GApi4G1GBavUozBvFsrjhIHNXvtQU4o2P2RDmUFIxPAvaX48BvwK-l0UN_qQuO0w&usqp=CAU"} alt="" width={"90%"} height={"150px"} />
              </label>
      </div>
       
      </Card.Body>
      <>
        <div className='mb-3  w-75 ms-5'  ><input type='text ' placeholder='Username'  value={useProfile.username} onChange={e=>setUseProfile({...useProfile})} /></div>
        <div className='mb-3  w-75 ms-5'  ><input type='text ' placeholder='Github'  value={useProfile.github} onChange={e=>setUseProfile({...useProfile})}    /></div>
        <div className='mb-3  w-75 ms-5'  ><input type='text ' placeholder='Linkedln'  value={useProfile.linkedin} onChange={e=>setUseProfile({...useProfile})} /></div>
      </>
      
    </Card>
    </>
  )
}

export default Profile