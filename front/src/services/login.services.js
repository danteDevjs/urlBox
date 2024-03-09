import axios from "axios";

export async function verifyAccount(username, password){
    return await axios.get(`http://localhost:3002/api/v1/account/login/?username=${username}&password=${password}`, {withCredentials: true}); 

}

export async function create(data){
    return await axios.post(`http://localhost:3002/api/v1/user/save`, data); 

}