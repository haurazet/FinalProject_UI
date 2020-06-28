import React,{useState,useEffect} from 'react';
import './ManageProgram.css'
import {Table} from 'reactstrap'
import Axios from 'axios';
import { API_URL } from '../../support/Apiurl';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ManageProgram=(props)=>{

    const {className} = props;

    const [data,setData]=useState([])

    const [modalAdd, setModalAdd] = useState(false);
    const [modalDelete, setModalDelete] = useState(false)
    const [modalEdit, setModalEdit] = useState(false);
    const [indexEdit, setIndexEdit] = useState(0)

    const toggleAdd = () => setModalAdd(!modalAdd);
    const toggleDelete = () => setModalDelete(!modalDelete);
    const toggleEdit = () => setModalEdit(!modalEdit);

    const onEditClick=(index)=>{
        setModalEdit(!modalEdit)
        setIndexEdit(index)
    }

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        Axios.get(`${API_URL}/programs/getallprogram`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const renderProgram=()=>{
        return data.map((val,index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{val.name}</td>
                    <td>{val.brand}</td>
                    <td>{val.price}</td>
                    <td className="text-center">
                        <button style={{width:'20px', fontSize:'1.5em', color:'gray'}} className="btn btn-link hoverblack px-0 m-3" onClick={()=>onEditClick(index)}><FaRegEdit/></button>
                        <button style={{width:'20px', fontSize:'1.5em', color:'gray'}} className="btn btn-link hoverred px-0 m-3" ><AiOutlineDelete/></button>
                        {/* onClick={()=>onDeleteClick(index,val.id,val.title)} */}
                    </td>
                </tr>
            )
        })
    }



    return(
        <div className='manageprogram-container'>
            
            <div className='manageprogram-title'>
                Manage Program
            </div>

            <div className='manageprogram-table'>
            
            <Button color="danger" onClick={toggleAdd}>Add Program</Button>

            <Table striped>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProgram()}
                </tbody>
            </Table>
        


            </div>
            
        {/* Modal Add Program */}
         <Modal isOpen={modalAdd} toggle={toggleAdd} className={className}>
            <ModalHeader toggle={toggleAdd}>Add Program</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleAdd}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggleAdd}>Cancel</Button>
            </ModalFooter>
        </Modal>

        {/* Modal Delete Program */}
        <Modal isOpen={modalDelete} toggle={toggleDelete} className={className}>
            <ModalHeader toggle={toggleDelete}>Delete Program</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleDelete}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggleDelete}>Cancel</Button>
            </ModalFooter>
        </Modal>


        {/* Modal Edit Program */}
        <Modal isOpen={modalEdit} toggle={toggleEdit} className={className}>
            <ModalHeader toggle={toggleEdit}>Edit Program</ModalHeader>
            <ModalBody>
                
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleEdit}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggleEdit}>Cancel</Button>
            </ModalFooter>
        </Modal>


        </div>
    )
}

export default ManageProgram