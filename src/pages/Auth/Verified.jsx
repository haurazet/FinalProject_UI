import React, { useEffect } from 'react';
import Button from '../../components/button'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Verify} from '../../redux/actions'

const Verified = (props) => {

    useEffect(()=>{
        props.Verify(props)
    },[])

    const history = useHistory()

    return ( 
        <div>
            <div className='emailverify-container'>
                <div className="row emailverify-top"></div>
                <div className="row register-middle">
                    <div className="emailverify-box p-4 px-5" style={{position:'relative', top:-150, zIndex:2}}>
                    {props.Auth.loading?
                        <div>Loading..</div>
                    :
                    props.Auth.isVerifySuccess?
                        <div>
                            <div className="h4 mb-5 text-center">Account Verification Success!</div>
                            <div>Congratulations. Your account has been verified. Go back to homepage to start your RECYC.LY program!</div>
                            <div className="text-center mt-3">Happy <span className='font-weight-bold'>RECYC.LY</span>ing ^‿^</div>
                            <div className="text-center mt-4"><Button text="Go To Homepage" onclick={()=> history.push('/')}/></div>
                        </div>
                    :
                        <div>
                            <div className="h4 mb-5 text-center">Link has expired!</div>
                            <div>Please login to get your new email verification link.</div>
                            <div className="text-center my-4"><Button text="Login" onclick={()=> history.push('/login')}/></div>
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
    return{
        Auth
    }

}
 
export default connect(MapstatetoProps,{Verify})(Verified);