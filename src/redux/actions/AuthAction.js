import { 
        USER_REGISTER_START, 
        USER_REGISTER_SUCCESS, 
        USER_REGISTER_FAILED,
        SEND_EMAIL_START,
        SEND_EMAIL_SUCCESS,
        VERIFY_START,
        VERIFY_SUCCESS,
        VERIFY_FAILED,
        USER_LOGIN_START, 
        USER_LOGIN_FAILED, 
        USER_LOGIN_SUCCESS,
        USER_LOGOUT,
        SEND_EMAIL_PASSWORD_START,
        SEND_EMAIL_PASSWORD_FAILED,
        SEND_EMAIL_PASSWORD_SUCCESS,
        RESET_PASSWORD_START,
        RESET_PASSWORD_FAILED,
        RESET_PASSWORD_SUCCESS,
        TOKEN_EXIST,
        TOKEN_NOT_EXIST
    } from './type'
import Axios from 'axios'
import { API_URL } from './../../support/Apiurl'
import querystring from 'query-string'


export const RegisterUser=(
    {
        firstname,
        lastname,
        username,
        address,
        city,
        state,
        zipcode,
        phonenumber,
        email,
        password,
        confirmpassword
    })=>{
    return(dispatch)=>{
        dispatch({type:USER_REGISTER_START})
        if(
            firstname===''||
            lastname===''||
            username===''||
            address===''||
            city===''||
            state===''||
            zipcode===''||
            phonenumber===''||
            password===''||
            email===''||
            confirmpassword===''
            ){
            dispatch({type:USER_REGISTER_FAILED,payload:{isComplete:false}})

        }else{
            if(password!==confirmpassword){
                dispatch({type:USER_REGISTER_FAILED,payload:{isConfirmTrue:false}})
            }else{
                var data={
                    firstname,
                    lastname,
                    username,
                    address,
                    city,
                    state,
                    zipcode,
                    phonenumber,
                    email,
                    password,
                    confirmpassword
                }
                Axios.post(`${API_URL}/users/register`,data)
                .then((res)=>{
                    if(res.data.status){
                        localStorage.setItem('token',res.data.token)
                        dispatch({type:USER_REGISTER_SUCCESS,payload:{email,username,userid:res.data.id}})
                    }else if(res.data.dupUsername){
                        dispatch({type:USER_REGISTER_FAILED,payload:{isUsername:false}})
                    }else{
                        dispatch({type:USER_REGISTER_FAILED,payload:{isEmail:false, isUsername:true}})
                    }
                }).catch((err)=>{
                    dispatch({type:USER_REGISTER_FAILED,payload:err.message})
                })
            }
        }
    }
}

export const ResendEmailVerification=({username,email,userid})=>{
    return(dispatch)=>{
        dispatch({type:SEND_EMAIL_START})
        var data ={
            username,
            email,
            userid
        }
        console.log('inidata:' + data)
        Axios.post(`${API_URL}/users/sendemailverified`,data)
        .then((res)=>{
            dispatch({type:SEND_EMAIL_SUCCESS})
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const Verify=(props)=>{
    return(dispatch)=>{
        dispatch({type:VERIFY_START})
        console.log(props.location.search)
        var obj=querystring.parse(props.location.search)
        console.log(obj)
        Axios.get(`${API_URL}/users/verified`,{
            headers:{
                'Authorization': `Bearer ${obj.token}`
            }
        }).then((res)=>{ //kalo token masih aktif
            console.log(res.data)
            dispatch({type:VERIFY_SUCCESS,payload:res.data})
        }).catch((err)=>{ //kalo token udah expired (status 401 ada di auth helper)
            console.log(err)
            dispatch({type:VERIFY_FAILED})
        })
    }
}

export const LoginUser=({username,password})=>{
    return(dispatch)=> {
        dispatch({type:USER_LOGIN_START})
        if(username===''||password===''){
            dispatch({type:USER_LOGIN_FAILED,payload:'Please fill username and password.'})
        }else{
            Axios.get(`${API_URL}/users/login`,{
                params:{
                    username:username,
                    password
                }
            }).then((res)=>{
                if(res.data.status){
                    localStorage.setItem('token',res.data.token)
                    localStorage.setItem('iduser',res.data.id)
                    dispatch({type:USER_LOGIN_SUCCESS, payload:res.data})
                }else{
                    if(res.data.incorrectUsername){
                        dispatch({type:USER_LOGIN_FAILED,payload:'Username does not exist.'})
                    }else{
                        dispatch({type:USER_LOGIN_FAILED,payload:'Password is incorrect.'})
                    }
                }
            }).catch((err)=>{
                console.log(err)
                dispatch({type:USER_LOGIN_FAILED, payload:err.message})
            })
        }
    }
}

export const SendEmailPassword=(email)=>{
    return(dispatch)=>{
        dispatch({type:SEND_EMAIL_PASSWORD_START})
        if(email===''){
            dispatch({type:SEND_EMAIL_PASSWORD_FAILED,payload:'Please enter email.'})
        }else{
            var data ={
                email
            }
            console.log('inidata:' + data)
            Axios.post(`${API_URL}/users/sendemailpassword`,data)
            .then((res)=>{
                if(res.data.status){
                    dispatch({type:SEND_EMAIL_PASSWORD_SUCCESS})
                }else{
                    dispatch({type:SEND_EMAIL_PASSWORD_FAILED, payload:'Email is not registered.'})
                }
            }).catch((err)=>{
                console.log(err)
                dispatch({type:SEND_EMAIL_PASSWORD_FAILED, payload:err.message})
            })
        }
    }
}

export const ResetPasswordAction=({props,data})=>{
    const { password, confirmpassword } = data
    return(dispatch)=>{
        dispatch({type:RESET_PASSWORD_START})
        if(password!==confirmpassword){
            dispatch({type:RESET_PASSWORD_FAILED,payload:{isConfirmTrue:false}})
        }else{
            // console.log(props.location.search)
            // console.log(password)
            var obj=querystring.parse(props.location.search)
            var databody={
                headers:{
                    'Authorization': `Bearer ${obj.token}`
                },
                params: {
                    password
                }
            }
            console.log(obj)
            Axios.get(`${API_URL}/users/resetpassword`,databody)
            .then((res)=>{ //kalo token masih aktif
                console.log(res.data)
                dispatch({type:RESET_PASSWORD_SUCCESS,payload:res.data})
            }).catch((err)=>{ //kalo token udah expired (status 401 ada di auth helper)
                console.log(err)
                dispatch({type:RESET_PASSWORD_FAILED,payload:{isResetLinkExpired:true}})
            })
        }
    }
}

export const CheckToken = (props) =>{
    return(dispatch)=>{
        var obj=querystring.parse(props.location.search)
        console.log(obj.token)
        if(obj.token){
            console.log('masuk if')
            dispatch({type:TOKEN_EXIST})
        }else{
            dispatch({type:TOKEN_NOT_EXIST})
        }
    }
}

export const KeepLogin=(data)=>{
    return{
        type:USER_LOGIN_SUCCESS,
        payload:data
    }
}

export const UserLogout=()=>{
    return{
        type:USER_LOGOUT,
    }
}

