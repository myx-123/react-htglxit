import axios from './index';  //进行了二次封装了

export const getList =(page,pageSize)=>{  //分页的接口
    return axios.get("/pagelist",{params:{page,pageSize}})
}

export const add =(name,age)=>{
    return axios.post("/add",{name,age})
}

export const remove=(id)=>{
    return axios.post("/del",{id});
}

export const login=(username,password)=>{
    return axios.post("/users/login",{username,password});
}

export const quit=()=>{
    return axios.post("/users/quit")
}
export const upload=(data)=>{
    return axios.post("/upload",data)
}