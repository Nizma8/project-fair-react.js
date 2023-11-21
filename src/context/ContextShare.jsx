import React, { createContext, useState } from 'react'

export const addProjectResponseContext = createContext()
export const ediptProjectResponseContext = createContext()

function ContextShare({children}) {
    const [projectResponse ,setProjectResponse] =useState({})
    const [editProjectResponse,setEditProjectResponse]=useState({})
  return (
    <>
    <addProjectResponseContext.Provider value={{projectResponse,setProjectResponse}}> 
    <ediptProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>{children}</ediptProjectResponseContext.Provider>
    </addProjectResponseContext.Provider>
    </>
  )
}

export default ContextShare