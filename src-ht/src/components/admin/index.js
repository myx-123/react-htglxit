import React,{ Component } from 'react'
import { Layout, Menu,  Icon ,Badge} from 'antd';
import {withRouter} from 'react-router-dom'
import {quit} from '../../api/request'
import {  Dropdown } from 'antd';
import {connect} from 'react-redux';
const { Header, Content, Sider } = Layout;
var mapState =(state)=>{
  return {
    length:state.list.filter((item)=>!item.read).length
  }
}
@withRouter
@connect(mapState)
class Admin extends Component {
  
    go=({ item, key, keyPath, domEvent })=>{ 
      if(key==="/quit"){
          quit().then((res)=>{
            if(res.status===0){
               sessionStorage.clear();
               this.props.history.push("/")
            }
          })
      } 
      else{
        this.props.history.push(key);
      }   
       
    }
    showMenu=()=>{
      return   (
        <Menu>
          <Menu.Item onClick={this.go} key="/home/notify">
              <Badge dot={Boolean(this.props.length)}>通知中心</Badge>
          </Menu.Item>
          <Menu.Item onClick={this.go} key="/quit">
               退出
          </Menu.Item>
        </Menu>
      );
    }
    render(){
     
      return  <Layout>
    <Header className="header" style={{display:'flex',"justifyContent":"space-between"}}>
      <div style={{color:"#FFF"}}>
            xxx 管理系统
      </div>
      <div>
      <Dropdown overlay={this.showMenu()} >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <Badge count={this.props.length}>
      你好:{sessionStorage.getItem("username")} 
      </Badge>
    </a>
  </Dropdown>
  </div>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          selectedKeys={this.props.location.pathname}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="/home/dashboard" onClick={this.go}><Icon type="dashboard" />仪表盘</Menu.Item>
            <Menu.Item key="/home/list"  onClick={this.go}><Icon type="unordered-list" />列表管理</Menu.Item>
            <Menu.Item key="/home/setting"  onClick={this.go}><Icon type="setting" />设置</Menu.Item>
            <Menu.Item key="/quit"  onClick={this.go}><Icon type="close-circle" />退出</Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
       
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {this.props.children}
          
        </Content>
      </Layout>
    </Layout>
  </Layout>
    }
}

export default Admin