import React, {useState} from 'react';
import Button from '../../components/button'
import {connect} from 'react-redux'
import {SendEmailPassword} from '../../redux/actions'

const ForgotPassword = ({Auth,SendEmailPassword}) => {
    const [data,setdata]=useState({
        email:''
    })

    const changeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data)
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(data.email)
        SendEmailPassword(data.email)
    }

    return ( 
        <div>
            <div className='emailverify-container'>
                <div className="row emailverify-top"></div>
                <div className="row register-middle">
                    <div className="emailverify-box p-4 px-5 text-center" style={{position:'relative', top:-150, zIndex:2}}>
                        <div className="h4 mb-3 text-center">Reset RECYC.LY password</div>
                        <div className="mb-3">Please enter your RECYC.LY account email address below and we will send you the password reset link:</div>
                        <div className="">
                            <input
                                value={data.email}
                                name="email"
                                onChange={changeHandler}
                                type="email"
                            />
                        </div>
                        <div className="text-center pl-5 ml-3">
                            {
                                Auth.errormes?
                                    <div className="error-message mt-3">
                                        <div>{Auth.errormes}</div>
                                    </div>
                                :
                                null
                            }
                        </div>
                        <div className="text-center my-4"><Button text={Auth.loading?'loading..':Auth.isEmailPasswordSent?'Email Sent!':"Send Reset Password Link"} onclick={submitHandler}/></div>
                        <div className="text-center"><a className="go-back-link" href="/">Go back to homepage</a></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

const MapstatetoProps=({Auth})=>{
    return{
        Auth
    }
}
 
export default connect(MapstatetoProps,{SendEmailPassword})(ForgotPassword);