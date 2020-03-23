import React, { Component } from 'react'
import {Table,Card,Modal,message} from 'antd'
import {getList,remove} from '../../api/request'
message.config({
  top: 100,
  duration: 2
  
});
export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0, //总的记录数
            id:-1, //要删除的记录id
            visible:false, //确认删除框的状态
            loading:false,
            pageSize:7,
            dataSource :[],  //数据源
              columns : [   //列的格式
                {
                  title: '姓名',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '年龄',
                  dataIndex: 'age',
                  key: 'age',
                },
                {
                  "title":"操作",
                  dataIndex:"operate",
                  key:'operate',
                  render:(text,record)=>{
                
                    return <button onClick={this.remove.bind(this,record.key)}>删除</button>
                  }
                }
              ]
        }
    }
    remove=(id)=>{  //只是显示确认删除对话框
      this.setState({
        id,
        visible:true
      })
    }
    componentDidMount(){
       this.getData(1,this.state.pageSize)  //获取第一页的数据
   }
   getData(page,pageSize){   //因为分页时要多次使用
    getList(page,pageSize).then((res)=>{
      var list= res.list.map((item)=>{
           return {
                key: item._id,
                name: item.name,
                age: item.age,
                
           }
       })
       this.setState({
           dataSource:list,
           count:res.count
       })
    })
   }
   //隐藏确认删除对话框
   handleCancel=()=>{
      this.setState({
        visible:false
      })
   }
   //确认删除的事件处理
   handleOk=()=>{
     this.setState({
       loading:true  //显示loading....
     },()=>{
       remove(this.state.id).then((res)=>{
          if(res.status===0){
             message.success("删除成功")
             this.getData(1,this.state.count);
          }
       }).finally(()=>{
           setTimeout(()=>{
           this.setState({
              visible:false,
              loading:false
            })
         },1500)
         
       })
     })
       
   }
   //到添加记录页面
   goAdd=()=>{
     this.props.history.push('/home/add')
   }
   getPageContent=(page,pageSize)=>{  // 参数是这个组件帮我传的。不用自己传
       this.getData(page,pageSize);
   }
    render() {
       
        let {dataSource,columns,count,pageSize,loading,visible}= this.state;
        return (
            <div>
               <Card bordered={false} title="学生列表" extra={<button onClick={this.goAdd}>添加</button>}>
                  <Table dataSource={dataSource} columns={columns}
                   pagination={{total:count,pageSize,onChange:this.getPageContent}} />;
               </Card>
               <Modal
                  maskClosable={false}
                  title="确认"
                  visible={visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  confirmLoading={loading}
                >
                    <p>您确认要删除吗</p>
                   
              </Modal>
            </div>
        )
    }
    componentWillUnmount(){  //解决异步数据回来时,组件却卸载了
        //重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
          return;
        };  
    }
}
