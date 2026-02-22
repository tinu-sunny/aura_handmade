import axios from "axios";

const commonAPIs = async(httpMethod,url,reqbody,reqheader={})=>{

    const reqconfig={
        method:httpMethod,
        url,
        data:reqbody,
        headers:reqheader
    }

    return await axios(reqconfig).then(res=>{
        return res
    })

    .catch(err=>{
        throw err; 
    })
}

export default commonAPIs