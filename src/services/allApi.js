import { BASEURL } from "./baseUrl";
import { commonApi } from "./commonapi";

// register Api

export const registerApi = async (user)=>{
return  await commonApi("POST",`${BASEURL}/user/register`,user,"")
}

// login api

export const loginApi = async (user)=>{
    return await commonApi("POST",`${BASEURL}/user/login`,user,"")
}

// 
export const addProject = async (project,header)=>{
    return await commonApi("POST",`${BASEURL}/projects/add`,project,header)
}

// user/all-projects
export const userProjectApi = async (header)=>{
    return await commonApi("GET",`${BASEURL}/user/all-projects`,"",header)
}

// get home projects
export const homeProjects = async()=>{
    return await commonApi('GET',`${BASEURL}/projects/home/projects`,"","")
}

// all projects

export const allProjects = async (header)=>{
    return await commonApi("GET",`${BASEURL}/projects/all`,"",header)
}