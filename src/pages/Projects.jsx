import React from 'react'
import Header from '../componnets/Header'
import { Container, Form, InputGroup } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProjects from "../componnets/CardProjects"
function Projects() {


  return (
<>
{/* navbar */}
<Header/>
<div className="text-center "style={{marginTop:'100px'}}>
   <h1 className='mt-5 all' >All Projects</h1>
  <div className='d-flex mt-5 justify-content-center w-100'>
     <div className='d-flex w-50'>
     <InputGroup className="mb-3 border rounded">
        
        <Form.Control
          placeholder="Search By Technology"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className=' ps-3'
        />
        <InputGroup.Text id="basic-addon1" className='border  bg-white '><i className='fa-solid fa-magnifying-glass px-3'></i></InputGroup.Text>
      </InputGroup>
     </div>
  </div>

  <Container  fluid>
  <Row>
    <Col sm={12} md={6} lg={4}>
    <CardProjects/>
    </Col>
  </Row>
  </Container>
</div>
</>
  )
}

export default Projects