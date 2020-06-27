import React,{useEffect,useState} from 'react';
import './../PersonalInfo/PersonalInfo.css'
import Axios from 'axios'
import {API_URL} from './../../support/Apiurl'
import {useSelector} from 'react-redux'
import { Redirect } from "react-router-dom";

const PersonalInfo = (props) => {

    useEffect(()=>{
        let id = Auth.id
        Axios.get(`${API_URL}/users/getaddress/${id}`)
            .then((res)=>{
                setData(res.data[0])
            }).catch((err)=>{
                console.log(err)
            })
    },[])

    const [data,setData]=useState([])

    const Auth = useSelector(state=> state.Auth)
    
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

            {/* PERSONALINFO MENU */}
            <div className='profilemenupi-container'>
                <div className='profilemenumi-satu'> 
                    <a href='/collection-programs' style={{color:'inherit'}}>COLLECTION PROGRAMS</a>
                </div>
                <div className='profilemenupi-dua'>
                    <a href='/my-impact' style={{color:'inherit'}}>MY IMPACT</a>
                </div>
                <div className='profilemenupi-tiga'>
                    <a href='/personal-info' style={{color:'inherit'}}>PERSONAL INFO</a>
                </div>
            </div>

            {/* PERSONALINFO EDIT DATA  */}
            <div className='editprofile-container'>
            
                <div className='editprofile-text'>
                    Welcome, <span style={{color: '#b4c84a'}}>{Auth.username}</span>
                </div>
                <div>
                    <button className="editprofile-button">
                            <a href='/edit-profile' className='editprofile-buttontext'>EDIT YOUR PROFILE</a>
                    </button>
                </div>
            </div>

            {/* PERSONALINFO SHOW DATA */}
            <div className='showdata-container'>
                <div className='showdata-title'>
                    Contact information
                </div>
                
                <div>
                    <div className='showdata-bodycontainer1'>
                        <div className='showdata-email'>
                            Email address
                        </div>
                        <div className='showdata-emaildata' >
                            {Auth.email}
                        </div>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            First name
                        </div>
                        <div className='showdata-emaildata' >
                            {data.first_name}
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            Last name
                        </div>
                        <div className='showdata-emaildata' >
                            {data.last_name}
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-3'>
                            Nickname
                        </div>
                        <div className='showdata-emaildata' >
                            {Auth.username}
                        </div>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            Phone number
                        </div>
                        <div className='showdata-emaildata' >
                            {data.phonenumber}
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            State
                        </div>
                        <div className='showdata-emaildata' >
                            {data.state}
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-3'>
                            ZIP code
                        </div>
                        <div className='showdata-emaildata' >
                            {data.zipcode}
                        </div>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            City
                        </div>
                        <div className='showdata-emaildata' >
                            {data.city}
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            Address
                        </div>
                        <div className='showdata-emaildata' >
                            {data.address}
                        </div>
                    </div>
                </div>

            </div>
        
        <div style={{borderTopStyle:'solid', borderTopWidth:'0.5px', borderTopColor:'#ececec', marginTop:'30px'}}></div>

        <div style={{marginTop:'60px'}}></div>
            
        </div>


     );
}
 
export default PersonalInfo;