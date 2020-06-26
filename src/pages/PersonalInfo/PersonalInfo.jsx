import React from 'react';
import './../PersonalInfo/PersonalInfo.css'

const PersonalInfo = () => {
    return ( 
        <div>
            {/* PROFILENAME HEADER */}
            <div className='profilename-container'>
                <div className='profilename-header'>
                    <img className='profilename-image' 
                    src={'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'} 
                    alt="Logo"
                    />
                    <span className='profilename-name'>angga wijaya</span>
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
                    Welcome, <span style={{color: '#b4c84a'}}>angga wijaya</span>
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
                            anggaa_wijaya@yahoo.com
                        </div>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            First name
                        </div>
                        <div className='showdata-emaildata' >
                            dewa gede
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            Last name
                        </div>
                        <div className='showdata-emaildata' >
                            angga wijaya
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-3'>
                            Nickname
                        </div>
                        <div className='showdata-emaildata' >
                            anggaawijaya
                        </div>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            Phone number
                        </div>
                        <div className='showdata-emaildata' >
                            6281236046472
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            State
                        </div>
                        <div className='showdata-emaildata' >
                            Connecticut
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-3'>
                            ZIP code
                        </div>
                        <div className='showdata-emaildata' >
                            80114
                        </div>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            City
                        </div>
                        <div className='showdata-emaildata' >
                            denpasar
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            Address
                        </div>
                        <div className='showdata-emaildata' >
                            Connecticut
                        </div>
                    </div>
                </div>

            </div>
        
        <div style={{borderTopStyle:'solid', borderTopWidth:'0.5px', borderTopColor:'#ececec', marginTop:'30px'}}></div>

        <div className='showdata-container'>
            <div className='showdata-title2'>
                    Additional information
            </div>

            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            Age
                        </div>
                        <div className='showdata-emaildata' >
                            25
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            Gender
                        </div>
                        <div className='showdata-emaildata' >
                            male
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-3'>
                            Referred by
                        </div>
                        <div className='showdata-emaildata' >
                            
                        </div>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div className='showdata-bodycontainer2'>
                        <div className='showdata-1'>
                            Organization Name
                        </div>
                        <div className='showdata-emaildata' >
                            
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-2'>
                            Organization Type
                        </div>
                        <div className='showdata-emaildata' >
                            Individual
                        </div>
                    </div>
                    <div className='showdata-bodycontainer'>
                        <div className='showdata-3'>
                            People Connecting
                        </div>
                        <div className='showdata-emaildata' >
                            200
                        </div>
                    </div>
                </div>
        
        <div style={{marginTop:'60px'}}></div>
            
        </div>

        </div>
     );
}
 
export default PersonalInfo;