import React from 'react'
import Card from 'react-bootstrap/Card';
import projectScreenShot from "../Assets/E-commerce.png"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Collapse, Row } from 'react-bootstrap';
function CardProjects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
       <Card className='shadow p-4 btn mb-5 bg-black ms-4' onClick={handleShow}>
      <Card.Img variant="top" src={projectScreenShot} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
      </Card.Body>
    </Card>

   

      <Modal show={show} onHide={handleClose} size='lg' >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col lg={7}>
                <img src={projectScreenShot} alt="single project" height={"200px"} className='img-fluid' />
                </Col>
               <Col lg={5}>
               <h4>Project Title </h4>
               <p style={{margin:"0",padding:'0'}}>Project OverView</p>
               <p style={{margin:"0",padding:'0'}}>Language used : <span className='fw-bold'>HTML,CSS,REACT </span></p>
               </Col>
            </Row>
            
            <div className=' mt-2'><a href="https://github.com/Nizma8/E-commerce-react" target='_blank' className='btn me-5 btn-primary'> <i className=' fa-brands fa-github '></i> </a>
            <a href="https://e-commerce-react-ruddy.vercel.app" target='_blank' className='btn btn-primary '> <i className=' fa-solid fa-link '></i> </a>
            </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default CardProjects