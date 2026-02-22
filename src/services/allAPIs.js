import commonAPIs from "./commonAPIs";

import {serverURL} from "./serverURL"


export const userRegistration = async(reqboody)=>{
    return await commonAPIs('POST',`${serverURL}/register-user`,reqboody,{})
}


export const loginUser = async(reqboody)=>{
    return await commonAPIs('POST',`${serverURL}/user-login`,reqboody,{})
}