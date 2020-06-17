import React,{useState,useEffect} from 'react'
import styles from './ManageTransaksi.module.css'
import { MDBTable, MDBTableBody, MDBTableHead,MDBContainer,MDBRow,MDBCol,MDBBtn ,MDBBtnGroup,MDBInput} from 'mdbreact';
import Pagination from '../../components/Pagination/Pagination'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ManageTransaksi=()=>{
    const [currentPage,setCurrentPage]=useState(1)
    const [userPerPage]=useState(5)
    const [transcationstatus,settransactionstatus]=useState(false)
    const [confirm,setconfirm]=useState(true)
    const [search,setsearch]=useState([])
    const [data,setdata]=useState([
        {
            transaksiId:123,
            program:'asd',
            username:'fuad',
        },
        {
            transaksiId:123,
            program:'asd',
            username:'fuad',
        },
        {
            transaksiId:123,
            program:'asd',
            username:'fuad',
        },
        {
            transaksiId:123,
            program:'asd',
            username:'asd',
        },
        {
            transaksiId:123,
            program:'asd',
            username:'zxc',
        },
        {
            transaksiId:123,
            program:'asd',
            username:'fuad',
        },
        {
            transaksiId:123,
            program:'asd',
            username:'fuad',
        },
])

const renderData=()=>{
        return currentUser.map((transaction,index)=>(
            <tr key={index}>
            <td>{transaction.transaksiId}</td>
        <td>{transaction.program}</td>
        <td>{transaction.username}</td>
            <td className='d-flex justify-content-center'> <MDBBtn outline color="danger" onClick={declineButton}>Decline</MDBBtn> 
            <MDBBtn outline color="success" onClick={acceptButton} >Accept</MDBBtn></td>
            </tr>
        ))


        }

    useEffect(()=>{
        setsearch(data)
    },[])

const acceptButton=()=>{
    Swal.fire({
        title: 'Are you sure want to accept this program?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',

      }).then((result)=>{
          if(result.isConfirmed){
            Swal.fire(
                'Accepted!',
                'This Program has been accepted.',
                
              )
          }
      })


}


const declineButton=()=>{
    Swal.fire({
        title: 'Are you sure want to decline this?',
        text: "Write down the reason why you decline this program.",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        input: 'text'
      }).then((result) => {
        if(result.isConfirmed){
            Swal.fire(
                'Declined!',
                'This Program has been declined.',
                
              )
        }
        // if (result.value) {
    
        }
      )
}

const changeTable=()=>{
    setconfirm(!confirm)
    settransactionstatus(!transcationstatus)
}

const handleSearch=(e)=>{
    setsearch(e.target.value)
    if(e.target.value===''){
        setsearch(data)
      }
    else{
        let searchInput=e.target.value
        let filterData=data.filter((data)=>data.username.includes(searchInput))
        setsearch(filterData)
    }
}




    // Get Current Post
const indexOfLastUser=currentPage*userPerPage
const indexOfFirstUser=indexOfLastUser-userPerPage
const currentUser=search.slice(indexOfFirstUser,indexOfLastUser)
// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return(
        <div className={styles.marginTop}>
            <MDBContainer fluid>
                    <MDBRow className={styles.toMiddle}>
                        <MDBCol >
                                Manage Transaksi
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className={styles.toMiddle}>
                            <MDBBtnGroup>
                                {confirm?  <MDBBtn onClick={changeTable} disabled>Confirmation</MDBBtn>:<MDBBtn onClick={changeTable} >Confirmation</MDBBtn>}
                                {transcationstatus?<MDBBtn onClick={changeTable} disabled>Transaction Status</MDBBtn> :
                                <MDBBtn onClick={changeTable} >Transaction Status</MDBBtn>  }
                            </MDBBtnGroup>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow middle>
                         <MDBCol md='12' lg='12' className={styles.toMiddle} >
                           {/* Search: */}
                           <MDBInput label="Search By Username" onChange={handleSearch} />
                           </MDBCol>
                            {/* <MDBCol md='12' lg='6' className={styles.toMiddle}>
                           Filter By:
                           <input/>

                            </MDBCol>  */}
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='md-12'>
                        <MDBTable responsive>
                                <MDBTableHead color="default-color-dark" textWhite>
                                {confirm?    <tr>
                                            <th>Id Transaksi</th>
                                            <th>Nama Program</th>
                                            <th>Username</th>
                                            <th className='d-flex justify-content-center'>Action</th>
                                            </tr> 
                                            :
                                            <tr>
                                            <th>Status</th>
                                            <th>Username</th>
                                            <th>Program</th>
                                            </tr>
                                            
                                            }
                                </MDBTableHead>
                                <MDBTableBody>
                                    {confirm? renderData():null}
                                    {/* Transaction Status get data dari hasil fetch trus status nya ongoing */}
                                         
                                </MDBTableBody>
                                    </MDBTable>
                                </MDBCol>
                            </MDBRow>
                                <MDBRow>
                                    <MDBCol className='d-flex justify-content-center'>
                                        {confirm?  <Pagination className='color_pagination' userPerPage={userPerPage} totalUser={search.length} paginate={paginate}  />:null}
                                       
                                    </MDBCol>
                                </MDBRow>

            </MDBContainer>

        </div>
    )
}
export default ManageTransaksi

