import React from 'react';

const SquareButton = ({text,onclick})=>{
 return(
    <button className="styled-button text-uppercase" onClick={onclick}>{text}</button>
)
 }

export default SquareButton