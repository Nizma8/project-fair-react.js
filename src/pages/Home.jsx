import React from 'react'
import { Col, Row } from 'react-bootstrap'
import designation from "../Assets/Project-react.png"
import HomeProjects from '../componnets/HomeProjects'

function Home() {
  return (
   <>
        <div className='container-fluid rounded ' style={{width:"100%",height:'100vh',backgroundColor:'#6f9b3c'}}>
             <Row className='align-items-center p-5'>
                <Col sm= {12} md={6}>
                    <h1 style={{fontSize:'80px'
                    }} className='text-dark mt-3'>
                        <i class="fa-brands fa-stack-overflow  "></i> Project Fair
                    </h1>
                    <p className='fw-bold fs-4' style={{fontFamily:"Source Sans 3,san-serif"}}>Welcome to Project-Fair: Your Ultimate Project Management Hub! <br /></p>
                    <button className='btn fw-bold' style={{backgroundColor:'#f28500'}}>Getting Started <i className='fa-solid fa-right-long fa-beat ms-2'></i></button>
    
                </Col>
                <Col sm= {12} md={6} >
                    <img src={designation} alt="project-fair" className='img-fluid w-75' style={{marginTop:'100px',marginLeft:'150px'}} />
                </Col >
             </Row>
        </div>

        {/* glimpse of all projects */}

        <div className="all-projects">
            <HomeProjects/>
        </div>
   </>
  )
}

export default Home