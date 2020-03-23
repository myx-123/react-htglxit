import React from 'react';

var Hoc=(jf)=> (Com)=>{
    return class extends React.Component {
        render(){
            if(jf>10)
                 return  <><Com {...this.props} /> 2020 &copy; qf</>
            else{
                return <div>积分不足</div>
            }
        }
    }
}

export default Hoc;