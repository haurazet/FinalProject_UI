import React from 'react'
import { PaginationItem } from 'reactstrap'

const Pagination=({userPerPage,totalUser,paginate})=>{
    const PageNumbers=[]

    for(let i=1;i<=Math.ceil(totalUser/userPerPage);i++){
        PageNumbers.push(i)
    }
        return(
        <nav>
            <ul className='pagination pagination-lg'>
                {PageNumbers.map((number)=>{
                    return(
                        <li key={number} className='page-item'>
                                <a onClick={()=> paginate(number)} >
                                    {number}
                                </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        )
}

export default Pagination