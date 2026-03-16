import commonAPIs from "./commonAPIs";

import {serverURL} from "./serverURL"


export const userRegistration = async(reqbody)=>{
    return await commonAPIs('POST',`${serverURL}/register-user`,reqbody,{})
}


export const loginUser = async(reqbody)=>{
    return await commonAPIs('POST',`${serverURL}/user-login`,reqbody,{})
}


export const googleLogin =  async(reqbody)=>{
    return await commonAPIs('POST',`${serverURL}/googleLogin`,reqbody,{})
}

export const getUser = async()=>{
    return await commonAPIs('GET',`${serverURL}/admin`,{},{})
}


// admin API calls

export const adminallusersview = async()=>{
    return await commonAPIs('GET',`${serverURL}/admin-all-customer-views`,{},{})
}