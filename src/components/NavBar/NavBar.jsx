import React, { useState } from 'react';
import logoheader from './../../images/recyly_nobg.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './NavBar.css'
import {FaSearch, FaHandHoldingHeart} from 'react-icons/fa'
import {connect} from 'react-redux'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search,setSearch] = useState({
    searchInput:''
  })

  const toggle = () => setIsOpen(!isOpen);

  //Onchange untuk Search Bar
  const onChangeSearch=(e)=>{
    setSearch({...search,[e.target.name]:e.target.value})
    console.log(search.searchInput)
  }
    
  return (
    <div>
      <Navbar color="white" light expand="md">
      <NavbarBrand href="/">
      <img fixed='top' src={logoheader} alt='logo' height='45px' style={{paddingLeft:'50px'}}></img>
      </NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className='headernavlink' href="/program">ALL PROGRAM</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='headernavlink' href="/reward">REWARD</NavLink>
            </NavItem>
            <UncontrolledDropdown className='headernavlink' nav inNavbar>
              <DropdownToggle nav caret>
                ABOUT
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/aboutus">About Us</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/contactus">Contact Us</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
          <div className='search-container'>
            <div>
                <input type="text" name='searchInput' onChange={onChangeSearch}/> &nbsp; 
                <a href='/search'>
                <button style={{width:'35px'}}><FaSearch/></button>
                </a>
            </div>
          </div>

        </Collapse>
      </Navbar>

      {
          props.User.isLogin?
          <div className='headermenu-containerislogin'>
              <div className='headermenu-item'>
                  <a href='/profile' style={{color:'inherit'}}>PROFILE</a>
              </div>
              <div className='headermenu-item'>
                  <a href='/home' style={{color:'inherit'}}>SIGN OUT</a>
              </div>
              <div className='headermenu-itemlast'>
                  <a href='/cart' style={{color:'inherit'}}><FaHandHoldingHeart className='holdingheart'/> (0)</a>
              </div>
          </div>
           :
           <div className='headermenu-container'>
               <div className='headermenu-item'>
                   <a href='/register' style={{color:'inherit'}}>SIGN UP</a>
               </div>
               <div className='headermenu-itemlast'>
                   <a href='/login' style={{color:'inherit'}}>SIGN IN</a>
               </div>
           </div>
         }

    </div>
  );
}

const MapstatetoProps=(state)=>{
  return{
      User:state.Auth,
  }
}


export default connect(MapstatetoProps,{})(NavBar);