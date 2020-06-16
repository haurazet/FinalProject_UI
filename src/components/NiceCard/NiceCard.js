import React from 'react'
import styles from './NiceCard.module.css'
import { MDBBtn } from 'mdbreact'


export const NiceCard=({onClick,title,description,about,price,priceDescription,type,typeDescription})=>{
    return(
        <div className={styles.card} onClick={onClick}>
            <div className={styles.cardImage}>

            </div>
            <div className={styles.cardText}>
    <span className={styles.date}>{about}</span>
            <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.cardStats}>
                <div className={styles.stats}>
                <div className={styles.value}>asd</div>
                <div className={styles.type}>asdasd</div>
                </div>
            </div>
            <div className={styles.cardStats}>
                <div className={styles.stats}>
    <div className={styles.value}>{price}</div>
    <div className={styles.type}>{priceDescription}</div>
                </div>
                <div className={styles.stats}>
                <div className={styles.value}><MDBBtn onClick={onClick}>BUY</MDBBtn></div>
                <div className={styles.type}></div>
                </div>
                <div className={styles.stats}>
    <div className={styles.value}>{type}</div>
    <div className={styles.type}>{typeDescription}</div>
                </div>
            </div>
            

        </div>
    )
}