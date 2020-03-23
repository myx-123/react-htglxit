const initialState = {
    loading:false,
    list: [
        {
            "id":1,
            title: 'Ant Design Title 1',
            read:false
        },
        {
            "id":2,
            title: 'Ant Design Title 2',
            read:true,
        },
        {
            "id":3,
            title: 'Ant Design Title 3',
            read:false,
        },
        {
            "id":4,
            title: 'Ant Design Title 4',
            read:true
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ALLMARK':  //标记所有已读
            var newState=JSON.parse(JSON.stringify(state));
            newState.list.forEach((item)=>{
                item.read=true;
            })
            return newState;
        case 'ALLMARKBYID':  //安装id标记为已读
            var newState=JSON.parse(JSON.stringify(state));
            newState.list.forEach((item)=>{
                if(item.id===action.id){
                    item.read=true;
                }
                    
            })
            return newState;
        case 'START':  //标记为开始读取
            return {...state,loading:true};
        case 'FINISH': //完成标记
            return {...state,loading:false}
        default:
            return state
    }
}
