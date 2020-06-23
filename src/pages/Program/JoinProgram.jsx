import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import { API_URL } from '../../support/Apiurl';
import {connect} from 'react-redux'
import { MDBCol, MDBRow ,MDBBtn } from "mdbreact";
import Button from '../../components/button'
import { validate } from 'numeral';

const ProgramJoin = (props) => {

    const [data,setdata]=useState({})
    const [allpayment,setallpayment]=useState({})
    const [selectedpayment,setselectedpayment]=useState()

    useEffect(()=>{ //component didmount
        console.log('ini useeffect')
        Axios.get(`${API_URL}/programs/programdetail/${props.match.params.idprog}`)
        .then((res)=>{
            console.log(res.data)
            setdata(res.data)
            Axios.get(`${API_URL}/transaction/paymentmethod`)
            .then((res1)=>{
                setallpayment(res1.data)
                console.log(res1.data)
            }).catch((err1)=>{
                console.log(err1)
            })
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    const renderpayment=()=>{
        if(allpayment){
            return allpayment.map((val,index)=>{
                return(
                    <div key={index}>
                        <MDBBtn 
                            color="grey" 
                            size='sm' 
                            value={val.id} 
                            onClick={onPaymentClick}
                            active={parseInt(selectedpayment)===val.id}
                            >{val.name}</MDBBtn>
                    </div>
                )
            })
        }
    }

    const onPaymentClick=(e)=>{
        var payment=e.target.value
        setselectedpayment(payment)

    }

    return ( 

        <div className='emailverify-container'>
                <div className="row emailverify-top"></div>
                <div className="row register-middle">
                    <div className="emailverify-box p-4 px-5 text-center w-75" style={{position:'relative', top:-150, zIndex:2}}> 
                    <div className="h3"> Join {data.name} </div>
                    <div className="join-middle-container text-left">
                        <div className="join-section-container">
                            <div className="join-section-title">Pick-up Location</div>
                            <div className="join-address">ini address pickup</div>
                        </div>
                        <div className="join-section-container">
                            <div className="join-section-title">Program</div>
                            <div className="join-program-detail d-flex flex-wrap">
                                <div><img src={API_URL+data.image} height="50px"/></div>
                                <div>{data.name}</div>
                                 </div>
                        </div>
                        <div className="join-section-container">
                            <div className="join-section-title">Payment Method</div>
                            <div className="join-payment-method d-flex justify-content-start"> 
                            {renderpayment()}
                            </div>
                        </div>
                        <div className="join-section-container">
                            <div className="join-section-title">Total Payment</div>
                            <div className="join-total-payment"> {data.price}</div>
                        </div>
                        <div className="join-button text-right">  <Button text="checkout"/></div>
                       
                            
                        
                    </div>

                    </div>
                </div>
        </div>
        // <div>Ini join program</div>
     );
}
 
export default ProgramJoin;