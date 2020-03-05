import config from '../config.js';
import axios from 'axios';
export const login = (username,password)=>{
        return axios.post(`${config.baseApi}Login`, {
            UserName:username,
            Password:password
        });
    };


export const getAllShifts = (user)=>{
        return axios.get(`${config.baseApi}GetAllReports`,{
            params:{
                EmpID:user.ID
            },
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        });
}


