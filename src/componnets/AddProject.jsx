import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
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
            <label htmlFor="projects" className='text-center'>
                <input type="file" id='projects'  style={{display:'none'}}/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2_0STiAZyZmqwMSyxAGQji_kToI47_EVjg&usqp=CAU" alt="" width={"100%"} height={"200px"} />
            </label>
        </Col>
        <Col sm={12} md={6}>
            <input className='form-control' placeholder='Project Name'  type="text" />
            <input className='form-control' placeholder='Website lin'  type="text" />
            <input className='form-control' placeholder='Language Used'  type="text" />
            <input className='form-control' placeholder='Github link'  type="text" />
        </Col>
        <Col md={12}>
        <input className='form-control' placeholder='Project Overview'  type="text" />

        </Col>
     </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary">Save</Button>
    </Modal.Footer>
  </Modal></>
  )
}

export default AddProject