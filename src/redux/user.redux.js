import axios from 'axios'

const REGISTER_SUCCESS =  'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState ={
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}
//reducer
export  function user(state=initState,action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return{...state,msg:'',redirectTo:'',isAuth:true,...action.payload}
    }
}