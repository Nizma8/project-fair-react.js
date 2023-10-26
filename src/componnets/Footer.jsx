import React from 'react'
import { Link } from 'react-router-dom'
import {Row,Col,Form,Button} from 'react-bootstrap'


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column border bg-dark' style={{width:'100%',height:'300px'}}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
        <div className='website d-flex flex-column text-secondary' style={{width:'400px'}}>
            <h3 style={{height:'50px'}}> <i className="fa-brands fa-stack-overflow text-info fa-bounce me-2"></i>Project-Fair</h3>
        Bootstrap
Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
Code licensed MIT, docs CC BY 3.0.
Currently v5.3.2.
        </div>
        <div className='d-flex flex-column'>
            <h3 style={{height:'50px'}} className='text-secondary'>Links</h3>
            <Link to={"/ "} style={{textDecoration:"none"}} className='text-info'>Home</Link>
            <Link to={"/login "} style={{textDecoration:"none"}} className='text-info'>Login</Link>
            <Link to={"/register"} style={{textDecoration:"none"}} className='text-info' >Register</Link>
        </div>
        <div className='d-flex flex-column'>
        <h3 style={{height:'50px'}} className='text-secondary'>Guides</h3>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:"none"}} className='text-info'>React</Link>
        <Link to={'https://bootswatch.com/'}style={{textDecoration:"none"}} className='text-info'>React Bootstrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:"none"}} className='text-info'>Routing</Link>
        </div>
        <div>
              <h6 className='fw-bolder text-secondary'>Subscribe to Newsletter</h6>
              <Form className='d-inline'>
                <Row>
               < Col lg={8}>
                    <Form.Group controlId="email" className='bg-white px-5 rounded'>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Col>
                  <Col >
                    <Button className='bg-info text-light' type="submit" >
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
        -
    </div>
    <p className='mt-5 text-secondary'>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>

</div>

  )
}

export default Footer