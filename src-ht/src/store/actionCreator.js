export default {
    allmark(){
        return {
            type:"ALLMARK"
        }
    },
    markById(id){
       return (dispatch)=>{
           dispatch({
               type:"START"  //loading true
           })
           setTimeout(()=>{
                dispatch({
                    type:"ALLMARKBYID",
                    id
                })
                dispatch({   //loading false
                    type:"FINISH"
                })
           },1500)
       }
    }
}