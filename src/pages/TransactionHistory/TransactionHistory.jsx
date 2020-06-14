import React,{useState,useEffect} from "react";
import styles from "./TransactionHistory.module.css";
import { Container, Row, Col } from "reactstrap";
import {Table,DropdownMenu,DropdownItem,ButtonDropdown,DropdownToggle} from 'reactstrap'

const TransactionHistory = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const [filterstatus,setfilterstatus]=useState('All')




  const HandleFilter=(e)=>{
      e.preventDefault()
      setfilterstatus(e.target.name)
  }

      useEffect(()=>{
          console.log(filterstatus)
      })
  
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
               <input type='number' placeholder='Transaction Id'/>
                      <button>Search</button>
               </div>
                  
             </Col>
             <Col md='12' lg='6' className='d-flex justify-content-center mt-2'>
               <b className='mt-2'>Transaction Status:</b>
             <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
                      <DropdownToggle caret color="info"  >
                            {/* {filterstatus=''?'All':filterstatus} */}
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
             <Table responsive>
      <thead>
        <tr>
          <th>No.</th>
          <th>Status</th>
          <th>Transaction Id</th>
          <th>Program Name</th>
          <th>Proof Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
             </Col>
           </Row>
      </Container>
    </div>
  );
};

export default TransactionHistory;
