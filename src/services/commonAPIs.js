import axios from "axios";

const commonAPIs = async(httpMethod,url,reqbody,reqheader={})=>{

    const token =  sessionStorage.getItem('token')
console.log(token);

    const reqconfig={
        method:httpMethod,
        url,
        data:reqbody,
        headers:{
              Authorization: `Bearer ${token}`,
      ...reqheader
        }
    }

    return await axios(reqconfig).then(res=>{
        return res
    })

    .catch(err=>{
        throw err; 
        // return err
    })
}

export default commonAPIs