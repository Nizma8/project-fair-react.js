import React from 'react'
import AddProject from "../componnets/AddProject"

function MyProjects() {
  return (
    <div className='card shadow p-3 mt-5 w-100'>
        <div className='d-flex '>
            <h3>My Projects</h3>
            <div className='ms-auto'>
                
                <AddProject/>
            </div>
        </div>

        <div className='mt-4'>
            <div className="border d-flex align-items-center rounded p-2">
                <h4>Project Title</h4>
                <div className='ms-auto icons'>
                    <button className='btn'> <i className='fa-solid fa-edit ' ></i></button>
                    <button className='btn'> <i className='fa-brands fa-github '></i></button>
                    <button className='btn'> <i className='fa-solid fa-trash '></i></button>
                </div>

               
            </div>

            <p className='text-danger '>No Projects Uploaded!!!</p>
        </div>
    </div>
  )
}

export default MyProjects