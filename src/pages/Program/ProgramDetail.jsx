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
                <div className="d-flex pt-md-5 px-md-5">
                    <div className="program-intro col-md-6">
                        <div className="h3 mb-3">Recycling in partnership with {data.brand}</div>
                        <div className="p mb-5">Send your {data.brand} packaging back to {data.brand} factory to help it recycled in the correct way. Therefore, you become part on saving our nature. This program is only for {data.brand} packaging only.  </div>
                        <Button  text="Join Now"/>
                        
                    </div>
                    <div className="program-image col-md-6">
                        <img src={API_URL+data.image} width="100%"/>
                    </div>
                </div>
            </div>
        </div>

        // <div>ini program detail</div>
     );
}

const MapstatetoProps=({Auth})=>{
    console.log(Auth)
    return{
        Auth
    }

}
 
export default connect(MapstatetoProps)(ProgramDetail);