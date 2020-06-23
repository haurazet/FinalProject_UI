import React, { useState } from 'react';
import {  MDBRow, MDBCol} from 'mdbreact';
import Button from '../../components/button'
import { connect } from 'react-redux'
import { LoginUser } from '../../redux/actions'
import { Redirect } from 'react-router-dom'


const Login = ({LoginUser, Auth}) => {

    const [data,setdata]=useState({
        username:'',
        password:'',
    })
    const changeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        // console.log(data)
    }

    const submitHandler=(e)=>{
        e.preventDefault()  
        LoginUser(data)
    }

    if(Auth.isLogin){
        return <Redirect to='/' />
    }

    // const history = useHistory()

    return ( 
            <div className='register-container'>
                <div className="row register-top"></div>
                <div className="row register-middle">
                    <div className="col-md-7 form-container">
                        <div className="form-relative bg-white" style={{position:'relative', top:-400, zIndex:2}}>
                            <div className="mb-5 h2"> Sign In </div>
                            <form
                                className="needs-validation register"
                                onSubmit={submitHandler}
                                noValidate
                                >
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx2"
                                            className="grey-text"
                                        >
                                            Username
                                        </label>
                                        <input
                                            value={data.username}
                                            name="username"
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterNameEx2"
                                            className={Auth.submitClicked?(Auth.isUsername?"form-control is-valid":"form-control is-invalid"):"form-control"}
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            {Auth.isUsername?"Please provide username.":"Username is not available."}
                                            
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx9"
                                            className="grey-text"
                                        >
                                            Password
                                        </label>
                                        <input
                                            value={data.password}
                                            onChange={changeHandler}
                                            type="password"
                                            id="defaultFormRegisterNameEx9"
                                            className= "form-control"
                                            name="password"
                                            // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            "Please provide password."
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                {
                                    Auth.errormes?
                                        <div className="error-message">
                                            <div>{Auth.errormes}</div>
                                        </div>
                                    :
                                    null

                                }
                                <div><a className="go-back-link mb-2 pl-1" href="/forgotpassword">Forgot password?</a></div>
                                <Button text='Sign In'/>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-5 py-5 px-2 register-right-container">
                        <div>Does not have an Account?</div>
                        <div className="my-5"><Button text='Sign up here' onclick={event => window.location.href='/register'}/></div>
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

export default connect(MapstatetoProps,{LoginUser})(Login);

