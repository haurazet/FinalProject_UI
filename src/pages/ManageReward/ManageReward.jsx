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
        Axios.get(`${API_URL}/users/getrewardspec`)
        .then((res)=>{
            console.log(res.data)
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleAdd}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggleAdd}>Cancel</Button>
            </ModalFooter>
        </Modal>

        {/* Modal Delete Reward */}
        <Modal isOpen={modalDelete} toggle={toggleDelete} className={className}>
            <ModalHeader toggle={toggleDelete}>Delete Reward</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleDelete}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggleDelete}>Cancel</Button>
            </ModalFooter>
        </Modal>


        {/* Modal Edit Reward */}
        <Modal isOpen={modalEdit} toggle={toggleEdit} className={className}>
            <ModalHeader toggle={toggleEdit}>Edit Reward</ModalHeader>
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

export default ManageReward


//////////////////////////////

// import React, { Component } from 'react';
// import { Table } from 'reactstrap';
// import Axios from 'axios';
// import {API_URL} from '../support/ApiUrl'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import CurrencyInput from 'react-currency-input';
// // import {Redirect} from 'react-router-dom'
// import Swal from 'sweetalert2'
// import {connect} from 'react-redux'
// import { FaRegEdit } from 'react-icons/fa';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { IoMdAdd } from 'react-icons/io';


// class ManageAdmin extends Component {
//     state = { 
//         products:[],
//         isModaladdopen:false,
//         isModaleditopen:false,
//         indexedit:0,
//         indexdelete:-1,
//         categories:[],
//         isEditImage:false,
//         addimagefile:undefined,
//         editimagefile:undefined
//     }
    
//     async componentDidMount(){
//         try {
//             var res=await Axios.get(`${API_URL}/products/getprod`)
//             this.setState({categories:res.data.category,products:res.data.products})
//             console.log(res.data.category)
//         } catch (error){
//             console.log(error)
//         }
//     }
    
//     onAddimagefilechange=(event)=>{
//         console.log(event.target.files[0])
//         if(event.target.files[0]){
//             this.setState({addimagefile:event.target.files[0]})
//         }else{
//             this.setState({addimagefile:undefined})
//         }
//     }

//     oneditimagefileChange=(event)=>{
//         if(event.target.files[0]){
//             this.setState({editimagefile:event.target.files[0]})
//         }else{
//             this.setState({editimagefile:undefined})
//         }
//     }

//     toggleadd=()=>{
//         this.setState({isModaladdopen:!this.state.isModaladdopen})
//     }

//     toggleedit=()=>{
//         this.setState({isModaleditopen:!this.state.isModaleditopen})
//     }

//     toggleEditImage=()=>{
//         this.setState({isEditImage:!this.state.isEditImage})
//     }

//     onSaveaddDataClick=()=>{
//         var formdata=new FormData()
//         var namaadd=this.refs.namaadd.value
//         var stockadd=parseInt(this.refs.stockadd.value)
//         var categoryadd=parseInt(this.refs.categoryadd.value)
//         var price=this.refs.priceadd.getMaskedValue()
//         var priceadd=parseInt(price.replace(/[^0-9-]+/g,""))
//         var descriptionadd=this.refs.descriptionadd.value
//         var obj={
//             name:namaadd,
//             stock:stockadd,
//             categoryId:categoryadd,
//             price:priceadd,
//             description:descriptionadd
//         }     
//         formdata.append('image',this.state.addimagefile)
//         formdata.append('data',JSON.stringify(obj)) // json.stringify mengubah objek menjadi json
//         Axios.post(`${API_URL}/products/addprod`,formdata)
//         .then((res)=>{
//             console.log(res.data)
//             this.setState({products:res.data,isModaladdopen:false, addimagefile:undefined})
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }

//     deleteconfirm=(index,id)=>{
//         Swal.fire({
//             title: `Are you sure want to delete ${this.state.products[index].name}?`,
//             text: "You won't be able to revert this!",
//             imageUrl: `${API_URL+this.state.products[index].image}`,
//             imageWidth: '150px',
//             imageHeight:'150px',
//             width: '400px',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//           }).then((result) => {
//             if (result.value) {
//                 Axios.delete(`${API_URL}/products/deleteprod/${id}`)
//               .then((res)=>{
//                   Swal.fire(
//                     'Deleted!',
//                     'Your file has been deleted.',
//                     'success'
//                 ).then((result)=>{
//                   if(result.value){
//                       this.setState({products:res.data})
//                   }
//               })
//                 }).catch((err)=>{
//                     console.log(err)
//                 })
//             }
//         })
//     }

