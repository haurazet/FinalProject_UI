import React,{useState,useEffect} from 'react';
import '../CollectionPrograms/CollectionPrograms.css'
import { useSelector } from 'react-redux'
import {Table} from 'reactstrap'
import { Redirect } from "react-router-dom";
import Axios from 'axios'
import {API_URL} from '../../support/Apiurl'

const CollectionPrograms = () => {
    
    useEffect(()=>{
        let id = Auth.id
        Axios.get(`${API_URL}/programs/gettransactionhistory/${id}`)
            .then((res)=>{
                setTransaction(res.data)
            }).catch((err)=>{
                console.log(err)
            })
    },[])

    const Auth = useSelector(state=> state.Auth)

    const [transactionHistory,setTransaction]=useState([])
    
    const renderTransaction=()=>{
        return transactionHistory.map((val,index)=>{
            return(                
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.status}</td>
                    <td>
                        {val.status==='completed'?
                        <span>Program Completed</span> 
                        :val.status==='canceled'?
                        <span>Program Canceled</span>                  
                        :val.status==='failed'?
                        <span>Program Failed</span>                 
                        :val.status==='cancelled_by_system'?
                        <span>Program Cancelled by System</span>                 
                        :
                        <button className="buttondetails">
                            <a href={`/transactiondetail/`+val.id} className='profilename-getstarted'>to Details</a>
                        </button>
                    }
                        
                    </td>
                </tr>
            )
        })
    }

    return ( 
        <div>

            {/* Jika tidak login dan role=admin, balik ke home */}
            {!Auth.isLogin||Auth.role===0?
            <Redirect to='/'></Redirect>
            :
            null
            }

            {/* PROFILENAME HEADER */}
            <div className='profilename-container'>
                <div className='profilename-header'>
                    <img className='profilename-image' 
                    src={'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'} 
                    alt="Logo"
                    />
                    <span className='profilename-name'>{Auth.username}</span>
                    <button className="buttonsearch">
                        <a href='/program' className='profilename-getstarted'>GET STARTED</a>
                    </button>
                </div>
            </div>

            {/* PROFILE MENU */}
            <div className='profilemenucp-container'>
                <div className='profilemenucp-satu'> 
                    <a href='/collection-programs' style={{color:'inherit'}}>COLLECTION PROGRAMS</a>
                </div>
                <div className='profilemenucp-dua'>
                    <a href='/my-impact' style={{color:'inherit'}}>MY IMPACT</a>
                </div>
                <div className='profilemenucp-tiga'>
                    <a href='/personal-info' style={{color:'inherit'}}>PERSONAL INFO</a>
                </div>
            </div>


            <div className='mycollectionprogram-container'>
                
                <div className='mycollectionprogram-text'>
                    <p>Program Transaction History</p>
                </div>
                
                <div style={{paddingBottom:'40px'}}>
                    <Table striped>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Program Name</th>
                            <th>Total Payment</th>
                            <th>Status</th>
                            <th>See Program Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTransaction()}
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
     );
}
 
export default CollectionPrograms;