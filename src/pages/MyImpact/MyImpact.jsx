import React from 'react';
import '../MyImpact/MyImpact.css'
import {Table,thead,tr,td} from 'reactstrap'
import {useSelector} from 'react-redux'

const MyImpact = () => {

    const Auth = useSelector(state=> state.Auth)

    return ( 
        <div>
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

            {/* MYIMPACT MENU */}
            <div className='profilemenumi-container'>
                <div className='profilemenumi-satu'> 
                    <a href='/collection-programs' style={{color:'inherit'}}>COLLECTION PROGRAMS</a>
                </div>
                <div className='profilemenumi-dua'>
                    <a href='/my-impact' style={{color:'inherit'}}>MY IMPACT</a>
                </div>
                <div className='profilemenumi-tiga'>
                    <a href='/personal-info' style={{color:'inherit'}}>PERSONAL INFO</a>
                </div>
            </div>

             {/* MYIMPACT DATA  */}
             <div className='myimpactdata-container'>
                
                <div className='myimpactdata-text'>
                    <p>You have earned <span style={{fontWeight:'bold'}}>0 points ($0.00) </span>
                     and redeemed <span style={{fontWeight:'bold'}}>0 points ($0.00)</span> so far.</p>
                </div>

                <div style={{display:'flex',justifyContent:'center', paddingBottom:'20px'}}>
                    <button className="myimpactdata-button">
                            <a href='/reward' className='myimpactdata-buttontext'>REDEEM</a>
                    </button>
                </div>
                
                <div style={{paddingBottom:'40px'}}>
                    <Table striped>
                        <thead>
                            <tr>
                            <th>Free Recycling Program</th>
                            <th>Units Collected</th>
                            <th>Points Earned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gilette</td>
                                <td>2</td>
                                <td>20 Points</td>
                            </tr>
                            <tr>
                                <td>Dell</td>
                                <td>3</td>
                                <td>30 Points</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>


        </div>
     );
}
 
export default MyImpact;