import React from 'react';
import '../CollectionPrograms/CollectionPrograms.css'
import { useSelector } from 'react-redux'

import { Redirect } from "react-router-dom";

const CollectionPrograms = () => {
    
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
        </div>
     );
}
 
export default CollectionPrograms;