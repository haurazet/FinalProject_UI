import React from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
// import Axios from 'axios';
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


function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={Login} exact/>
      <Route path="/register" component={Register} exact/>
      <Route path="/registeremailverify" component={RegisterEmailVerify} exact/>
      <Route path="/verified" component={Verified} exact/>
      <Route path="/forgotpassword" component={ForgotPassword} exact/>
      <Route path="/resetpassword" component={ResetPassword} exact/>
      <Route path='/manageuser' component={ManageUser} exact/>
      <Route path='/transactionhistory' component={TransactionHistory} exact/>
      <Route  path='/managetransaksi'  component={ManageTransaksi} exact />
      <Route  path='/reward' component={Reward} exact />
      <Route  path='/dashboard' component={Dashboard} exact />
      <Route  path='/report' component={Report} exact />
      <Route component={Notfound} />


      {/* <Route component={Notfound} /> */}
    </Switch>
  );
}

export default App;
