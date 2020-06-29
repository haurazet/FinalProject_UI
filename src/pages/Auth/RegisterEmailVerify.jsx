import React from 'react';
import Button from '../../components/button'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ResendEmailVerification} from '../../redux/actions'

const RegisterEmailVerify = ({Auth, ResendEmailVerification}) => {
    var data ={
        email:Auth.email,
        username:Auth.username,
        userid:Auth.userid
    }
    // console.log(data)
    return ( 
        <div>
            {Auth.isRegister?
            // ========== FROM REGISTER PAGE WHEN REGISTER SUCCESS ============ //
                <div className='emailverify-container'>
                    <div className="row emailverify-top"></div>
                    <div className="row register-middle">
                        <div className="emailverify-box p-4 px-5" style={{position:'relative', top:-150, zIndex:2}}>
                            <div className="h4 mb-5 text-center">Activate your RECYC.LY account!</div>
                            <div>Congratulations! Your account has been created. Please check your mail box to activate your account.</div>
                            <div>If you can not find the email, click here to resend:</div>
                            <div className="text-center my-4"><Button text={Auth.loading?'loading..':Auth.isEmailSent?'Email Sent!':"Resend Email Verification"} onclick={()=>ResendEmailVerification(data)}/></div>
                            <div className="text-center"><a className="go-back-link" href="/">Go back to homepage</a></div>
                        </div>
                    </div>
                </div>
                :
                Auth.isVerified===0?
                // ========== FROM PROGRAM DETAIL PAGE WHEN JOIN PROGRAM ============ //
                <div className='emailverify-container'>
                    <div className="row emailverify-top"></div>
                    <div className="row register-middle">
                        <div className="emailverify-box p-4 px-5" style={{position:'relative', top:-150, zIndex:2}}>
                            <div className="h4 mb-5 text-center">Activate your RECYC.LY account!</div>
                            <div>To join program, you account has to be verified. Please click the link below to get your verification link.</div>
                            <div className="text-center my-4"><Button text={Auth.loading?'loading..':Auth.isEmailSent?'Email Sent!':"Send Email Verification"} onclick={()=>ResendEmailVerification(data)}/></div>
                            <div className="text-center"><a className="go-back-link" href="javascript:history.back()">Go back to Program Detail</a></div>
                        </div>
                    </div>
                </div>
                :
                <Redirect to='/notfound' />
            }
        </div>
     );
}

const MapstatetoProps=({Auth})=>{
    console.log(Auth)
    return{
        Auth
    }

}
 
export default connect(MapstatetoProps,{ResendEmailVerification})(RegisterEmailVerify);