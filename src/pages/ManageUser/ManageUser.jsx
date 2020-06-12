import React, { useState, useEffect } from 'react'
import styles from './ManageUser.module.css'
import ButtonNeon from '../../components/ButtonNeon/ButtonNeon'



const ManageUser =()=>{
    const [count,setcount]=useState(false)


    const onClickButton=()=>{
        setcount(!count)
        console.log(count)
    }


    return(
         <div className={styles.containers}>
                        <h1>MANAGE USER</h1> 
                       
                        
                      
                        
                        <ButtonNeon  text='yes' onClick={onClickButton}/> 
                <table >
                    
                </table>
         </div>
    )
}

export default ManageUser