import React,{Component} from 'react'
import Loadable from 'react-loadable'
var Home=Loadable({  //异步加载组件
    loader:()=>import("../App"),
    loading:()=><div>loading.....</div>
})
var NotFound = Loadable({
    loader:()=>import("../components/notfound"),
    loading:()=><div>loading.....</div>
})
var DashBoard = Loadable({
    loader:()=>import("../components/dashBoard"),
    loading:()=><div>loading.....</div>
})
var List = Loadable({
    loader:()=>import("../components/list"),
    loading:()=><div>loading.....</div>
})
var Setting = Loadable({
    loader:()=>import("../components/setting"),
    loading:()=><div>loading.....</div>
})

var Add = Loadable({
    loader:()=>import("../components/add"),
    loading:()=><div>loading.....</div>
})
var Login = Loadable({
    loader:()=>import("../components/login"),
    loading:()=><div>loading.....</div>
})

var Notify = Loadable({
    loader:()=>import("../components/notify"),
    loading:()=><div>loading.....</div>
})

export const routes =[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/404',
        component:NotFound
    }
]

export const subRoutes =[
    {
        path:'/home/dashboard',
        component:DashBoard,
        roles:["admin","abc"]
    },
    {
        path:'/home/list',
        component:List,
        roles:["admin","abc"]
    },
    {
        path:'/home/notify',
        component:Notify,
        roles:["admin","abc"]
    },
    {
        path:'/home/setting',
        component:Setting,
        roles:["admin"]
    },
    {
        path:'/home/add',
        component:Add,
        roles:["admin"]
    }
]