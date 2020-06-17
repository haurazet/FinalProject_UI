import React from 'react';
import './App.css';
import { Route, Switch, useLocation } from "react-router-dom";
import Axios from 'axios';
import Login from './pages/Login'
import Register from './pages/Register'
import ManageUser from './pages/ManageUser/ManageUser'
import TransactionHistory from './pages/TransactionHistory/TransactionHistory'
import ManageTransaksi from './pages/ManageTransaksi/ManageTransaksi';
import Reward from './pages/Reward/Reward';
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/Report/Report';


function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} exact/>
      <Route path="/register" component={Register} exact/>
      <Route path='/manageuser' component={ManageUser} exact/>
      <Route path='/transactionhistory' component={TransactionHistory} exact/>
      <Route  path='/managetransaksi'  component={ManageTransaksi} exact />
      <Route  path='/reward' component={Reward} exact />
      <Route  path='/dashboard' component={Dashboard} exact />
      <Route  path='/report' component={Report} exact />


      {/* <Route component={Notfound} /> */}
    </Switch>
  );
}

export default App;
