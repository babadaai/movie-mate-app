export const setToken=(key="acces_token",value)=>{
    return localStorage.setItem(key,JSON.stringify(value))
}
export const getToken=(key="access_token")=>{
            return localStorage.getItem(key)
}


export const removeToken=(key="access_token")=>{
    return localStorage.removeItem(key)
}