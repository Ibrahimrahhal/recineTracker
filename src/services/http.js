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



export function getAllEmployees(user){
    return axios.get(`${config.baseApi}GetAllEmployee`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}


export function saveEmployee(employeeToSave, user){
    return axios.post(`${config.baseApi}SaveEmployee`, employeeToSave, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}


export function getDomain(DomainName, user){
    return axios.get(`${config.baseApi}GetDomain`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        },
        params:{
            DomainName
        }
    });
}

export function getReportById(ReportID, user){
    return axios.get(`${config.baseApi}GetReportByID`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        },
        params:{
            ReportID
        }
    });
}

export function getAllCallsByReportID(ReportID, user){
    return axios.get(`${config.baseApi}GetAllCallsReport`,{
        headers:{
            Authorization:`Bearer ${user.token}`
        },
        params:{
            ReportID
        }
    }); 
}


export function saveCall(call, user){
    return axios.post(`${config.baseApi}SaveCallReport`, call, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}


export function saveReport(report, user){
    return axios.post(`${config.baseApi}SaveReport`, report, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
    
}


export function deleteUser(EmpID, user){
    return axios.post(`${config.baseApi}DeleteEmployee`, {EmpID}, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}


export function getReportCitations(ReportID, user){
    return new Promise(async (resolve, reject )=>{
        try{
            let report = await axios.get(`${config.baseApi}GetReportByID`,{
                headers:{
                    Authorization:`Bearer ${user.token}`
                },
                params:{
                    ReportID
                }
            }); 
    
            report = report.data.Result[0];
            let group = {};
            report.CitationIDs.forEach((one)=>{
                group[one.CitationsID] = one.Count; 
            });
            resolve(group);
        }catch(e){
            reject(e);
        }
    })
}


export function getReportClass(ReportID, user){
    return new Promise(async (resolve, reject )=>{
        try{
            debugger
            let report = await axios.get(`${config.baseApi}GetReportByID`,{
                headers:{
                    Authorization:`Bearer ${user.token}`
                },
                params:{
                    ReportID
                }
            }); 
    
            report = report.data.Result;
            resolve(report[0].CalssificationIDs);
        }catch(e){
            reject(e);
        }
    })
}


export function getReportArrests(ReportID, user){
    return new Promise(async (resolve, reject )=>{
        debugger
        try{
            let report = await axios.get(`${config.baseApi}GetReportByID`,{
                headers:{
                    Authorization:`Bearer ${user.token}`
                },
                params:{
                    ReportID
                }
            }); 
    
            report = report.data.Result[0];
            let group = {};
            report.ArresteIDs.forEach((one)=>{
                group[one.ArrestsID] = one.Count; 
            });
            resolve(group);
        }catch(e){
            reject(e);
        }
    })
}



export function saveReportClass(ReportID, classi  , user){
    return axios.post(`${config.baseApi}SaveReportClassification`, {
        ReportID,
        ClassificationIDs:JSON.stringify(classi)
    }, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}

export function saveReportArrests(ReportID, arrests  , user){
    let arrestIn=[];
    Object.keys(arrests).forEach((key)=>{
        arrestIn.push({
            ArrestID:key,
            Count:arrests[key]
        });
    })
    return axios.post(`${config.baseApi}SaveReportArrests`, {
        ReportID,
        ArrestsIDs:JSON.stringify(arrestIn)
    }, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}

export function saveReportCitations(ReportID, citations  , user){
    let citationsIn=[];
    Object.keys(citations).forEach((key)=>{
        citationsIn.push({
            CitationID:key,
            Count:citations[key]
        });
    })
    return axios.post(`${config.baseApi}SaveReportCitations`, {
        ReportID,
        CitationsIDs:JSON.stringify(citationsIn)
    }, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}


export function deleteCall(CallID,  user){
    return axios.post(`${config.baseApi}DeleteCallReport`,{
        CallID
    },{
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}

export function deleteReport(ReportID,  user){
    return axios.post(`${config.baseApi}DeleteReport`,{
        ReportID
    },{
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
}