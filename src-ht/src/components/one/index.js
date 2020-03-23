import React,{ Component } from 'react'
import Hoc from '../hoc'

 class One extends Component {
     componentDidMount(){
         fetch("/api/topics").then((res)=>res.json()).then((res)=>{
             console.log(res)
         })
     }
    render() {
        return (
            <div>
                One
            </div>
        )
    }
}

export default Hoc(22)(One);
