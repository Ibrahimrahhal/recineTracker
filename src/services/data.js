export function getCitations(){
    try{
        return JSON.parse(localStorage.getItem("citations")) || [];
    }catch(e){
        return [];
    }
}


export function getArrests(){
    try{
        return JSON.parse(localStorage.getItem("arrests")) || [];
    }catch(e){
        return [];
    }
}


export function getClass(){
    try{
        return JSON.parse(localStorage.getItem("classifications")) || [];
    }catch(e){
        return [];
    }
}

export function getDomain(domainName){
    try{
        return JSON.parse(localStorage.getItem('domain'+domainName)).map((one)=>{return {label:one.DDesc, value:one.ID}}) || [];
    }catch(e){
        return [];
    }
}

export function setCitations(citations){
    localStorage.setItem('citations', JSON.stringify(citations));
}

export function setArrests(arrests){
    localStorage.setItem('arrests', JSON.stringify(arrests));
}

export function setClass(classifications){
    localStorage.setItem('classifications', JSON.stringify(classifications));
}

export function setDomain(domainName, value){
localStorage.setItem('domain'+domainName, JSON.stringify(value));
}

