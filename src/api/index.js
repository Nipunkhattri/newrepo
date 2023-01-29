import axios from 'axios'
const api= axios.create({baseURL:"http://3.110.158.88"});
// api.interceptors.request.use((req)=>{
//     if(localStorage.getItem("AtgToken")){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("AtgToken")).token}`
//     }
//     return req;
// })

export const signup = (authdata)=>api.post("/users/signup/",authdata);
export const login = (authdata)=>api.post("/users/login/",authdata);