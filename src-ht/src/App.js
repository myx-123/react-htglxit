import React from 'react';
import {subRoutes} from './router'
import {Route,Redirect,Switch} from 'react-router-dom'
import Admin from './components/admin'
import MyRoute from './components/myroute'
function App() {
  return (
    <div className="App">
           {sessionStorage.getItem("token")?
          <Admin>
              <Switch>
                {
                    subRoutes.map((item)=>{
                      return <MyRoute key={item.path} path={item.path}
                       component={item.component} roles={item.roles} />
                    })
                }
                {/* 设置默认进入的页面 */}
                <Redirect from="/home" to="/home/list" exact />
             </Switch>
          </Admin>:<Redirect to="/login" />}
    
    </div>
   
  );
}

export default App;
