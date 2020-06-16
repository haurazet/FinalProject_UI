import React, { useState, useEffect } from 'react'
import styles from './ManageUser.module.css'
import ButtonNeon from '../../components/ButtonNeon/ButtonNeon'
import Axios from 'axios'
import { FaSearch} from 'react-icons/fa'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Pagination from '../../components/Pagination/Pagination'


const ManageUser =()=>{
    const [filter,setfilter]=useState('')
    const [count,setcount]=useState(false)
    const [inputid,setinputid]=useState(null)
    const [search,setsearch]=useState([])
    const [loading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const [userPerPage]=useState(5)
    const [data,setdata]=useState([{   
        userId:123,
        username:'Fuadariqoh',
        report:3
            
    },{   
        userId:123,
        username:'Fuadariqoh',
        report:5
            
    },
    {   
        userId:123,
        username:'Fuadariqoh',
        report:1
            
    },
    {   
        userId:123,
        username:'Fuadariqoh',
        report:3
            
    },
    {   
        userId:123,
        username:'Fuadariqoh',
        report:1
            
    },
    {   
        userId:123,
        username:'Fuadariqoh',
        report:2
            
    },
])

const handleFilter=(e)=>{
        setfilter(e.target.value)

}
    


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
    

    const renderData=()=>{

        return currentUser.map((val,index)=>{
            return(
                <tr key={index+1}>
            <td>{val.userId}</td>
            <td>{val.username}</td>
            <td>{val.report}</td>
            <td><button className={styles.buttonRed}  onClick={onClickBanUser}>Ban User</button></td>
            </tr>
            )
        })
    }
    const handleSearch=(e)=>{
        setsearch(e.target.value)
        console.log(e.target.value)
        if(e.target.value=''){
            setsearch(data)
        }

        let stringify=e.target.value.toString()
        console.log(stringify)
        let userFilter=data.filter((val)=>(
            val.userId.toString().includes(stringify)
        ))
        setsearch(userFilter)
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

    useEffect(()=>{
        setsearch(data)
    },[])



// Get Current Post
const indexOfLastUser=currentPage*userPerPage
const indexOfFirstUser=indexOfLastUser-userPerPage
const currentUser=search.slice(indexOfFirstUser,indexOfLastUser)
// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return(
       
       <div className={styles.containers}>
                    <div className={styles.manageUser}>
                        <div>
                            <h1>Manage User</h1> 
                        </div>
                    </div>
                    <div className={styles.table_container}>
                        <div className={styles.table_search_filter}>
                             <div >
                                  <b>Search by Id:</b>
                                     <input placeholder='Search..' onChange={handleSearch}/>
                                    <button ><FaSearch/></button>
                            </div>
                        {/* <div>
                            <b>Filter By:</b>
                           <select name="Filter" id="1" onChange={handleFilter}>
                               <option placeholder='Filter by' value=''/>
                               <option value='report' >Report</option>
                               <option value='name'>Name</option>
                            </select>
                        </div> */}
                        </div>
                        <div className={styles.table_box}>
                        <table className={styles.contenttable}>
                    <thead>
                         <tr>
                            <td>Id User</td>
                            <td>Username</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                     {renderData()}
                    </tbody>
                </table>
                        </div>
                        <div className='d-flex justify-content-center'>
                                <Pagination userPerPage={userPerPage} totalUser={search.length} paginate={paginate} />
                        </div>
                    </div>
              
         </div>
    )
}

export default ManageUser