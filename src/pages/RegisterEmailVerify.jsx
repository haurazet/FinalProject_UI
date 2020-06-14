import React from 'react';
import Button from './../components/button'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const RegisterEmailVerify = ({Auth}) => {
    return ( 
        <div>
            {Auth.isRegister?
                <div className='emailverify-container'>
                    <div className="row emailverify-top"></div>
                    <div className="row register-middle">
                        <div className="emailverify-box p-4 px-5" style={{position:'relative', top:-150, zIndex:2}}>
                            <div className="h4 mb-5 text-center">Activate your RECYCLY account!</div>
                            <div>Congratulations! Your account has been created. Please check your mail box to activate your account.</div>
                            <div>If you can not find the email, click here to resend:</div>
                            <div className="text-center my-4"><Button text="Resend Email Verification"/></div>
                            <div className="text-center"><a>Go back to homepage</a></div>
                        </div>
                    </div>
                </div>
                :
                <Redirect to='/notfound' />
                // null
            }
        </div>
     );
}

const MapstatetoProps=({Auth})=>{
    return{
        Auth
    }

}
 
export default connect(MapstatetoProps)(RegisterEmailVerify);