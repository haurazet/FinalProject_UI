import React,{useState,useEffect} from 'react';
import './ManageProgram.css'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';
import { API_URL } from '../../support/Apiurl';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';


const ManageProgram=(props)=>{

    const {className} = props;

    const Swal = require('sweetalert2')

    const [data,setData]=useState([])
    const [addData,setAddData]=useState({
        name:'',
        image:'',
        brand:'',
        categoryid:'',
        price:'',
        point:'',
        description:''
    })

    const changeHandler=(e)=>{
        setAddData({...addData,[e.target.name]:e.target.value})
        console.log(addData)
    }


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

    const onConfirmDelete=(index,id,name)=>{
        Swal.fire({
            title: `Are you sure wanna delete ${name} ?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((res)=>{
            if(res.value){
                // Axios.delete(`${API_URL}/products/${id}`)
                Swal.fire(
                    'Deleted!',
                    'Your program has been deleted.',
                    'success'
                ).then((res2)=>{
                    getData();
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        Axios.get(`${API_URL}/programs/getprogram`)
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
                        <button style={{width:'20px', fontSize:'1.5em', color:'gray'}} className="btn btn-link hoverred px-0 m-3" onClick={()=>onConfirmDelete(index,val.id,val.name)}><AiOutlineDelete/></button>
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
                <input name='name' type='text' placeholder='Program Name' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='image' type='file' placeholder='Image' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='brand' type='text' placeholder='Brand' className='form-control mt-2' onChange={changeHandler}></input>
                <select className='form-control mt-2'>
                    <option value="" hidden>categoryID</option>
                    <option value='1'>Health And Beauty (1)</option>
                    <option value='2'>Household Grocery (2)</option>
                    <option value='3'>Electronic (3)</option>
                    <option value='4'>Food Grocery (4)</option>
                    <option value='5'>Other (5)</option>
                </select>
                <input name='price' type='number' placeholder='Price' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='point' type='number' placeholder='Point' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='description' type='text' placeholder='Description' className='form-control mt-2' onChange={changeHandler}></input>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleAdd}>Add Program</Button>{' '}
            <Button color="secondary" onClick={toggleAdd}>Cancel</Button>
            </ModalFooter>
        </Modal>

        {/* Modal Edit Program */}
        <Modal isOpen={modalEdit} toggle={toggleEdit} className={className}>
            <ModalHeader toggle={toggleEdit}>Edit Program</ModalHeader>
            <input name='name' type='text' placeholder='Program Name' className='form-control mt-2 '></input>
                <input type='file' placeholder='Image' className='form-control mt-2'></input>
                <input name='brand' type='text' placeholder='Brand' className='form-control mt-2'></input>
                <select className='form-control mt-2'>
                    <option value="" hidden>categoryID</option>
                    <option value='1'>Health And Beauty (1)</option>
                    <option value='2'>Household Grocery (2)</option>
                    <option value='3'>Electronic (3)</option>
                    <option value='4'>Food Grocery (4)</option>
                    <option value='5'>Other (5)</option>
                </select>
                <input name='price' type='number' placeholder='Price' className='form-control mt-2'></input>
                <input name='point' type='number' placeholder='Point' className='form-control mt-2'></input>
                <input name='description' type='text' placeholder='Description' className='form-control mt-2'></input>
            <ModalFooter>
            <Button color="primary" onClick={toggleEdit}>Edit Data</Button>{' '}
            <Button color="secondary" onClick={toggleEdit}>Cancel</Button>
            </ModalFooter>
        </Modal>


        </div>
    )
}

export default ManageProgram