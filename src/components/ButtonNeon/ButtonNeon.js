import React from 'react'

import style from './ButtonNeon.module.css'



const ButtonNeon=({text,onClick})=>{

        return(
     
  <a className={style.aElement} onClick={onClick}> 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
            {text}
                    
    </a>

     
  

    

        )
}

export default ButtonNeon