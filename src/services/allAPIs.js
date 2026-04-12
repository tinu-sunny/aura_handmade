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

export const addnewproducts = async(reqbody,reqheader)=>{
    return await commonAPIs('POST',`${serverURL}/add-new-products`,reqbody,reqheader)
}

export const savedraftproducts = async(reqbody,reqheader)=>{
    return await commonAPIs('POST',`${serverURL}/save-draft-products`,reqbody,reqheader)
}

export const deletedraftproducts = async(reqbody,reqheader)=>{
    return await commonAPIs('POST',`${serverURL}/delete-draft-products`,reqbody,reqheader)
}

export const ViewAllProductsAdmin = async()=>{
    return await commonAPIs('POST',`${serverURL}/admin-view-products`,{},{})
}


export const deleteProductsAdmin = async(reqbody)=>{
    return await commonAPIs('POST',`${serverURL}/admin-delete-products`,reqbody,{})
}
export const viewProductById = async(id)=>{
    return await commonAPIs('POST',`${serverURL}/view-products/${id}`,{},{})
}

export const updateProduct = async(reqbody)=>{
    return await commonAPIs('PUT',`${serverURL}/update-product`,reqbody,{})
}