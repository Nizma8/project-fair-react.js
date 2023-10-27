import React from 'react'
import { Button, CardImg, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  return (
    <>
     <Card  className='shadow w-75 ms-5'>
      
      <Card.Body>
        <div className='w-100 d-flex justify-content-between'>
            
                <h2 className='' >My Profile </h2>
                <Button className=' '><i className='fa-solid fa-check  '></i></Button>
        </div>
      
      <div className='d-flex justify-content-center align-tems-center'>
          
          <label htmlFor="projects" className='text-center'>
                  <input type="file" id='projects'  style={{display:'none'}}/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyW_GApi4G1GBavUozBvFsrjhIHNXvtQU4o2P2RDmUFIxPAvaX48BvwK-l0UN_qQuO0w&usqp=CAU" alt="" width={"90%"} height={"150px"} />
              </label>
      </div>
       
      </Card.Body>
      <>
        <div className='mb-3  w-75 ms-5'  ><input type='text ' placeholder='Username' className='form-control'/></div>
        <div className='mb-3  w-75 ms-5'  ><input type='text ' placeholder='Github' className='form-control'/></div>
        <div className='mb-3  w-75 ms-5'  ><input type='text ' placeholder='Linkedln' className='form-control'/></div>
      </>
      
    </Card>
    </>
  )
}

export default Profile