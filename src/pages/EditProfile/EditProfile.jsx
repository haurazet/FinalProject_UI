import React,{useState} from 'react';
import './EditProfile.css'
import Button from '../../components/button'
import {connect} from 'react-redux'
import {  MDBRow, MDBCol,MDBInput, MDBBtn,MDBAlert} from 'mdbreact';
import { Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import Axios from 'axios';
import { API_URL } from '../../support/Apiurl';
import {EditContactInformation,EditPasswordInformation} from '../../redux/actions/'

const EditProfile =({EditContactInformation,EditPasswordInformation})=>{

    useEffect(()=>{
        let id=Auth.id
        Axios.get(`${API_URL}/users/getalluserinfo/${id}`)
        .then((res)=>{
            console.log(res.data[0])
            setContactInformation({...contactInformation,
                first_name:res.data[0].first_name,
                last_name:res.data[0].last_name,
                username:res.data[0].username,
                address:res.data[0].address,
                city:res.data[0].city,
                state:res.data[0].state,
                zipcode:res.data[0].zipcode,
                phonenumber:res.data[0].phonenumber
            })
            setEditPassword({...editPassword,email:res.data[0].email})
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const [contactInformation,setContactInformation]=useState({
        first_name:'',
        last_name:'',
        username:'',
        address:'',
        city:'',
        state:'',
        zipcode:'',
        phonenumber:'',
    })

    const [editPassword,setEditPassword]=useState({
        email:'',
        currentpassword:'',
        newpassword:'',
        newconfirmpassword:''
    })
    
    //On Change Contact Information
    const changeHandlerCI=(e)=>{
        setContactInformation({...contactInformation,[e.target.name]:e.target.value})
        console.log(contactInformation)
    }

    //On Change Edit Password
    const changeHandlerEP=(e)=>{
        setEditPassword({...editPassword,[e.target.name]:e.target.value})
        console.log(editPassword)
    }

    const submitHandler=(e)=>{
        e.preventDefault()  
        e.target.className += " was-validated";
    }

    const Auth = useSelector(state=> state.Auth)


    return(
        
        <div className='editprofile-container'>

            {/* Jika belum verified tidak bisa edit profile */}
            {!Auth.isVerified===1?
            <Redirect to='/'></Redirect>
            :null
            }            

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
                         className="needs-validation"
                         onSubmit={submitHandler}
                         noValidate
                        >

                        {/* FIRST NAME */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                            <label
                                className="mt-4 text-lowercase "
                                style={{color:'#62accc'}}
                            >
                                First name
                            </label>
                            <input
                                value={contactInformation.first_name}
                                name="first_name"
                                onChange={changeHandlerCI}
                                type="text"
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
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Last name
                                </label>
                                <input
                                    value={contactInformation.last_name}
                                    name="last_name"
                                    onChange={changeHandlerCI}
                                    type="text"
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
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Username
                                </label>
                                <input
                                    value={contactInformation.username}
                                    name="username"
                                    onChange={changeHandlerCI}
                                    type="text"
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
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Address
                                </label>
                                <input
                                    value={contactInformation.address}
                                    name="address"
                                    onChange={changeHandlerCI}
                                    type="text"
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
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    City
                                </label>
                                <input
                                    value={contactInformation.city}
                                    onChange={changeHandlerCI}
                                    type="text"
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
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    State
                                </label>
                                <input
                                    value={contactInformation.state}
                                    onChange={changeHandlerCI}
                                    type="text"
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
                                    className="mt-2 text-lowercase "
                                    style={{color:'#62accc'}}
                                >
                                    Zip
                                </label>
                                <input
                                    value={contactInformation.zipcode}
                                    onChange={changeHandlerCI}
                                    type="text"
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
                                    className="mt-2 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Phone Number
                                </label>
                                <input
                                    value={contactInformation.phonenumber}
                                    name="phonenumber"
                                    onChange={changeHandlerCI}
                                    type="number"
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

                        <Button text='Edit Contact Information'/>

                        </form>

                        <div style={{fontSize:'20px', color:'#9ac84a',fontFamily:'Verdana', fontWeight:'bold',marginBottom:'20px', marginTop:'40px'}}>
                            Account Information
                        </div>

                        <form
                                className="needs-validation"
                                onSubmit={submitHandler}
                                noValidate
                        >
                        
                        {/* EMAIL */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    className="mt-3 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Email
                                </label>
                                <input
                                    value={editPassword.email}
                                    onChange={changeHandlerEP}
                                    type="email"
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
                                    className="mt-2 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Current Password
                                </label>

                                <input
                                    value={editPassword.password}
                                    onChange={changeHandlerEP}
                                    type="password"
                                    className= "form-control"
                                    name="currentpassword"
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    {editPassword.password?"Password must contain minimum eight characters, at least one letter and one number":"Please provide password."}
                                </div>
                            </MDBCol>
                        </MDBRow>

                        {/* NEW PASSWORD */}
                        <MDBRow>
                            <MDBCol md="8" className="mb-3">
                                <label
                                    className="mt-2 text-lowercase"
                                    style={{color:'#62accc'}}
                                >
                                    Confirm Password
                                </label>
                                <input
                                    value={editPassword.confirmpassword}
                                    onChange={changeHandlerEP}
                                    type="password"
                                    className='form-control'
                                    name="newpassword"
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
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
                                    value={editPassword.confirmpassword}
                                    onChange={changeHandlerEP}
                                    type="password"
                                    className='form-control mb-3'
                                    name="newconfirmpassword"
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                    required
                                />
                                <div className="invalid-tooltip">
                                    Please Provide New Confirm Password
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <div>
                            {Auth.errormes}
                        </div>
                        
                        <div><a className="go-back-link mb-2 pl-1" href="/forgotpassword">Forgot password?</a></div>
                        
                        <Button text='Edit Password' onClick={()=>EditPasswordInformation(editPassword.email,editPassword.currentpassword,editPassword.newpassword,editPassword.newconfirmpassword)}/>

                        </form>

                        <div style={{paddingBottom:'30px'}}></div>
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

export default connect(MapstatetoProps,{EditContactInformation,EditPasswordInformation})(EditProfile);