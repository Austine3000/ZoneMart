import axios from "axios";


export function userSignUpRequest(userinfo){

  
    
    return dispatch =>{
          
        return axios.post("http://192.168.8.103:9090/api/v1/register", userinfo);
        
    }


}