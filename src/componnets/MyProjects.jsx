import React, { useEffect, useState } from 'react'
import AddProject from "../componnets/AddProject"
import { userProjectApi } from '../services/allApi'
function MyProjects() {
    const [pro,setPro]=useState([])
    const [token,setToken]= useState("")

    useEffect(()=>{
        if( sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
            getUserProjects()
          }
    },[pro,token])
    console.log(token);
    const getUserProjects = async ()=>{
      
        const reqHeader ={
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
        const response =await  userProjectApi (reqHeader)
        setPro(response.data)
    }
    console.log(pro);
  return (
    <div className='card shadow p-3 mt-5 w-100'>
        <div className='d-flex '>
            <h3>My Projects</h3>
            <div className='ms-auto'>
                
                <AddProject/>
            </div>
        </div>

        <div className='mt-4'>
       {
        pro?.length>0?pro?.map(item=>{
            return(
                <div className="border d-flex align-items-center rounded p-2" key={item.id}>
                <h4>{item.title}</h4>
                <div className='ms-auto icons'>
                    <button className='btn'> <i className='fa-solid fa-edit ' ></i></button>
                    <a className='btn' href={`${item.github}`} target='_blank'> <i className='fa-brands fa-github '></i></a>
                    <button className='btn'> <i className='fa-solid fa-trash '></i></button>
                </div>

               
            </div>  
            )
        }):( <p className='text-danger '>No Projects Uploaded!!!</p>)
       }
           
           
        </div>
    </div>
  )
}

export default MyProjects