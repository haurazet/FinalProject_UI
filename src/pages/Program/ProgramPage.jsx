import React, { useState, useEffect } from 'react';
import Button from '../../components/button'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow ,MDBBtn } from "mdbreact";
import Axios from 'axios';
import { API_URL } from './../../support/Apiurl'
import { Link } from 'react-router-dom'
import Numeral from 'numeral'

const ProgramPage = (props) => {

    const [program,setprogram]= useState({})
    const [isloading, setisloading] = useState(true)
    const [page, setpage] = useState(6)
    const [totalprogram, settotalprogram] = useState(0)
    

    useEffect(()=>{ //component didmount
        Axios.get(`${API_URL}/programs/getprogram`)
        .then((res)=>{
            setprogram(res.data)
            setisloading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const renderpagination=()=>{
        console.log('masuk pagination')
        var totalpage = Math.ceil(this.state.totalproduct/8)
        var arr=[]
        for ( var i = 0; i < totalpage; i++){
            arr.push(i)
        }
        return arr.map((val,index)=>{
            return(
                <div key={index}>
                    <MDBPageItem active={this.state.page/8===val} >
                        <MDBPageNav onClick={()=>this.getpaginationdata(val)}>{val+1}</MDBPageNav>
                    </MDBPageItem>
                </div>
            )
        })
    }

    const renderPrograms=()=>{
        console.log(program)
        return program.map((val,index)=>{
            return(
                <div key={index} className="p-4 col-md-4 " >
                    <Link>
                        <Card>
                            <div className="program-picture p-3 row align-items-center">
                                <img src={API_URL+val.image}  width="100%" height="100%"></img>
                            </div>
                            <CardBody>
                                <CardTitle className="text-center program-card-bottom h3">{val.name}</CardTitle>
                                <div className="d-flex justify-content-between">
                                    <div className="program-price col-3 text-center">{'IDR '+Numeral(val.price).format(0.0)} </div>
                                    <div className="program-reward col-6 text-center"> Get {val.point} RECYC.LY {val.point>1?"points":"point"}</div>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            )
        })
    }

    return ( 
        <div>
            {/* ================= TOP ================= */}
            <div className="program-top-container">
                <div className="program-top-title h4">Browse Recycling Program</div>
                <div className="program-top-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div className="program-bottom-container ">
                {/* ================= SEARCH ================= */}
                <div className="searchbar-container d-flex justify-content-center align-items-center">
                    <div className="input-group md-form form-sm form-2 w-50 ">
                        <input className="form-control my-0 py-2 lime-border" type="text" placeholder="Search" aria-label="Search"/>
                        <div >
                            <Button text="search"/>
                            {/* <span className="input-group-text text-white" id="basic-text1">Search</span> */}
                        </div>
                    </div>
                </div>
                {/* ================= PROGRAM ================= */}
                <div className="program-card-container mx-md-4 px-md-5 d-flex flex-wrap justify-content-center">
                    {
                        isloading?
                        null:
                        renderPrograms()
                    }
                </div>
                {/* ================= PAGINATION ================= */}
                <MDBRow>
                    <MDBCol>
                        <MDBPagination className="mb-5 float-right" color='red'>
                        <MDBPageItem disabled={page===0} 
                        // onClick={()=>this.getpaginationdata((page/8)-1)}
                        >
                            <MDBPageNav aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                            </MDBPageNav>
                        </MDBPageItem>
                            {/* {this.renderpagination()} */}
                        <MDBPageItem 
                            // disabled={Math.ceil(totalproduct/8)===(page/8)+1} 
                            // onClick={()=>this.getpaginationdata((page/8)+1)}
                            >
                            <MDBPageNav aria-label="Previous">
                            <span aria-hidden="true">Next</span>
                            </MDBPageNav>
                        </MDBPageItem>
                        </MDBPagination>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>

     );
}
 
export default ProgramPage;