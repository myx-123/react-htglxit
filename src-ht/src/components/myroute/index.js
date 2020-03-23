import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom';
export default class MyRoute extends Component {
    render() {
        let {path,component:Com,roles} = this.props;
        var permission = roles.some((item)=>item===sessionStorage.getItem("username"));
     
        return (
            <Route path={path} render={(props)=>{
                 return permission?<Com {...props} />:<div>您无权访问</div>
            }} />
        )
    }
}
