import React, { Fragment, useState } from 'react';
import './Home.css'
import {FaPlusCircle} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaRecycle} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import slide1 from './../images/slide1.PNG'
import slide2 from './../images/slide2.PNG'
import slide3 from './../images/slide3.PNG'
import {useSelector} from 'react-redux'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {UserSearch} from '../redux/actions/index'


const Home=(props)=>{

  //Onchange untuk Program
  const onChangeSearchProgram=(e)=>{
   
    setSearch({...search,[e.target.name]:e.target.value})
    console.log(search)
  }

  //Onclick untuk Search
  const onCLickSearch=()=>{
    // props.UserSearch(search.searchInputProgram)
    localStorage.setItem('search',search.searchInputProgram)
  }

  const Auth = useSelector(state=> state.Auth)

  const [search,setSearch] = useState({
    searchInputProgram:''
  })

    return(
        <div className='headerhome'>

        {/* Jika role=admin, ke home dashboard*/}
        {Auth.role===0?
            <Redirect to='/dashboard'></Redirect>
            :
            null
            }


            {/* HEADER IMG */}
            <div className='headerhomeimg'>

                <div className='headerhometext'>
                    Recycle everything with Recycly <span style={{fontSize:'40px'}}>®</span>
                </div>

                <div className='headersearch-container'>
                    
                    <Fragment>
                        <div className="headersearch-item.satu">
                            <label style={{color:'#7dbe4a', textAlign:"left", fontWeight:'bold', fontFamily:'Verdana'}}>PROGRAM</label>
                            <input type="text" name='searchInputProgram' onChange={onChangeSearchProgram} className="form-control form-control-md" style={{width:'300px'}}/>
                        </div>

                        <div className="headersearch-item.tiga">
                            <button className="buttonsearch">
                                <a href='/program' className='buttonsearch-text' onClick={onCLickSearch}>SEARCH</a>
                                
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
                        <div className='carousel-container'>
                            <div className='carousel-image'>
                                <img
                                src={slide1}
                                alt="First slide"
                                width='100%'
                                height='100%'
                                />
                            </div>

                            <div className='carouseltext-container'>
                                <p className='carouseltext-header'>STAY SAFE AND SUSTAINABLE WITH ZERO WASTE BOX™</p>
                                <p className='carouseltext-body'>Take care of the health and safety of your loved ones and leave the recycling to us!</p>
                                <a href='/program' style={{color:'inherit'}}><p style={{color:'white', fontSize:'15px', fontWeight:'bold', textAlign:'right', paddingRight:'30px'}}>SHOP NOW</p></a>
                            </div>
                        </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                        <div className='carousel-container'>
                            <div className='carousel-image'>
                                <img
                                src={slide2}
                                alt="First slide"
                                width='100%'
                                height='100%'
                                />
                            </div>

                            <div className='carouseltext-container'>
                                <p className='carouseltext-header'>TERRACYCLE GLOBAL FOUNDATION</p>
                                <p className='carouseltext-body'>The TerraCycle Global Foundation addresses the complex challenges of collecting and recycling waste in emerging countries. To achieve this end, the Foundation collaborates with local communities to offer innovative collection and recycling platforms for waste, with special emphasis on preventing plastic pollution from entering our oceans. The Foundation works with local government entities to install marine debris capture technology to intercept waste from rivers and smaller waterways before it flows into oceans.</p>    
                                <a href='https://www.terracyclefoundation.org/' style={{color:'inherit'}}><p style={{color:'white', fontSize:'15px', fontWeight:'bold', textAlign:'right', paddingRight:'30px'}}>LEARN MORE</p></a>
                            </div>
                        </div>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                        <div className='carousel-container'>
                            <div className='carousel-image'>
                                <img
                                src={slide3}
                                alt="First slide"
                                width='100%'
                                height='100%'
                                />
                            </div>

                            <div className='carouseltext-container'>
                                <p className='carouseltext-header'>PACK IT FOR RECYCLING</p>
                                <p className='carouseltext-body'>Ready, Set, Pack! We are awarding TerraCycle users who are preparing ahead of time to send in their recycling. Check the reward available!</p>
                                <a href='/reward' style={{color:'inherit'}}><p style={{color:'white', fontSize:'15px', fontWeight:'bold', textAlign:'right', paddingRight:'30px'}}>CHECK REWARD</p></a>
                            </div>
                        </div>
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

export default connect(null, {UserSearch})(Home);