//     onsaveEditClick=()=>{
//         var formdata=new FormData()
//         var namaedit=this.refs.namaedit.value
//         var stockedit=parseInt(this.refs.stockedit.value)
//         var categoryedit=parseInt(this.refs.categoryedit.value)
//         var priceedit=parseInt(this.refs.priceedit.value)
//         // var price=this.refs.priceedit.getMaskedValue()
//         // var priceedit=parseInt(price.replace(/[^0-9-]+/g,""))
//         var descriptionedit=this.refs.descriptionedit.value
//         var obj={
//             name:namaedit,
//             stock:stockedit,
//             categoryId:categoryedit,
//             price:priceedit,
//             description:descriptionedit
//         }
//         var token=this.props.User.token
//         var Headers={
//             headers:
//             {
//                 'Content-Type':'multipart/form-data',
//                 'Authorization':`Bearer ${token}`
//             },
//         }
//         formdata.append('image',this.state.editimagefile)
//         formdata.append('data',JSON.stringify(obj)) // json.stringify mengubah objek menjadi json
//         var id=this.state.products[this.state.indexedit].id
//         Axios.put(`${API_URL}/products/editprod/${id}`,formdata,Headers)
//         .then((res)=>{
//             console.log(res.data)
//             this.setState({products:res.data,isModaleditopen:false})
//         }).catch((err)=>{
//             console.log('ini eror disini')
//         })
//     }

//     onEditClick=(index)=>{
//         this.setState({indexedit:index,isModaleditopen:true})
//         // console.log(this.state.isModaladdOpen)
//     }

//     rendercategorytoadd=()=>{
//         return this.state.categories.map((val,index)=>{
//             return <option key={index} value={val.id}>{val.name}</option>
//         })
//     }

    
//     renderProduct=()=>{
//         const {products,} =this.state
//         return products.map((val,index)=>{
//             return(
//                 <tr key={index}>
//                     <th scope="row">{index+1}</th>
//                     <td>{val.name}</td>
//                     <td className='text-center'><img src={API_URL+val.image} alt={val.name} width='150' height='150'/></td>
//                     <td className='text-center'>{val.stock}</td>
//                     <td className='text-center'>{val.catnama}</td>
//                     <td className='text-center'>{val.price}</td>
//                     <td>{val.description}</td>
//                     <td className="text-center align-middle">
//                         <button style={{width:'20px', fontSize:'1.5em', color:'gray'}} className="btn btn-link hoverblack px-0 m-3" onClick={()=>this.onEditClick(index)}><FaRegEdit/></button>
//                         <button style={{width:'20px', fontSize:'1.5em', color:'gray'}} className="btn btn-link hoverred px-0 m-3" onClick={()=>this.deleteconfirm(index,val.id)}><AiOutlineDelete/></button>
//                     </td>
//                 </tr>
//             )
//         })
//     }


//     render() { 
//         const {indexedit,products}=this.state 
       
//             return ( 
//             <div className="m-5 p-5">
            
