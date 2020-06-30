import React,{useState,useEffect} from 'react';
import './ManageReward.css'
import {Table} from 'reactstrap'
import Axios from 'axios';
import { API_URL } from '../../support/Apiurl';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ManageReward=(props)=>{

    const {className} = props;

    const [data,setData]=useState([])
    
    //data add
    const [addData,setAddData]=useState({
        title:'',
        description:'',
        priceDescription:'',
        image:'',
        p1:'',
        p2:'',
        categoryid:''
    })


    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [indexEdit, setIndexEdit] = useState(0)

    const toggleAdd = () => setModalAdd(!modalAdd);
    const toggleEdit = () => setModalEdit(!modalEdit);

    const onEditClick=(index)=>{
        setModalEdit(!modalEdit)
        setIndexEdit(index)
    }

    const changeHandler=(e)=>{
        setAddData({...addData,[e.target.name]:e.target.value})
        console.log(addData)
    }

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        Axios.get(`${API_URL}/reward/getrewardspec`)
        .then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const renderRewards=()=>{
        return data.map((val,index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{val.title}</td>
                    <td>{val.priceDescription}</td>
                    <td>{val.categoryname}</td>
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
        <div className='managereward-container'>
            
            <div className='managereward-title'>
                Manage Reward
            </div>

            <div className='managereward-table'>
            
            <Button color="danger" onClick={toggleAdd}>Add Reward</Button>

            <Table striped>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRewards()}
                </tbody>
            </Table>
        


            </div>
            
        {/* Modal Add Reward */}
         <Modal isOpen={modalAdd} toggle={toggleAdd} className={className}>
            <ModalHeader toggle={toggleAdd}>Add Reward</ModalHeader>
            <ModalBody>
                <input name='title' type='text' placeholder='Title' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='description' type='text' placeholder='Description' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='priceDescription' type='text' placeholder='priceDescription' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='image' type='file' placeholder='Image' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='p1' type='text' placeholder='Price' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='p2' type='text' placeholder='Point' className='form-control mt-2' onChange={changeHandler}></input>
                <select className='form-control mt-2'>
                    <option value="" hidden>categoryID</option>
                    <option value='1'>Environment (1)</option>
                    <option value='2'>Animals (2)</option>
                    <option value='3'>Human Services (3)</option>
                    <option value='4'>Education (4)</option>
                </select>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleAdd}>Add Data</Button>{' '}
            <Button color="secondary" onClick={toggleAdd}>Cancel</Button>
            </ModalFooter>
        </Modal>

        {/* Modal Edit Reward */}
        <Modal isOpen={modalEdit} toggle={toggleEdit} className={className}>
            <ModalHeader toggle={toggleEdit}>Edit Reward</ModalHeader>
            <ModalBody>
                <input name='title' type='text' placeholder='Title' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='description' type='text' placeholder='Description' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='priceDescription' type='text' placeholder='priceDescription' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='image' type='file' placeholder='Image' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='p1' type='text' placeholder='Price' className='form-control mt-2' onChange={changeHandler}></input>
                <input name='p2' type='text' placeholder='Point' className='form-control mt-2' onChange={changeHandler}></input>
                <select className='form-control mt-2'>
                    <option value="" hidden>categoryID</option>
                    <option value='1'>Environment (1)</option>
                    <option value='2'>Animals (2)</option>
                    <option value='3'>Human Services (3)</option>
                    <option value='4'>Education (4)</option>
                </select>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleEdit}>Edit Reward </Button>{' '}
            <Button color="secondary" onClick={toggleEdit}>Cancel</Button>
            </ModalFooter>
        </Modal>


        </div>
    )
}

export default ManageReward