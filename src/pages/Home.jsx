import React from 'react'
import { Col, Row } from 'react-bootstrap'
import designation from "../Assets/task-management.png"
import HomeProjects from '../componnets/HomeProjects'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
        <div className='container-fluid rounded bg-success' style={{width:"100%",height:'100vh',}}>
             <Row className='align-items-center p-5'>
                <Col sm= {12} md={6}>
                    <h1 style={{fontSize:'70px'
                    }} className=' mt-5 heading'>
                        <i className="fa-brands fa-stack-overflow  fa-bounce" style={{color:'#6D3297'}}></i> Project Fair
                    </h1>
                    <p className='fw-bold fs-4 pr' style={{fontFamily:"Source Sans 3,san-serif"}}>Welcome to Project-Fair: Your Ultimate Project Management Hub! <br /></p>
                    <p className=' pr mt-2 fw-bold  fs-6' style={{fontFamily:"Source Sans 3,san-serif"}}>Don't miss out on the opportunity to streamline your project management and connect with others who share your passions. Join Project-Fair today and become a part of this exciting community! Thank you for choosing Project-Fail, where every project is an opportunity to learn, grow, and succeed!</p>
                   {/* {
                    isLoggedIn?<Link to={"/dashboard"} className='btn btn-warning'> Manage ayour aprojects <i className='fa-solid fa-right-long fa-beat ms-2'></i>
                    </Link> :<Link to={"/login"} className='btn btn-warning'> Start to explore<i className='fa-solid fa-right-long fa-beat ms-2'></i>
                    </Link>
                   } */}
                    
                    <button className='btn fw-bold text-white mb-1' style={{backgroundColor:'#6D3297'}}>Getting Started <i className='fa-solid fa-right-long fa-beat ms-2'></i></button>
                    
                   
                </Col>
                <Col sm= {12} md={6} >
                    <img src={designation} alt="project-fair" className='img-fluid w-75' style={{marginTop:'100px',marginLeft:'150px'}} />
                </Col >
             </Row>
            
           <p className=' text-center fs-5  fw-bolder' >  <Link to={"/login"} style={{textDecoration:'none',color:'#6D3297'}}>Get Started </Link> |<Link to={"/projects"} style={{textDecoration:'none',color:'#6D3297'}} > Browse Projects</Link></p>
        </div>

        {/* glimpse of all projects */}

        <div className="all-projects">
            <HomeProjects/>
        </div>
   </>
  )
}

export default Home