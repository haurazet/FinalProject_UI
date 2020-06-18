import React,{useEffect,useState,useReducer} from 'react'
import styles from './Reward.module.css'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {NiceCard} from '../../components/NiceCard/NiceCard'
import Pagination from '../../components/Pagination/Pagination'



const Reward=()=>{
    const [filterPaket,setFilterPaket]=useState([])
    const [filter,setfilter]=useState([])
    const [search,setsearch]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [userPerPage]=useState(6)
    const[data,setdata]=useState([{
        title:'Aola',
        description:'Bola ini adalah yang terbaik',
        about:10,
        price:'Harga',
        priceDescription:15000,
        type:'type',
        typeDescription:'Satuan'
    },
    {
        title:'Bola',
        description:'Bola ini adalah yang terbaik',
        about:10,
        price:'Harga',
        priceDescription:16000,
        type:'type',
        typeDescription:'Satuan'
    },
    {
        title:'Cola',
        description:'Bola ini adalah yang terbaik',
        about:10,
        price:'Harga',
        priceDescription:15000,
        type:'type',
        typeDescription:'Satuan'
    },
    {
        title:'Bola',
        description:'Bola ini adalah yang terbaik',
        about:10,
        price:'Harga',
        priceDescription:15000,
        type:'type',
        typeDescription:'Satuan'
    },
    {
        title:'Bola',
        description:'Bola ini adalah yang terbaik',
        about:10,
        price:'Harga',
        priceDescription:13000,
        type:'type',
        typeDescription:'Paketan'
    },
    {
        title:'Bola',
        description:'Bola ini adalah yang terbaik',
        about:10,
        price:'Harga',
        priceDescription:15000,
        type:'type',
        typeDescription:'Paketan'
    },  {
        title:'Bola',
        description:'Bola ini adalah yang terbaik',
        about:10,
        price:'Harga',
        priceDescription:14000,
        type:'type',
        typeDescription:'Paketan'
    },

])

const OnClickCard=()=>{

}
const handleSearch=(e)=>{
    e.preventDefault()
    setsearch(e.target.value)
    if(e.target.value===''){
        setsearch(data)
      }
      
        let stringify=e.target.value.toLowerCase()
        let transactionFilter=data.filter((data)=>data.title.toLowerCase().includes(stringify))
        setsearch(transactionFilter) 
        const currentUser=transactionFilter.slice(indexOfFirstUser,indexOfLastUser)
        return  currentUser.map((val,index)=>(
              <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                     about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />  
          ))
  
      

    
}
useEffect(()=>{
    setsearch(data)
},[])

const handleFilter=(e)=>{
    setFilterPaket(e.target.value)
    console.log(filterPaket)
}

const handleSortBy=(e)=>{
    setfilter(e.target.value)
    setsearch('')
    console.log(filter)
}

const renderCard=()=>{
    // if(filterPaket==''){
    //     return currentUser.map((val,index)=>(
    //         // <MDBCol >
    //                 <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
    //                         about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />    
    //         // </MDBCol>
           
    //     ))
    // }
     if(filterPaket==='satuan'){
        const filteredData=data.filter((val)=>(
            val.typeDescription==='Satuan'
        ))
        const currentUser=filteredData.slice(indexOfFirstUser,indexOfLastUser)
        return  currentUser.map((val,index)=>(
              <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                     about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />  
          ))
    } else if(filterPaket==='paketan'){
        const filteredData=data.filter((val)=>(
            val.typeDescription==='Paketan'
        ))
        const currentUser=filteredData.slice(indexOfFirstUser,indexOfLastUser)
        return  currentUser.map((val,index)=>(
              <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                     about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />  
          ))
    }



    // if(filter==''){
    //     return currentUser.map((val,index)=>(
    //         // <MDBCol >
    //                 <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
    //                         about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />    
    //         // </MDBCol>
           
    //     ))
    else if(filter==='cheapest'){
        console.log('masuk')
        function compare( a, b ) {
            if ( a.priceDescription < b.priceDescription ){
              return -1;
            }
            if ( a.priceDescription > b.priceDescription ){
              return 1;
            }
            return 0;
          }
        const sortedItem=  data.sort( compare );
        const currentUser=sortedItem.slice(indexOfFirstUser,indexOfLastUser)
      return  currentUser.map((val,index)=>(
            <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                   about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />  
        ))
    }else if(filter==='mostexpensive'){
        console.log('masuk')
        function compare( a, b ) {
            if ( a.priceDescription < b.priceDescription ){
              return 1;
            }
            if ( a.priceDescription > b.priceDescription ){
              return -1;
            }
            return 0;
          }
        const sortedItem=  data.sort( compare );
        const currentUser=sortedItem.slice(indexOfFirstUser,indexOfLastUser)
      return  currentUser.map((val,index)=>(
            <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                   about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />  
        ))
    }else if(filter==='nameza'){
        function compare( a, b ) {
            if ( a.title < b.title ){
              return 1;
            }
            if ( a.title > b.title ){
              return -1;
            }
            return 0;
          }
        const sortedItem=  data.sort( compare );
        const currentUser=sortedItem.slice(indexOfFirstUser,indexOfLastUser)
      return  currentUser.map((val,index)=>(
            <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                   about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />  
        ))
    }else if(filter==='nameaz'){
        function compare( a, b ) {
            if ( a.title < b.title ){
              return -1;
            }
            if ( a.title > b.title ){
              return 1;
            }
            return 0;
          }
        const sortedItem=  data.sort( compare );
        const currentUser=sortedItem.slice(indexOfFirstUser,indexOfLastUser)
      return  currentUser.map((val,index)=>(
            <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                   about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />  
        ))
    }
    if(filterPaket===''&&filter===''&&search===''){
        return data.map((val,index)=>(
            // <MDBCol >
                    <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                            about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />    
            // </MDBCol>
           
        ))
    }
    return currentUser.map((val,index)=>(
        // <MDBCol >
                <NiceCard key={index} onClick={OnClickCard} title={val.title} description={val.description}
                        about={val.about} price={val.price} priceDescription={val.priceDescription} type={val.type} typeDescription={val.typeDescription} />    
        // </MDBCol>
       
    ))
    
}

    // Get Current Post
    const indexOfLastUser=currentPage*userPerPage
    const indexOfFirstUser=indexOfLastUser-userPerPage
    const currentUser=search.slice(indexOfFirstUser,indexOfLastUser)
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return(
        <div className={styles.marginTop}>
            <MDBContainer className={styles.container}> 
            <MDBRow >
                <MDBCol className='d-flex justify-content-center'><h1>Reward</h1></MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol> <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" placeholder="Search by Name " aria-label="Search" onChange={handleSearch} />
      </div>
        </MDBCol>
                <MDBCol> <div>
        <select className="browser-default custom-select" onChange={handleFilter}>
          <option value=''>Filter By</option>
          <option value="satuan">Satuan</option>
          <option value="paketan">Paket</option>
        </select>
      </div></MDBCol>
                <MDBCol><div>
        <select className="browser-default custom-select" onChange={handleSortBy} defaultValue=''>
          <option value=''>Sort By</option>
          <option value="cheapest">Cheapest</option>
          <option value="mostexpensive">Most Expensive</option>
          <option value="nameaz">Name A-Z</option>
          <option value="nameza">Name Z-A</option>
        </select>
      </div></MDBCol>
            </MDBRow>
            <MDBRow>
                {renderCard()}
            </MDBRow>
            <MDBRow>
                <MDBCol className='d-flex justify-content-center mt-4'><Pagination userPerPage={userPerPage} totalUser={data.length} paginate={paginate} /></MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    )
}


export default Reward