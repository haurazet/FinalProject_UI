import React,{useState,useEffect,useContext} from "react";
import styles from "./TransactionHistory.module.css";
import { Container, Row, Col } from "reactstrap";
import {Table,DropdownMenu,DropdownItem,ButtonDropdown,DropdownToggle} from 'reactstrap'
import Pagination from '../../components/Pagination/Pagination'
import Axios from 'axios'
import {MDBInput} from 'mdbreact'

const TransactionHistory = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const [data,setdata]=useState([{
    status:'Failed',
    transactionId:1235123,
    program:'TEST'

  },
  {
    status:'Pending',
    transactionId:21345,
    program:'TEST'

  },
  {
    status:'Pending',
    transactionId:21345,
    program:'TEST'

  },
  {
    status:'Pending',
    transactionId:21345,
    program:'TEST'

  },
  {
    status:'Pending',
    transactionId:21345,
    program:'TEST'

  },
  {
    status:'Pending',
    transactionId:21345,
    program:'TEST'

  }
  
])
  const [filterstatus,setfilterstatus]=useState('All')
  const [search,setsearch]=useState([])
  const [loading,setLoading]=useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const [userPerPage]=useState(5)


  const renderData=()=>{
    if(filterstatus==='All'){
     return currentUser.map((value,index)=>{
       console.log(index)
        return(
          <tr key={index}>
        <td>{value.transactionId}</td>
        <td>{value.status==='Pending'?
        <button className='badge badge-info' disabled>Pending</button>:value.status==='Failed'?
        <button className='badge badge-danger' disabled>Failed</button>:value.status==='Onprocess'?
        <button className='badge badge-primary' disabled>On Process</button>:value.status==='Completed'?
        <button className='badge badge-success' disabled>Completed</button>:null
          
        }</td>
        <td>{value.program}</td>
             <td><button className='btn btn-primary mt-0'>Detail</button></td>
        </tr>
        )
      }
      )
    }else if(filterstatus==='Pending'||'Onprocess'||'Completed'||'Failed'){
     const filteredData=data.filter((val)=>{
       return val.status===filterstatus
     })
     return filteredData.map((value,index)=>{
          return(
            <tr key={index}>
                       <td>{value.transactionId}</td>
                      <td>{value.status==='Pending'?
        <button className='badge badge-info' disabled>Pending</button>:value.status==='Failed'?
        <button className='badge badge-danger' disabled>Failed</button>:value.status==='Onprocess'?
        <button className='badge badge-primary' disabled>On Process</button>:value.status==='Completed'?
        <button className='badge badge-success' disabled>Completed</button>:null
          
        }</td>
          <td>{value.program}</td>
          <td><button className='btn btn-primary mt-0'>Detail</button></td>
          </tr>
          )
      })
    }
  }
  
 

  const HandleFilter=(e)=>{
      setfilterstatus(e.target.name)
  }

  const HandleSearch=(e)=>{
    setsearch(e.target.value)
    if(e.target.value===''){
      setsearch(data)
    }
    else{
      let stringify=e.target.value.toString()
      let transactionFilter=data.filter((data)=>data.transactionId.toString().includes(stringify))
      setsearch(transactionFilter) 

    }

  }
 useEffect(()=>{
        setsearch(data)
        console.log(currentUser)
      },[])

  
  
  const toggle = () => setOpen(!dropdownOpen);

// Get Current Post
const indexOfLastUser=currentPage*userPerPage
const indexOfFirstUser=indexOfLastUser-userPerPage
const currentUser=search.slice(indexOfFirstUser,indexOfLastUser)
// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className={styles.marginTop}>
      <Container fluid>
        <Row label='Title'>
          <Col>
          <div className={styles.flexboxTitle}>
            <div><h1>History Transaksi</h1></div>
          </div>
          </Col>
       
           </Row>
           <Row>
             <Col md='12' lg='6'>
               <div className='d-flex justify-content-center mt-3'>
               <input type='number' placeholder='Transaction Id' onChange={HandleSearch}  />
                      <button>Search</button>
               </div>
                  
             </Col>
             <Col md='12' lg='6' className='d-flex justify-content-center mt-2'>
               <b className='mt-3'>Transaction Status:</b>
             <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
                      <DropdownToggle caret color="info"  >
                            {filterstatus}
                      </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={HandleFilter} name='All'>All</DropdownItem>
                          <DropdownItem onClick={HandleFilter} name='Pending'>Pending</DropdownItem>
                          <DropdownItem onClick={HandleFilter} name='Onprocess'>On Process</DropdownItem>
                          <DropdownItem onClick={HandleFilter} name='Completed'>Completed</DropdownItem>
                          <DropdownItem onClick={HandleFilter} name='Failed'>Failed</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
             </Col>
           </Row>
           <Row>
             <Col md='12' lg='12'>
             <Table responsive dark>
      <thead>
        <tr>
        <th>Transaction Id</th>
          <th>Status</th>
          <th>Program Name</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
          {renderData()}
      </tbody>
    </Table>
             </Col>
           </Row>
           <Row>
             <Col className='d-flex justify-content-center'>
                    <Pagination  userPerPage={userPerPage} totalUser={search.length} paginate={paginate} />
             </Col>
           </Row>
      </Container>
    </div>
  );
};

export default TransactionHistory;
