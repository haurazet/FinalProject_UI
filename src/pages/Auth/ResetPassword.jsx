import React, { useState, useEffect } from 'react';
import Button from '../../components/button'
import { MDBRow, MDBCol} from 'mdbreact';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import { ResetPasswordAction, CheckToken } from '../../redux/actions'

const ResetPassword = (props) => {

    // useEffect(()=>{
    //     props.CheckToken(props)
    //     if(!props.Auth.isTokenExist){
    //         return <Redirect to='/notfound'/>
    //     }
    // },[])

    const [data,setdata]=useState({
        password:'',
        confirmpassword:''
    })

    const changeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data)
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        e.target.className += " was-validated";
        props.ResetPasswordAction({props,data})
    }

    const history = useHistory()

   


    return ( 
        <div>
            <div className='emailverify-container'>
                <div className="row emailverify-top"></div>
                <div className="row register-middle">
                    <div className="emailverify-box p-4 px-5 text-center" style={{position:'relative', top:-150, zIndex:2}}>
                        {props.Auth.isResetLinkExpired?
                            <div>
                                <div className="h4 mb-3 text-center">Link has expired!</div>
                                <div>Please send new reset password request</div>
                                <div className="text-center my-4"><Button text="Request Reset Password" onclick={()=> history.push('/forgotpassword')}/></div>
                                <div className="text-center"><a className="go-back-link" href="/">Go back to homepage</a></div>
                            </div>
                        :props.Auth.isResetSuccess?
                            <div>
                                <div className="h4 mb-3 text-center">Change password success!</div>
                                <div>Now, you can sign in with your new password</div>
                                <div className="text-center my-4"><Button text="Sign in" onclick={()=> history.push('/login')}/></div>
                                <div className="text-center"><a className="go-back-link" href="/">Go back to homepage</a></div>
                            </div>
                        :
                            <div>
                                <div className="h4 mb-3 text-center">Reset RECYC.LY password</div>
                                <div className="mb-3">Enter your new RECYC.LY password:</div>
                                <form
                                        className="needs-validation register"
                                        onSubmit={submitHandler}
                                        noValidate
                                        >
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx9"
                                            className="grey-text"
                                        >
                                            New Password
                                        </label>
                                        <input
                                            value={data.password}
                                            onChange={changeHandler}
                                            type="password"
                                            id="defaultFormRegisterNameEx9"
                                            className= "form-control"
                                            name="password"
                                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            {data.password?"Password must contain minimum eight characters, at least one letter and one number":"Please provide password."}
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx10"
                                            className="grey-text"
                                        >
                                            Confirm New Password
                                        </label>
                                        <input
                                            value={data.confirmpassword}
                                            onChange={changeHandler}
                                            type="password"
                                            id="defaultFormRegisterNameEx10"
                                            className={props.Auth.submitClicked?(props.Auth.isConfirmTrue?"form-control is-valid":"form-control is-invalid"):"form-control"}
                                            name="confirmpassword"
                                            // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            {!props.Auth.isConfirmTrue?"Password and confirm password do not match":"Please provide confirm password."}
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <div className="text-center my-4"><Button text={props.Auth.loading?'loading..':props.Auth.isResetSuccess?'Password Changed':"Change Password"} /></div>
                                </form>
                                <div className="text-center"><a className="go-back-link" href="/">Go back to homepage</a></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}

const MapstatetoProps=({Auth})=>{
    console.log(Auth)
    return{
        Auth
    }
}
 
export default connect(MapstatetoProps,{ResetPasswordAction, CheckToken})(ResetPassword);