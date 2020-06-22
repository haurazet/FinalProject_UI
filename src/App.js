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
import Program from './pages/ProgramPage'
import {KeepLogin} from './redux/actions'
import { API_URL } from './support/Apiurl'


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
          console.log("berhasil get data keep login");
          console.log(res.data);
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
        <Route component={Notfound} />
      </Switch>
    </div>
  );
}


export default connect(null, { KeepLogin })(App);
