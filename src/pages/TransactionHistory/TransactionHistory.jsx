import React,{useState,useEffect,useContext} from "react";
import styles from "./TransactionHistory.module.css";
import { Container, Row, Col } from "reactstrap";
import {Table,DropdownMenu,DropdownItem,ButtonDropdown,DropdownToggle} from 'reactstrap'
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
    transactionId:1235123,
    program:'TEST'

  }

])
  const [filterstatus,setfilterstatus]=useState('All')
  const [search,setsearch]=useState(null)
  

  const renderData=()=>{
    if(filterstatus==='All'){
     return data.map((value,index)=>{
        return(
          <tr key={index}>
          <th scope="row">{index+1}</th>
        <td>{value.status==='Pending'?
        <button className='badge badge-info' disabled>Pending</button>:value.status==='Failed'?
        <button className='badge badge-danger'>Failed</button>:value.status==='Onprocess'?
        <button className='badge badge-primary'>On Process</button>:value.status==='Completed'?
        <button className='badge badge-success'>Completed</button>:null
          
        }</td>
        <td>{value.transactionId}</td>
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
            <th scope="row">{index+1}</th>
                      <td>{value.status==='Pending'?
        <button className='badge badge-info' disabled>Pending</button>:value.status==='Failed'?
        <button className='badge badge-danger'>Failed</button>:value.status==='Onprocess'?
        <button className='badge badge-primary'>On Process</button>:value.status==='Completed'?
        <button className='badge badge-success'>Completed</button>:null
          
        }</td>
                       <td>{value.transactionId}</td>
                      <td>{value.program}</td>
               <td><button className='btn btn-primary mt-0'>Detail</button></td>
          </tr>
          )
      })
    }
  }

  const HandleFilter=(e)=>{
      e.preventDefault()
      setfilterstatus(e.target.name)
  }

  const HandleSearch=(e)=>{
    e.preventDefault()
    setsearch(e.target.value)

  }



 useEffect(()=>{
      },[])
  
  const toggle = () => setOpen(!dropdownOpen);

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
          <th>No.</th>
          <th>Status</th>
          <th>Transaction Id</th>
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
      </Container>
    </div>
  );
};

export default TransactionHistory;
