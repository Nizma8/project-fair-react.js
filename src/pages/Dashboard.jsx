import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Header from '../componnets/Header';
import MyProjects from '../componnets/MyProjects';
import Profile from '../componnets/Profile';


function Dashboard({insideDashboard}) {
  return (
   <>
   {/* nav */}
   <Header insideDashboard={true}/>
    <Container fluid>
      <Row style={{marginTop:'150px'}} className='mb-5' >
         <Col sm={12} md={8}>
          <h1>Welcome <span className='text-warning'>User</span></h1>
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