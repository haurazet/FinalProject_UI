import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import Axios from 'axios';
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import RegisterEmailVerify from './pages/Auth/RegisterEmailVerify'
import Notfound from './pages/NotFound'
import Home from './pages/Home'
import ManageUser from './pages/ManageUser/ManageUser'
import TransactionHistory from './pages/TransactionHistory/TransactionHistory'
import Verified from './pages/Auth/Verified'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ResetPassword from './pages/Auth/ResetPassword'
import ManageTransaksi from './pages/ManageTransaksi/ManageTransaksi';
import Reward from './pages/Reward/Reward';
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/Report/Report';
import Program from './pages/Program/ProgramPage'
import ProgramDetail from './pages/Program/ProgramDetail'
import {KeepLogin} from './redux/actions'
import { API_URL } from './support/Apiurl'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/footer'
import ContactUs from './pages/ContactUs/contactus';
import AboutUs from './pages/AboutUs/aboutus'
import CollectionPrograms from './pages/CollectionPrograms/CollectionPrograms';
import MyImpact from './pages/MyImpact/MyImpact'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import EditProfile from './pages/EditProfile/EditProfile';

function App({KeepLogin}) {

  const [Loading, setLoading]=useState(true)

  useEffect(()=>{
    var token = localStorage.getItem('token')
    if(token){
      Axios.get(`${API_URL}/users/keeplogin`,{
        headers:{
          'Authorization' :  `Bearer ${token}`
        }
      })
      .then(res=>{
        KeepLogin(res.data)
      })
      .catch(err=>{
        console.log(err.message)
      })
        .then((res) => {
          KeepLogin(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
    },[KeepLogin])

    if(Loading){
      return <div>loading....</div>
    }

  return (
    <div>

      <NavBar/>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/registeremailverify" component={RegisterEmailVerify} exact/>
        <Route path="/verified" component={Verified} exact/>
        <Route path="/forgotpassword" component={ForgotPassword} exact/>
        <Route path="/resetpassword" component={ResetPassword} exact/>
        <Route  path='/reward' component={Reward} exact />
        <Route  path='/program' component={Program} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/transactionhistory" component={TransactionHistory} exact />
        <Route path="/programdetail/:idprog" exact component={ProgramDetail}/>
        <Route path='/collection-programs' component={CollectionPrograms} exact />
        <Route path='/my-impact' component={MyImpact} exact />
        <Route path='/personal-info' component={PersonalInfo} exact />
        <Route path='/edit-profile' component={EditProfile} exact />
        
        <Route  path='/aboutus' component={AboutUs} exact />
        <Route  path='/contactus' component={ContactUs} exact />
        <Route component={Notfound} />

      </Switch>

      <Footer/>
    </div>
  );
}


export default connect(null, { KeepLogin })(App);
