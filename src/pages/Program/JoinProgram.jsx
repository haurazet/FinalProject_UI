import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import { API_URL } from '../../support/Apiurl';
import {connect} from 'react-redux'
import { MDBContainer, MDBInput } from "mdbreact";
import Button from '../../components/button'
// import { validate, add } from 'numeral';
import Numeral from 'numeral'
import { IoIosPin } from 'react-icons/io'
import {Redirect} from 'react-router-dom'

const ProgramJoin = (props) => {
    

    const [data,setdata]=useState({})
    const [allpayment,setallpayment]=useState({})
    const [selectedpayment,setselectedpayment]=useState()
    const [address,setaddress]=useState({})
    const [notloading,setnotloading]=useState(false)
    const [editaddress,seteditaddress]=useState(false)
    const [selectedaddress,setselectedaddress]=useState()

    useEffect(()=>{ 
        // ============ GET DETAIL PROGRAM ============= //
        Axios.get(`${API_URL}/programs/programdetail/${props.match.params.idprog}`) // 
        .then((res)=>{
            setdata(res.data)
            // ============ GET ALL PAYMENT METHOD ============= //
            Axios.get(`${API_URL}/transaction/paymentmethod`)
            .then((res1)=>{
                setallpayment(res1.data)
                // ============ GET ALL ADDRESS FROM USER ============= //
                Axios.get(`${API_URL}/transaction/getaddress/${props.Auth.id}`)
                .then((res2)=>{
                    setaddress(res2.data)
                    setselectedaddress(res2.data[0].id) // SET DEFAULT ADDRESS
                    setnotloading(true)
                }).catch((err2)=>{
                    console.log(err2)
                })
            }).catch((err1)=>{
                console.log(err1)
            })
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    // ============ RENDER ALL ADDRESS ============= //
    const renderaddress=()=>{
        console.log(selectedaddress)
        return address.map((val,index)=>{
            return(
                <div key={index} className="d-flex mb-3 flex-wrap flex-md-nowrap">
                    <MDBInput  style={{bottom:0, top:-10, margin:0, right:0, left:0}} value={val.id} onClick={(e)=>onAddressClick(e)} checked={selectedaddress===val.id} type="radio"/>
                    <div className="col-md-3 font-weight-bold">{val.name+' ('+val.phonenumber+')'}</div>
                    <div className="col-md-9">{val.address+', '+val.city+', '+val.state+', '+val.zipcode}</div>
                </div>
            )
        })
    }

    // ============ RENDER SELECTED ADDRESS ============= //
    const renderselectedaddress=()=>{
       for ( var i = 0; i < address.length; i++ ) {
           if ( address[i].id === selectedaddress){ // GET SELECTED ADDRESS DATA
                return(
                    <>
                    <div className="col-md-3 font-weight-bold p-0">{address[i].name+' ('+address[i].phonenumber+')'}</div>
                    <div className="col-md-8">{address[i].address+', '+address[i].city+', '+address[i].state+', '+address[i].zipcode}</div>
                    <div className="col-md-1"><a className="go-back-link" onClick={()=>seteditaddress(true)}>Change</a></div>
                    </>
                )
           }
       }
    }

    // ============ RENDER ALL PAYMENT ============= //
    const renderpayment=()=>{
            return allpayment.map((val,index)=>{
                return(
                    <div key={index}>
                        <button className={selectedpayment===val.id?"join-program-button active":"join-program-button"} 
                                value={val.id}
                                onClick={(e)=>onPaymentClick(e)}>{val.name}
                        </button>
                    </div>
                )
            })
    }

    const onPaymentClick=(e)=>{
        var payment=e.target.value
        setselectedpayment(parseInt(payment))
    }

    const onAddressClick=(e)=>{
        var address=e.target.value
        setselectedaddress(parseInt(address))
    }

    const onSubmitJoin=()=>{
        if(!editaddress&&selectedpayment){
            var datatransaction = {
                user_id:props.Auth.id,
                address_id:selectedaddress,
                program_id:parseInt(props.match.params.idprog) ,
                paymentmethod_id:selectedpayment,
                total_payment:data.price
            }
            Axios.post(`${API_URL}/transaction/join`,datatransaction)
            .then((res)=>{
                console.log(res.data.insertId)
                window.location.href=`/transactiondetail/${res.data.insertId}`
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    return ( 
        <div className='join-program-container'>

        { 
        props.Auth.isLogin && props.Auth.role == 1 ?
        null
        :
        <Redirect to='/'></Redirect>
        }

            <div className="row emailverify-top"></div>
            <div className="row register-middle">
                <div className="join-program-box text-center w-75" style={{position:'relative', top:-150, zIndex:2}}> 
                <div className="join-program-title h4 mb-5"> Join {data.name} </div>
                <div className="join-middle-container text-left">
                    <div className="join-section-container">
                        <div className="join-section-title"><IoIosPin/> Pick Up Location</div>
                        <div className="join-address">
                            {notloading?
                                (editaddress?
                                    // ============ USER CLICK CHANGE ADDRESS ============= //
                                    <div>
                                        <MDBContainer className=" ">
                                        {renderaddress()}
                                        </MDBContainer>
                                        <div className="ml-5 pl-1">
                                            <button className="join-program-button mt-3" onClick={()=>seteditaddress(false)}>Save</button>
                                        </div>
                                    </div>
                                    :
                                    // ============ USER CLICK SAVE ADDRESS/DEFAULT ADDRESS ============= //
                                    <div className="d-flex flex-wrap">
                                        {renderselectedaddress()}
                                    </div>
                                )
                                :
                                null
                            }

                        </div>
                        <div className="grey-text mt-5 font-smaller">Our team will pick up the trash 1-3 days after payment confirmed. Please make sure your location</div>
                    </div>
                    <div className="join-section-container">
                        <div className="join-section-title">Program</div>
                        <div className="join-program-detail d-flex flex-wrap ">
                            <div className="col-md-3 py-3"><img src={API_URL+data.image} height="100px"/></div>
                            <div className="col-md-4 align-self-center">1 x {data.name}</div>
                            <div className="col-md-5 align-self-center text-right">Get {data.point} RECYC.LY Point</div>
                        </div>
                    </div>
                    <div className="join-section-container">
                        <div className="join-section-title">Payment Method</div>
                        <div className="join-payment-method d-flex justify-content-start flex-wrap"> 
                            {notloading?
                            renderpayment():
                            null
                            }
                        </div>
                    </div>
                    <div className="join-section-container">
                        {/* <div className="join-section-title">Total Payment</div> */}
                        <div className="d-flex justify-content-end">
                            <div className="join-payment-container col-md-4 d-flex px-0">
                                <div className="col-md-6"> 
                                    <div>Pick Up Fee</div>
                                    <div>Program Fee</div>
                                </div>
                                <div className="col-md-6 text-right px-0"> 
                                    <div>FREE</div>
                                    <div>{'IDR '+Numeral(data.price).format(0.0)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="col-md-4 d-flex px-0 font-weight-bold ">
                                <div className="col-md-6"> 
                                    <div>Total</div>
                                </div>
                                <div className="col-md-6 text-right px-0"> 
                                    <div>{'IDR '+Numeral(data.price).format(0.0)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="join-button mt-5 text-right">  <Button text="join" onclick={!editaddress&&selectedpayment?onSubmitJoin:null}/></div> 
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
 
export default connect(MapstatetoProps) (ProgramJoin);