import React, { useState } from 'react';
import {  MDBRow, MDBCol} from 'mdbreact';
import Button from './../components/button'
import {connect} from 'react-redux'
import {RegisterUser} from './../redux/actions'


const Register = ({RegisterUser, isPassword, submitClicked, isConfirmTrue, errormes, Auth}) => {

    const [data,setdata]=useState({
        firstname:'',
        lastname:'',
        username:'',
        address:'',
        city:'',
        state:'',
        zipcode:'',
        phonenumber:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        // console.log(data)
    }

    const submitHandler=(e)=>{
        e.preventDefault()  
        e.target.className += " was-validated";
        RegisterUser(data)
    }

    return ( 
            <div className='register-container'>
                <div className="row register-top"></div>
                <div className="row register-middle">
                    <div className="col-md-7 form-container">
                        <div className="form-relative bg-white" style={{position:'relative', top:-300, zIndex:2}}>
                            <div className="mb-5 h2"> Sign Up </div>
                            <form
                                className="needs-validation register"
                                onSubmit={submitHandler}
                                noValidate
                                >
                                <div className="mb-5 h4 form-header"> Contact Information </div>
                                
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                    <label
                                        htmlFor="defaultFormRegisterNameEx"
                                        className="grey-text"
                                    >
                                        First name
                                    </label>
                                    <input
                                        value={data.firstname}
                                        name="firstname"
                                        onChange={changeHandler}
                                        type="text"
                                        id="defaultFormRegisterNameEx"
                                        className="form-control"
                                        required
                                    />
                                    <div className="invalid-tooltip">
                                            Please provide first name.
                                    </div>
                                    {/* <div className="valid-tooltip"></div> */}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            value={data.lastname}
                                            name="lastname"
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterEmailEx2"
                                            className="form-control"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            Please provide last name.
                                        </div>
                                        {/* <div className="valid-tooltip">Looks good!</div> */}
                                    </MDBCol>
                                </MDBRow>
                                
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Username
                                        </label>
                                        <input
                                            value={data.username}
                                            name="username"
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterEmailEx2"
                                            className={Auth.submitClicked?(Auth.isUsername?"form-control is-valid":"form-control is-invalid"):"form-control"}
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            {Auth.isUsername?"Please provide username.":"Username is not available."}
                                            
                                        </div>
                                        {/* <div className="valid-tooltip">Looks good!</div> */}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Address
                                        </label>
                                        <input
                                            value={data.address}
                                            name="address"
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterEmailEx2"
                                            className="form-control"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            Please provide address.
                                        </div>
                                        {/* <div className="valid-tooltip">Looks good!</div> */}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                            className="grey-text"
                                        >
                                            City
                                        </label>
                                        <input
                                            value={data.city}
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="city"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            Please provide a valid city.
                                        </div>
                                        {/* <div className="valid-tooltip">Looks good!</div> */}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                            className="grey-text"
                                        >
                                            State
                                        </label>
                                        <input
                                            value={data.state}
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="state"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            Please provide a valid state.
                                        </div>
                                        {/* <div className="valid-tooltip">Looks good!</div> */}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                            className="grey-text"
                                        >
                                            Zip
                                        </label>
                                        <input
                                            value={data.zipcode}
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="zipcode"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                        {/* <div className="valid-tooltip">Looks good!</div> */}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            value={data.phonenumber}
                                            name="phonenumber"
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterEmailEx2"
                                            className="form-control"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            Please provide phonenumber.
                                        </div>
                                        {/* <div className="valid-tooltip">Looks good!</div> */}
                                    </MDBCol>
                                </MDBRow>
                                <div className="my-5 h4 form-header"> Account Information </div>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterConfirmEx3"
                                            className="grey-text"
                                        >
                                            Email
                                        </label>
                                        <input
                                            value={data.email}
                                            onChange={changeHandler}
                                            type="email"
                                            id="defaultFormRegisterConfirmEx3"
                                            className="form-control"
                                            name="email"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            Please provide valid email.
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterConfirmEx3"
                                            className="grey-text"
                                        >
                                            Password
                                        </label>
                                        <input
                                            value={data.password}
                                            onChange={changeHandler}
                                            type="password"
                                            id="defaultFormRegisterConfirmEx3"
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
                                            htmlFor="defaultFormRegisterConfirmEx3"
                                            className="grey-text"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            value={data.confirmpassword}
                                            onChange={changeHandler}
                                            type="password"
                                            id="defaultFormRegisterConfirmEx3"
                                            className={Auth.submitClicked?(Auth.isConfirmTrue?"form-control is-valid":"form-control is-invalid"):"form-control"}
                                            name="confirmpassword"
                                            // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                            required
                                        />
                                        <div className="invalid-tooltip">
                                            {!Auth.isConfirmTrue?"Password and confirm password do not match":"Please provide confirm password."}
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <Button text='Sign Up'/>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-5 py-5 px-2 register-right-container">
                        <div>Already have an Account?</div>
                        <div className="my-5"><Button text='Sign in here'/></div>
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

export default connect(MapstatetoProps,{RegisterUser})(Register);

