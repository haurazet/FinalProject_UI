import React, { useState } from 'react';
import {  MDBRow, MDBCol} from 'mdbreact';
import Button from './../components/button'


const Register = () => {

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
        console.log(data)
    }

    const submitHandler=(e)=>{
        e.preventDefault()  
        // props.RegisterUser(data)
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
                                        First name <span>*</span>
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
                                    <div className="valid-tooltip">Looks good!</div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Last name <span>*</span>
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
                                        <div className="valid-tooltip">Looks good!</div>
                                    </MDBCol>
                                </MDBRow>
                                
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Username <span>*</span>
                                        </label>
                                        <input
                                            value={data.username}
                                            name="username"
                                            onChange={changeHandler}
                                            type="text"
                                            id="defaultFormRegisterEmailEx2"
                                            className="form-control"
                                            required
                                        />
                                        <div className="valid-tooltip">Looks good!</div>
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
                                        <div className="valid-tooltip">Looks good!</div>
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
                                        <div className="valid-tooltip">Looks good!</div>
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
                                        <div className="valid-tooltip">Looks good!</div>
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
                                        <div className="valid-tooltip">Looks good!</div>
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
                                        <div className="valid-tooltip">Looks good!</div>
                                    </MDBCol>
                                </MDBRow>
                                <div className="my-5 h4 form-header"> Account Information </div>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterConfirmEx3"
                                            className="grey-text"
                                        >
                                            Email <span>*</span>
                                        </label>
                                        <input
                                            value={data.email}
                                            onChange={changeHandler}
                                            type="email"
                                            id="defaultFormRegisterConfirmEx3"
                                            className="form-control"
                                            name="email"
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterConfirmEx3"
                                            className="grey-text"
                                        >
                                            Password <span>*</span>
                                        </label>
                                        <input
                                            value={data.password}
                                            onChange={changeHandler}
                                            type="password"
                                            id="defaultFormRegisterConfirmEx3"
                                            className="form-control"
                                            name="password"
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterConfirmEx3"
                                            className="grey-text"
                                        >
                                            Confirm Password <span>*</span>
                                        </label>
                                        <input
                                            value={data.confirmpassword}
                                            onChange={changeHandler}
                                            type="password"
                                            id="defaultFormRegisterConfirmEx3"
                                            className="form-control"
                                            name="confirmpassword"
                                        />
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
 
export default Register;

