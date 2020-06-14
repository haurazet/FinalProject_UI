import React from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import Axios from 'axios';
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterEmailVerify from './pages/RegisterEmailVerify'
import Notfound from './pages/NotFound'
import Home from './pages/Home'
import ManageUser from './pages/ManageUser/ManageUser'
import TransactionHistory from './pages/TransactionHistory/TransactionHistory'


function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={Login} exact/>
      <Route path="/register" component={Register} exact/>
      <Route path="/registeremailverify" component={RegisterEmailVerify}/>
      <Route component={Notfound} />
      <Route path='/manageuser' component={ManageUser} exact/>
      <Route path='/transactionhistory' component={TransactionHistory} exact/>

      {/* <Route component={Notfound} /> */}
    </Switch>
  );
}

export default App;
