import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <><Navbar className=" w-100 position-fixed top-0  " style={{zIndex:"1",backgroundColor:'#5C9732'}}>
    <Container>
      <Navbar.Brand >
       <Link to={"/"} style={{textDecoration:'none',color:'white',fontSize:'40px'}}> <i className='fa-brands fa-stack-overflow fa-bounce'style={{color:'#6D3297'}}></i> Project fair</Link>
      </Navbar.Brand>
    </Container>
    </Navbar></>
  )
}

export default Header