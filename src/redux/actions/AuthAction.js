import { 
        USER_REGISTER_START, 
        USER_REGISTER_SUCCESS, 
        USER_REGISTER_FAILED,
        USER_LOGIN_START, 
        USER_LOGIN_FAILED, 
        USER_LOGIN_SUCCESS
    } from './type'
import Axios from 'axios'
import { API_URL } from '../../supports/Apiurl'


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
            dispatch({type:USER_REGISTER_FAILED,payload:'Please fill in all field'})

        }else{
            if(password!==confirmpassword){
                dispatch({type:USER_REGISTER_FAILED,payload:'Password and confirm password does not match'})
            }else{
                var hilangstring=password.replace(' ','')
                if (hilangstring.length>=6){
                    var huruf=false
                    var angka=false
                    for(var i=0;i<hilangstring.length;i++){
                        if(hilangstring[i]>=0){
                            angka=true
                        }else{
                            huruf=true
                        }
                    }
                    if (angka&&huruf){
                        //disini langsung post datanya
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
                                dispatch({type:USER_REGISTER_SUCCESS,payload:'Register successful!'})
                            }else{
                                dispatch({type:USER_REGISTER_FAILED,payload:'Username already exist'})
                            }
                        }).catch((err)=>{
                            dispatch({type:USER_REGISTER_FAILED,payload:err.message})
                        })
                    }else if (huruf){
                        dispatch({type:USER_REGISTER_FAILED,payload:'Password should contain number'})
                    }else{
                        dispatch({type:USER_REGISTER_FAILED,payload:'Password should contain alphabet'})
                    }
                }else{
                    dispatch({type:USER_REGISTER_FAILED,payload:'Password should have more than 6 characters'})
                }
            }
        }
    }
}


export const LoginUser=({username,password})=>{
    return(dispatch)=> {
        dispatch({type:USER_LOGIN_START})
        if(username===''||password===''){
            dispatch({type:USER_LOGIN_FAILED,payload:'username dan password belum diisi'})
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
                    dispatch({type:USER_LOGIN_FAILED,payload:'username atau password tidak terdaftar'})
                }
            }).catch((err)=>{
                console.log(err)
                dispatch({type:USER_LOGIN_FAILED, payload:err.message})
            })
        }
    }
}