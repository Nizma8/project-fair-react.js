import React, { useContext, useEffect, useState } from 'react'
import AddProject from "../componnets/AddProject"
import { removeProject, userProjectApi } from '../services/allApi'
import { addProjectResponseContext, ediptProjectResponseContext } from '../context/ContextShare'
import EditProject from './EditProject'

function MyProjects() {
    const {projectResponse}= useContext(addProjectResponseContext)
    const {editProjectResponse} = useContext(ediptProjectResponseContext)
    const [pro,setPro]=useState([])
    const [token, setToken] = useState(() => sessionStorage.getItem("token") || "");
    useEffect(() => {
        if (token) {
          getUserProjects();
        }
      }, [projectResponse,editProjectResponse]);

    const getUserProjects = async ()=>{
      
        const reqHeader ={
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
        const response =await  userProjectApi (reqHeader)
        setPro(response.data)
    }
    const projectRemove = async(id)=>{
        const reqHeader ={
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
        await removeProject(id,reqHeader)
         getUserProjects()

     

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
                <div className="border d-flex align-items-center rounded p-2 mb-2" key={item.id}>
                <h4>{item.title}</h4>
                <div className='ms-auto icons'>
                    <EditProject displayData ={item}/>
                    <a className='btn' href={`${item.github}`} target='_blank'> <i className='fa-brands fa-github '></i></a>
                    <button className='btn' onClick={()=>projectRemove(item._id)}> <i className='fa-solid fa-trash '></i></button>
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