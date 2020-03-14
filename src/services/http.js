import config from '../config.js';
import axios from 'axios';
export const login = (username,password)=>{
        return axios.post(`${config.baseApi}Login`, {
            UserName:username,
            Password:password
        });
    };


export function getAllShifts(user){
        return axios.get(`${config.baseApi}GetAllReports`,{
            params:{
                EmpID:user.ID
            },
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        });
};

export function getAllClassifications(user){
        return axios.get(`${config.baseApi}GetAllClassifications`,{
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        });
}

export function getAllCitations(user){
    return axios.get(`${config.baseApi}GetAllCitations`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}

export function getAllArrests(user){
    return axios.get(`${config.baseApi}GetAllArrests`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}


