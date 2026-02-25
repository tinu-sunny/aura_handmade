import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'
import { getUser } from '../../services/allAPIs'
import { useNavigate } from 'react-router-dom'


function AdminLandingPage() {

 const navigate = useNavigate()

 // state 
const [token ,setToken]= useState()

console.log(token);

  const getaccess = async()=>{

    try{
      const response = await getUser()
    console.log(response);
    if(response.status==200){
     
      setToken( sessionStorage.getItem('token'))
    }

    }catch(err){
      console.log(err.response);
      navigate('/')
      alert(err.response.data.message)
      
    }
    
    

    
  }

  
    useEffect(()=>{
      getaccess()
    },[])
  return (

    <>
 {token ?  <div>
      <AdminSidebar/>
      <div>AdminLandingPage</div>
  <AdminFooter/>
   </div>:""}

    </>
  )
}

export default AdminLandingPage