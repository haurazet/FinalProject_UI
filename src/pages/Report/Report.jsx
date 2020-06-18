import React,{useState,useEffect} from 'react'
import styles from './Report.module.css'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Chart from '../../components/Chart/Chart'
import ChartLine from '../../components/ChartLine/ChartLine'

const Report=()=>{
   

    return(
        <div className={styles.marginTop}>
            <MDBContainer>
                <MDBRow className={styles.toMiddle}>
                    <MDBCol><h1>Transaction Report</h1></MDBCol>
                </MDBRow>
                <MDBRow className='ml-4 mt-4'>
                    <MDBCol><h1> Program Report</h1></MDBCol>
                </MDBRow>
                <MDBRow  className='ml-4 mt-4'>
                    <MDBCol><b style={{fontSize:20}}>Filter By: </b>
                    <div>
                        <select className="browser-default custom-select">
                        <option>Choose your option</option>
                        <option value="1">Program Success</option>
                        <option value="2">Program Failed</option>
                        </select>
                  </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='ml-4 mt-4'>
                    <MDBCol>
                        <Chart />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='ml-4 mt-4'>
                    <MDBCol><h1> Reward Report</h1></MDBCol>
                </MDBRow>
                <MDBRow  className='ml-4 mt-4'>
                    <MDBCol><b style={{fontSize:20}}>Filter By: </b>
                    <div>
                        <select className="browser-default custom-select">
                        <option>Choose your option</option>
                        <option value="1">Program Success</option>
                        <option value="2">Program Failed</option>
                        </select>
                  </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='ml-4 mt-4'>
                    <MDBCol>
                        <ChartLine />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Report