
import React, { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../../support/Apiurl';
import Numeral from 'numeral'
import Button from '../../components/button'
import {useDropzone} from 'react-dropzone';
import { BsCloudUpload } from 'react-icons/bs'

const TransactionDetail = ( props ) => {

    const [transaction, settransaction]=useState()
    const [notloading, setnotloading]=useState(false)
    const [paymentmethod, setpaymentmethod]=useState({})
    const [uploadpayment, setuploadpayment]=useState(false)

    useEffect(()=>{
        // ============ GET TRANSACTION DETAIL ============= //
        Axios.get(`${API_URL}/transaction/transactiondetail/${props.match.params.idtrans}`)
        .then ((res)=>{
            settransaction(res.data[0])
            // ============ GET PAYMENT METHOD DETAIL ============= //
            Axios.get(`${API_URL}/transaction/selectedpayment/${res.data[0].paymentmethod_id}`)
            .then((res1)=>{
                setpaymentmethod(res1.data[0])
                setnotloading(true)
            }).catch((err1)=>{
                console.log(err1)
            })
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const onUploadPayment=()=>{
        setuploadpayment(!uploadpayment)
        console.log(acceptedFiles)
    }

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    const files = acceptedFiles.map(file => (
        <span key={file.path}>
        {file.path} - {file.size} bytes
        </span>
    ));

    const onSubmitUpload=()=>{
        var formdata=new FormData()
        var obj = {
            id:props.match.params.idtrans
        }
        var token=localStorage.getItem('token')
        var Headers={
            headers:
            {
                'Content-Type':'multipart/form-data',
                'Authorization':`Bearer ${token}`
            },
        }
        formdata.append('image',acceptedFiles[0])
        formdata.append('data',JSON.stringify(obj))
        Axios.post(`${API_URL}/transaction/uploadpayment`,formdata,Headers)
        .then((res)=>{
            console.log(res.data)
            console.log("berhasil upload")
            Axios.get(`${API_URL}/transaction/transactiondetail/${props.match.params.idtrans}`)
            .then ((res)=>{
                settransaction(res.data[0])
            }).catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    return ( 
        <>
        {notloading?
            <div className='join-program-container'>
                <div className="row emailverify-top"></div>
                <div className="row register-middle">
                    <div className="join-program-box text-center w-50 w-sm-100" style={{position:'relative', top:-150, zIndex:2}}> 
                        <div className="join-program-title h4 mb-5"> Transaction Detail</div>
                        <div className="join-middle-container text-left">
                            <>
                            {transaction.status==='waiting_payment'?
                                <>
                                    {
                                        // ============ TRANSACTION STATUS WAITING FOR PAYMENT ============= //
                                    }
                                    <div className="mb-3 font-weight-bold">Status: Waiting for Payment</div>
                                    <div>Total Payment:</div>
                                    <div className="total-payment">{'IDR '+Numeral(transaction.total_payment).format(0.0)}</div>
                                    <div className="grey-text mb-4 font-smaller">Payment checked max. 24 hours after payment receipt uploaded.</div>
                                    <div className="payment-container mb-4 ml-3">
                                        <ol>
                                            <div> <li>Send your payment to our Recyc.ly account below:</li>
                                                <div className="payment-account-container ml-2 mb-2">
                                                    <div>{paymentmethod.name}</div>
                                                    <div>Account Number: {paymentmethod.number}</div>
                                                    <div>Account Name: PT. Recycly Waste Management</div>
                                                </div>
                                            </div>
                                            <div><li>Upload payment receipt before {transaction.create_time}</li></div>
                                            <div><li>For transaction safety, please do not share your payment receipt to others except upload it to Recyc.ly</li></div>
                                        </ol>
                                        <div className={uploadpayment?"payment-line":""}></div>
                                    </div>
                                    {
                                        uploadpayment?
                                        <div className="mx-5">
                                            <div className="text-center mb-3">Upload file</div>
                                                <section className="">
                                                    <div {...getRootProps({className: 'upload-container'})}>
                                                        <input {...getInputProps()} />
                                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                                        <div><BsCloudUpload size={'3em'}/></div>
                                                    </div>
                                                    <aside>
                                                        <div className="mt-3">File : {files}</div>
                                                    </aside>
                                                </section>
                                            <div className="text-center mt-3"><Button text="upload" onclick={onSubmitUpload}/></div>
                                            <div className="text-center mt-3"><Button text="cancel upload" onclick={onUploadPayment}/></div>
                                        </div>
                                        :
                                        <div className="text-center"><Button text="upload payment receipt" onclick={onUploadPayment}/></div>
                                    }
                                </>
                            : transaction.status==='waiting_verification'?
                                <>
                                {
                                    // ============ TRANSACTION STATUS WAITING FOR VERIFICATION ============= //
                                }
                                    <div className="mb-5 font-weight-bold">Status: Waiting for Payment Verification</div>
                                    <div className="text-center">Upload Payment Receipt Success!</div>
                                    <div className="grey-text mb-4 font-smaller text-center">Please wait for 24 hour for payment verification</div>
                                    <div className="text-center mt-5"><Button text="browse another program" onclick={onUploadPayment}/></div>
                                </>
                            :
                            null
                            }
                            </>
                        </div>
                    </div>
                </div>
            </div>
        :null
        }
        </>
     );
}
 
export default TransactionDetail;