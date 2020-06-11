import React, { useState } from 'react';
import { MDBInput, MDBAlert } from 'mdbreact';


const Register = () => {

    return ( 
        <div>
            <div className='row justify-content-center loginbackground'>
            <div className="col-md-6 m-0 p-0">
                <div className='d-flex justify-content-end align-items-center  ' style={{height:'97vh'}}>
                    <form style={{width:'70%'}}  className='whitebackground py-4 px-5 pb-2 subtleshadow'>
                        <p className="h4 text-center mb-5 text-uppercase" style={{fontWeight:'200'}}>Sign up </p>
                        <div className="grey-text">
                            <MDBInput 
                                className='backgroundinput' 
                                label="Type username" 
                                // onChange={dataOnChange} 
                                name='username' 
                                icon="user" 
                                group 
                                type="text" 
                                validate 
                                // value={data.username} 
                                /> 
                            <MDBInput 
                                className='backgroundinput' 
                                label="Type email" 
                                // onChange={dataOnChange} 
                                name='email' 
                                icon="envelope" 
                                group 
                                type="text" 
                                validate 
                                // value={data.email} 
                                /> 
                            <MDBInput 
                                className='backgroundinput'  
                                iconClass='fa'  
                                label="Type password" 
                                // onChange={dataOnChange} 
                                name="password" 
                                icon="lock" 
                                group 
                                type="password" 
                                validate 
                                // value={data.password}
                                />
                            <MDBInput 
                                className='backgroundinput'  
                                iconClass='fa'  
                                label="Confim password" 
                                // onChange={dataOnChange} 
                                name="confirmpassword" 
                                icon="lock" 
                                group 
                                type="password" 
                                validate 
                                // value={data.confirmpassword}
                                />
                        </div>
                        {/* <div>
                        {
                            props.errormes?
                            <MDBAlert color="danger" >
                                <div style={{fontSize:'14px'}}>
                                    {props.errormes} <span className='float-right hovererr' onClick={()=>props.errormessageclear()}>X</span>
                                </div>
                            </MDBAlert>
                            :
                            null
                        }
                        {
                            props.successmes?
                            <MDBAlert color="success" >
                                <div style={{fontSize:'14px'}}>
                                <div>Congratulation!</div>
                                <div>Your account has been successfully registered.</div>
                                <div>Now, <a style={{color:'blue', fontWeight:"300"}} onClick={event => window.location.href='/login'}>Sign In</a> to enjoy shopping :)</div>
                                  
                                </div>
                            </MDBAlert>
                            :
                            null
                        }
                        </div> */}
                        <div className="text-center mb-3">
                            <button className="btn loginbtn" type='button' style={{backgroundColor:"#3790a0"}} type="submit" 
                            // disabled={props.loading}
                            >Sign up</button>
                        </div>
                        <p className="loginfooter"> Have an account already? <a className="signuplink" 
                        // onClick={event => window.location.href='/login'}
                        >Sign in here</a> </p>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 m-0 p-0">
                <div className='d-flex justify-content-center align-items-center m-0 p-0' style={{height:'97vh'}}></div>
            </div>
        </div>
        </div>
     );
}
 
export default Register;