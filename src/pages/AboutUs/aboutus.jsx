import React from 'react';
import './aboutus.css'

const AboutUs = () => {
    return ( 
        <div className='headerbody-container'> 
                <div className='headerbodytext2'>
                    About Recycly<span style={{fontSize:'20px'}}>®</span>
                </div>

                <div className='headerbodytext2-container'>
                    <div>
                        <div>
                            <p className='bodytext'>Recycly® is a social enterprise on a mission to eliminate the idea of waste..</p>
                            <p className='bodytext'><span style={{fontWeight:'bold'}}>Recycly</span> offers a range of national, 
                            easy-to-use recycling platforms allowing everyone to <span style={{fontWeight:'bold'}}>#RecycleEverything</span>,
                            as well as Loop, a sustainable shopping experience moving the world away from single-use packaging. See below to get started.</p>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default AboutUs;