import React, { Fragment, useState } from 'react';
import './Home.css'
import {FaPlusCircle} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaRecycle} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";


const Home=()=>{

  //Onchange untuk Waste
  const onChangeSearchWaste=(e)=>{
    setSearch({...search,[e.target.name]:e.target.value})
    console.log(search)
  }

  //Onchange untuk Location
  const onChangeSearchLocation=(e)=>{
    setSearch({...search,[e.target.name]:e.target.value})
    console.log(search)
  }

  const [search,setSearch] = useState({
    searchInputWaste:'',
    searchInputLocation:''
  })

    return(
        <div className='headerhome'>

            {/* HEADER IMG */}
            <div className='headerhomeimg'>

                <div className='headerhometext'>
                    Recycle everything with Recycly <span style={{fontSize:'40px'}}>®</span>
                </div>

                <div className='headersearch-container'>
                    
                    <Fragment>
                        <div className="headersearch-item.satu">
                            <label style={{color:'#7dbe4a', textAlign:"left", fontWeight:'bolder'}}>WASTE STREAM</label>
                            <input type="text" name='searchInputWaste' onChange={onChangeSearchWaste} className="form-control form-control-md" style={{width:'300px'}}/>
                        </div>

                        <div className="headersearch-item.dua">
                            <label style={{color:'#7dbe4a', textAlign:"left", fontWeight:'bolder' }}>LOCATION</label>
                            <input type="text" name='searchInputLocation' onChange={onChangeSearchLocation} className="form-control form-control-md" style={{width:'300px'}}/>
                        </div>

                        <div className="headersearch-item.tiga">
                            <button className="buttonsearch">
                                SEARCH
                            </button>
                        </div>
                    </Fragment>
                </div>

                <div className='headerhometext2'>
                    <div className='headerhometext3'>
                            <a className='a' href='/program'>
                                See all
                                <p><FaPlusCircle/></p>
                            </a>
                    </div> 
                </div>

            </div>
        
            {/* BODY TEXT 1 */}
            <div className='headerbodysatu-container'>
                
                <div className='headerbodytext'>
                        Recycly's global impact
                </div>

                <div className='headerbodyicon-container'>
                    <div className='headerbodyicon-satu'>
                        <div>
                            <p><FaUsers style={{fontSize:'3em', color:'#9ac84a'}}/></p>
                            <p className='icontext'>PEOPLE RECYCLING</p>
                            <p className='icontext2'>202,831,611</p>
                        </div>
                    </div>

                    <div className='headerbodyicon-dua'>
                        <div>
                            <p><FaRecycle style={{fontSize:'3em', color:'#9ac84a'}}/></p>
                            <p className='icontext'>WASTE RECYCLED</p>
                            <p className='icontext2'>7,455,774</p>
                        </div>
                    </div>

                    <div className='headerbodyicon-tiga'>
                        <div>
                            <p><FaHeart style={{fontSize:'3em', color:'#9ac84a'}}/></p>
                            <p className='icontext'>MONEY FOR CHARITY</p>
                            <p className='icontext2'>Rp. 304,403,302</p>
                        </div>
                    </div>
                </div>
            </div>

        {/* BODY CAROUSEL 1 */}
        <div style={{width:'100%', paddingTop:'50px'}}>
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                        alt="First slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                        alt="Second slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                        alt="Third slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
    </MDBContainer>

        </div>

        {/* BODY TEXT 2 */}
        <div className='headerbody-container'>
                
                <div className='headerbodytext2'>
                        What is Recycly?
                </div>

                <div className='headerbodytext2-container'>
                    <div>
                        <div>
                            <p className='bodytext'>Recycly® is a social enterprise <span style={{fontWeight:'bold'}}>Eliminating the Idea of Waste®</span>.
                            In 20 countries, we tackle the issue from many angles. We have found that nearly everything we 
                            touch can be recycled and collect typically non-recyclable items through national, 
                            first-of-their-kind recycling platforms.</p>
                            <p className='bodytext'>Leading companies work with us to take hard-to-recycle materials from our programs, 
                            such as ocean plastic, and turn them into new products, and our new Loop platform aims 
                            to change the way the world shops with favorite brands in refillable packaging offered 
                            with convenience and style.</p>
                            <p className='bodytext'>With your help, we’ve diverted millions of pounds of valuable resources from 
                            landfills all over the world, and we’re just getting started.</p>
                            <p className='bodytext'><span style={{fontWeight:'bold'}}>#RecycleEverything</span> using the search bar above and tell us what you want to recycle.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
       

    )
}

export default Home;