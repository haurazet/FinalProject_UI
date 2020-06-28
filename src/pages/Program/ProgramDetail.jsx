import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import { API_URL } from '../../support/Apiurl';
import {connect} from 'react-redux'
import Button from '../../components/button'

const ProgramDetail = ( props ) => {

    const [data,setdata]=useState({})

    useEffect(()=>{ //component didmount
        console.log('ini useeffect')
        Axios.get(`${API_URL}/programs/programdetail/${props.match.params.idprog}`)
        .then((res)=>{
            console.log(res.data)
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    return ( 
        <div>
            <div className='program-detail-container'>
                <div className="program-detail-top text-white d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center h1">{data.name}</div>
                    <div className="text-center p">Join Program to send your {data.brand} packaging</div>
                </div>
                <div className="d-flex pt-5 mx-5  flex-wrap-reverse">
                    <div className="program-intro col-md-6">
                        <div className="h3 mb-3">Recycling in partnership with {data.brand}</div>
                        <div className="p mb-5">Send your {data.brand} packaging back to {data.brand} factory to help it recycled in the correct way. Therefore, you become part on saving our nature. This program is only for {data.brand} packaging only.  </div>
                        {
                            props.Auth.isLogin?
                            <Button text="Join Program" onclick={event => window.location.href=`/joinprogram/${data.id}`}/>:
                            <Button text="Sign Up to Join" onclick={event => window.location.href='/register'} />
                        }   
                        <div className="mt-5">One program is for one shipment only</div>
                    </div>
                    <div className="program-image col-md-6">
                        <img src={API_URL+data.image} width="100%"/>
                    </div>
                </div>
                <div className="program-detail-bottom mx-5 p-2">
                    <div className="h3 ">How it works</div>
                    <div className="my-5"> 1. Join Program 2. Pay Program Fee 3. Collect 5. Trash Picked Up</div>
                </div>
            </div>
        </div>
     );
}

const MapstatetoProps=({Auth})=>{
    console.log(Auth)
    return{
        Auth
    }

}
 
export default connect(MapstatetoProps)(ProgramDetail);