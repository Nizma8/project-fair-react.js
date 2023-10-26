import React from 'react'
import CardProjects from './CardProjects'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function HomeProjects() {
  return (
   <>
   <h1 className='text-center my-5'>Explore Our Projects</h1>
       <marquee scrollAmount={25}>
          <Row>
              <Col sm={12} md= {6} lg= {4}>
                  <CardProjects/>
              
              </Col>
             </Row>
             
       </marquee>

    <div className='text-end mt-5 me-2 fw-bolder'><Link to={'/projects'} style={{textDecoration:'none'}}>View More projects...</Link></div>

   </>
  )
}

export default HomeProjects