import React, { useState, useEffect } from 'react'
import styles from './ManageUser.module.css'
import ButtonNeon from '../../components/ButtonNeon/ButtonNeon'
import Axios from 'axios'
import { FaSearch} from 'react-icons/fa'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const ManageUser =()=>{
    const [count,setcount]=useState(false)
    const [inputid,setinputid]=useState(null)
    


    const onClickButton=()=>{
        setcount(!count)
        console.log(count)
    }

    const renderUser=()=>{
        Axios.get(`API_URL`)
        
        .then((result)=>{

        }).catch((error)=>{


        })
    }
    const handleInputUser=(e)=>{
        e.preventDefault()
        setinputid(e.target.value)
        console.log(inputid)
        

        
    }

    const onClickBanUser=()=>{
        Swal.fire({
            title: 'Are you sure want to ban this user?',
            text: 'User will be banned for permanent time.',
            
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          })
    }



    return(
       
       <div className={styles.containers}>
                    <div className={styles.manageUser}>
                        <div><h1>Manage User</h1> </div>
                    </div>
                    <div className={styles.table_container}>
                        <div className={styles.table_search_filter}>
                             <div> <b>Search by Id:</b>
                                     <input type="number" onChange={handleInputUser} />
                                    <button onClick={handleInputUser}><FaSearch/></button>
                            </div>
                        <div>
                            <b>Filter By:</b>
                           <select name="Filter" id="1">
                               <option value='report' >Report</option>
                               <option value='name'>Name</option>
                               </select>
                        </div>
                        </div>
                        <div className={styles.table_box}>
                        <table className={styles.contenttable}>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Id User</td>
                            <td>Username</td>
                            <td>Jumlah Report</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>123</td>
                            <td>Fuadariqoh</td>
                            <td>5</td>
                            <td><button className={styles.buttonRed} onClick={onClickBanUser}>Ban User</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>123</td>
                            <td>Fuadariqoh</td>
                            <td>5</td>
                            <td><button className={styles.buttonRed}>Ban User</button></td>
                        </tr>
                    </tbody>
                </table>
                        </div>
                       
                        
                    </div>
              
         </div>
    )
}

export default ManageUser