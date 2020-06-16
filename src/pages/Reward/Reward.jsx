import React,{useEffect,useState} from 'react'
import styles from './Reward.module.css'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {NiceCard} from '../../components/NiceCard/NiceCard'



const Reward=()=>{

const OnClickCard=()=>{

}


    return(
        <div className={styles.marginTop}>
            <MDBContainer>
            <MDBRow>
                <MDBCol>Reward</MDBCol>
            </MDBRow>
            <MDBRow>
                        <div><NiceCard onClick={OnClickCard} title='Bola' description='Bola ini adalah yang terbaik' 
                        about='10 Recycly Points' price='Harga' priceDescription='Rp.15.000' type='Type' typeDescription='Satuan' /></div>
                <MDBCol>Filter</MDBCol>
                <MDBCol>Sort</MDBCol>
            </MDBRow>
            <MDBRow>
                {/* Wait data */}
                <MDBCol>Card 1</MDBCol>
                <MDBCol>Card 2</MDBCol>
                <MDBCol>Card 3</MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    )
}


export default Reward