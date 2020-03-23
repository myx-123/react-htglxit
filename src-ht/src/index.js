import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {routes} from './router'  //引入第一级路由的数组
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store'
// import App from "./App"
// import NotFound from './components/notfound'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
    

ReactDOM.render(
    <Provider store={store}>
     <Router>
        <Switch>
            {
                routes.map((item)=>{
                    return <Route key={item.path} path={item.path} component={item.component} />
                })
            }
            <Redirect from="/" to="/home" exact />
            <Redirect to="/404" />
        </Switch>
    </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
