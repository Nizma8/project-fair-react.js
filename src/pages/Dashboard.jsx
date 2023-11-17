import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Header from '../componnets/Header';
import MyProjects from '../componnets/MyProjects';
import Profile from '../componnets/Profile';


function Dashboard({insideDashboard}) {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(localStorage.getItem("existingUser")){
      setUsername(JSON.parse(localStorage.getItem("existingUser")).username)
    }
  },[])
  return (
   <>
   {/* nav */}
   <Header insideDashboard={true}/>
    <Container fluid>
      <Row style={{marginTop:'150px'}} className='mb-5' >
         <Col sm={12} md={8}>
          <h1>Welcome <span className='text-warning'>{username}</span></h1>
          {/* my project section */}
          <MyProjects/>
         </Col>
          <Col sm={12} md={4}>
            <Profile/>
            {/* profile section */}
          </Col>
      </Row>
    </Container>
   </>
  )
}

export default Dashboard