import React,{useState} from 'react';
import './EditProfile.css'
import Button from '../../components/button'
import {connect} from 'react-redux'
import {  MDBRow, MDBCol} from 'mdbreact';
import { Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'

const EditProfile =(props)=>{

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
        currentpassword:'',
        newpassword:'',
        newconfirmpassword:''
    })
    const changeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        // console.log(data)
    }

    const submitHandler=(e)=>{
        e.preventDefault()  
        e.target.className += " was-validated";

    }

    const Auth = useSelector(state=> state.Auth)

    return(

        <div className='editprofile-container'>

            {/* Jika tidak login dan role=admin, balik ke home */}
            {!Auth.isLogin||Auth.role===0?
            <Redirect to='/'></Redirect>
            :
            null
            }

            <div className='editprofile-headerbg'>
                <div className='editprofile-formcontainer'>
                    <div style={{paddingLeft:'8%',paddingTop:'10%'}}>
                        <div style={{fontSize:'20px', color:'#9ac84a',fontFamily:'Verdana', fontWeight:'bold'}}>
                            Contact Information
                        </div>
        
                        <form
                                className="needs-validation register"
                                onSubmit={submitHandler}
                                noValidate
                        >

                        {/* FIRST NAME */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="mt-4 text-lowercase "
                                style={{color:'#62accc'}}
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
                                // pattern="/^[A-Za-z]+$/"
                                required
                            />
                            <div className="invalid-tooltip">
                                    Please provide first name.
                            </div>
                            </MDBCol>
                        </MDBRow>

                        {/* LAST NAME */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx1"
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Last name
                                </label>
                                <input
                                    value={data.lastname}
                                    name="lastname"
                                    onChange={changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx1"
                                    className="form-control"
                                    // pattern = "[A-Za-z]"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please provide last name.
                                </div>
                                {/* <div className="valid-tooltip">Looks good!</div> */}
                            </MDBCol>
                        </MDBRow>
                        
                        {/* USERNAME */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx2"
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Username
                                </label>
                                <input
                                    value={data.username}
                                    name="username"
                                    onChange={changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx2"
                                    className='form-control'
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please Provide Username
                                    
                                </div>
                                {/* <div className="valid-tooltip">Looks good!</div> */}
                            </MDBCol>
                        </MDBRow>

                        {/* ADDRESS */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx3"
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Address
                                </label>
                                <input
                                    value={data.address}
                                    name="address"
                                    onChange={changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx3"
                                    className="form-control"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please provide address.
                                </div>
                                {/* <div className="valid-tooltip">Looks good!</div> */}
                            </MDBCol>
                        </MDBRow>

                        {/* CITY */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx4"
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    City
                                </label>
                                <input
                                    value={data.city}
                                    onChange={changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx4"
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

                        {/* STATE */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx5"
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    State
                                </label>
                                <input
                                    value={data.state}
                                    onChange={changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx5"
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

                        {/* ZIPCODE */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx6"
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Zip
                                </label>
                                <input
                                    value={data.zipcode}
                                    onChange={changeHandler}
                                    type="text"
                                    id="defaultFormRegisterNameEx6"
                                    className="form-control"
                                    name="zipcode"
                                    pattern="^[0-9]*$"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please provide a valid zip.
                                </div>
                                {/* <div className="valid-tooltip">Looks good!</div> */}
                            </MDBCol>
                        </MDBRow>

                        {/* PHONE NUMBER */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx7"
                                    className="mt-2 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Phone Number
                                </label>
                                <input
                                    value={data.phonenumber}
                                    name="phonenumber"
                                    onChange={changeHandler}
                                    type="number"
                                    id="defaultFormRegisterNameEx7"
                                    className="form-control mb-4"
                                    pattern="\+?([ -]?\d+)+|\(\d+\)([ -]\d+)"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please provide valid phonenumber. Example 62 811338429196
                                </div>
                                {/* <div className="valid-tooltip">Looks good!</div> */}
                            </MDBCol>
                        </MDBRow>

                        <div style={{fontSize:'20px', color:'#9ac84a',fontFamily:'Verdana', fontWeight:'bold',marginBottom:'20px'}}>
                            Account Information
                        </div>

                        {/* EMAIL */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx8"
                                    className="mt-3 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Email
                                </label>
                                <input
                                    value={data.email}
                                    onChange={changeHandler}
                                    type="email"
                                    id="defaultFormRegisterNameEx8"
                                    className='form-control'
                                    name="email"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please provide email
                                </div>
                            </MDBCol>
                        </MDBRow>

                        {/* CURRENT PASSWORD */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">

                                <label
                                    htmlFor="defaultFormRegisterNameEx9"
                                    className="mt-2 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Current Password
                                </label>

                                <input
                                    value={data.password}
                                    onChange={changeHandler}
                                    type="password"
                                    id="defaultFormRegisterNameEx9"
                                    className= "form-control"
                                    name="currentpassword"
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    {data.password?"Password must contain minimum eight characters, at least one letter and one number":"Please provide password."}
                                </div>
                            </MDBCol>
                        </MDBRow>

                        {/* NEW PASSWORD */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx10"
                                    className="mt-2 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Confirm Password
                                </label>
                                <input
                                    value={data.confirmpassword}
                                    onChange={changeHandler}
                                    type="password"
                                    id="defaultFormRegisterNameEx10"
                                    className='form-control'
                                    name="newpassword"
                                    // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please Provide New Password
                                </div>
                            </MDBCol>
                        </MDBRow>

                        {/* NEW CONFIRM PASSWORD */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx11"
                                    className="mt-2 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    New Password Confirmation
                                </label>
                                <input
                                    value={data.confirmpassword}
                                    onChange={changeHandler}
                                    type="password"
                                    id="defaultFormRegisterNameEx11"
                                    className='form-control mb-3'
                                    name="newconfirmpassword"
                                    // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please Provide New Confirm Password
                                </div>
                            </MDBCol>
                        </MDBRow>
                        
                        <Button text='Edit Profile'/>

                        <div style={{paddingBottom:'30px'}}></div>

                        </form>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

const MapstatetoProps=(state)=>{
    return{
        User:state.Auth
    }
}

export default connect(MapstatetoProps,{})(EditProfile);