//                 <Modal isOpen={this.state.isModaladdopen} toggle={this.toggleadd} > 
//                 <ModalHeader toggle={this.toggleadd}>Add Data</ModalHeader>
//                 <ModalBody>
//                         <input type="text" ref='namaadd' placeholder='Product Name' className='form-control mt-2'/>
//                         <input type="file" onChange={this.onAddimagefilechange} ref='imageadd' placeholder='Image URL' className='form-control mt-2'/>
//                         {
//                             this.state.addimagefile?
//                             <img src={URL.createObjectURL(this.state.addimagefile)} alt="" height='300px'/>:
//                             null
//                         }
//                         <input type="number" ref='stockadd' placeholder='Total Stock' className='form-control mt-2'/>
//                         <select ref='categoryadd' className='form-control mt-2'> 
//                             <option value="" hidden > Choose Category..</option>
//                             {this.rendercategorytoadd()}
//                         </select>
//                         <CurrencyInput  ref='priceadd' placeholder='Price' prefix={'IDR '} className='form-control mt-2' precision="3"  />
//                         {/* <input type="number" ref='priceadd' placeholder='Price' prefix={'Rp '} /> */}
//                         <textarea cols="20" rows="5" ref='descriptionadd' className="form-control mt-2" placeholder="Description"></textarea>
                        
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary"  size='sm' onClick={this.onSaveaddDataClick}>Save</Button>{' '}
//                     <Button color="red" size='sm' onClick={this.toggleadd}>Cancel</Button>
//                 </ModalFooter>
//                 </Modal>
//                 {
//                 products.length?
//                 <Modal isOpen={this.state.isModaleditopen} toggle={this.toggleedit} > 
//                 <ModalHeader toggle={this.toggleedit}>Edit {products[indexedit].name}</ModalHeader>
//                 <ModalBody style={{fontSize:'14px'}}>
//                     <form className="needs-validation" noValidate>
//                         <div>
//                             <label>Product Name</label>
//                             <input type="text" ref='namaedit' defaultValue={products[indexedit].name}  className='form-control mb-2 color:#yellow' required/>
//                         </div>
//                         <div>
//                             <label>Image</label>
//                             <div className="card mb-2" style={{width: '150px',verticalAlign:'bottom'}}>

//                                 <img className="card-img-top" src={products[indexedit].image} alt="Card"></img>
//                             </div>
//                             </div>
//                             <input type="file" ref='imageedit' onChange={this.oneditimagefileChange}  className='form-control mb-2' required/>
//                             {/* {isEditImage?
//                             <input type="text" ref='imageedit' defaultValue={products[indexedit].image}  className='form-control mb-2' required/>
//                             :
//                             null
//                             } */}
//                         {/* </div> */}
//                         <div>
//                             <label>Stock</label>
//                             <input type="number" ref='stockedit' defaultValue={products[indexedit].stock}  className='form-control mb-2' required/>
//                         </div>
//                         <div>
//                             <label >Category</label>
//                             <select ref='categoryedit' defaultValue={products[indexedit].categoryId} className='form-control mb-2' required> 
//                                 <option value="" hidden > Choose Category..</option>
//                                 {this.rendercategorytoadd()}
//                             </select>
//                         </div>
//                         <div>
//                             <label>Price </label>
//                             {/* <CurrencyInput  ref='priceedit' defaultValue={products[indexedit].price}  prefix={'IDR '} className='form-control mb-2' precision="3" required /> */}
//                             <input type="number" ref='priceedit' placeholder='Price' defaultValue={products[indexedit].price} className='form-control mb-2' required />
//                         </div>
//                         <div>
//                             <label>Description</label>
//                             <textarea cols="20" rows="5" ref='descriptionedit' className="form-control mb-2" defaultValue={products[indexedit].description} ></textarea>
//                         </div>
//                         </form>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary"  size='sm' onClick={this.onsaveEditClick}>Save</Button>{' '}
//                     <Button color="red" size='sm' onClick={this.toggleedit}>Cancel</Button>
//                 </ModalFooter>
//                 </Modal>
//                 :
//                 null
//                 }
//                 <div> 
//                     <h3 className="text-center my-5 text-uppercase"> Manage Product </h3>
//                 </div>
//                 <button style={{borderRadius:'30px', color: "red"}} 
//                 className="btn double-light-blue btn-sm mt-2 black-text" 
//                 onClick={this.toggleadd}><IoMdAdd/> Add Product</button>
//                     <Table striped  >
//                         <thead className='text-center font-weight-bold'>
//                         <tr>
//                             <th style={{width: '5%'}}>No</th>
//                             <th style={{width: '15%'}}>Name</th>
//                             <th style={{width: 'auto'}}>Image</th>
//                             <th style={{width: '5%'}}>Stock</th>
//                             <th style={{width: '5%'}}>Category</th>
//                             <th style={{width: '10%'}}>Price</th>
//                             <th style={{width: '25%'}}>Description</th>
//                             <th style={{width: '10%'}}>Action</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {this.renderProduct()}
//                         </tbody>
//                     </Table> 
                    
//             </div>)
       
        

//     }
// }
 
// const MapstatetoProps=(state)=>{
//     return{
//       User:state.Auth
//     }
//   }
// export default connect (MapstatetoProps)(ManageAdmin);