import {
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_START,
    USER_LOGIN_START, 
    USER_LOGIN_FAILED, 
    USER_LOGIN_SUCCESS
} from '../actions/type'

const INITIAL_STATE={
    username:'',
    password:'',
    id:0,
    role:'',
    loading:false,
    isLogin:false,
    errormes:'',
    successmes:'',
    token:'',
    isVerified:0,
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case USER_REGISTER_START:
            return{...state,loading:true}
        case USER_REGISTER_SUCCESS:
            return{...state,loading:false,successmes:action.payload}
        case USER_REGISTER_FAILED:
            return{...state,loading:false,errormes:action.payload}
        case USER_LOGIN_START:
            return{...state,loading:true}
        case USER_LOGIN_SUCCESS:
            return{...state,loading:false,...action.payload,islogin:true}
        case USER_LOGIN_FAILED:
            return{...state,loading:false,errormes:action.payload}
        case 'ErrorClear':
            return state
        default:
            return state
    }
}