import { BASEURL } from "./baseUrl";
import { commonApi } from "./commonapi";

// register Api

export const registerApi = async (user)=>{
return  await commonApi("POST",`${BASEURL}/user/register`,user,"")
}