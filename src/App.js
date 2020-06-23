import React from 'react';
import './App.css';
import { Route, Switch, useLocation } from "react-router-dom";
import Axios from 'axios';
import Header from './components/header'
import Footer from './components/footer';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ManageUser from './pages/ManageUser/ManageUser'
import TransactionHistory from './pages/TransactionHistory/TransactionHistory'



function App() {
  return (

    <div>

      <Header/>

      <Switch>
        <Route path="/login" component={Login} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path='/' component={Home} exact/>
        <Route path='/manageuser' component={ManageUser} exact/>
        <Route path='/transactionhistory' component={TransactionHistory} exact/>

        {/* <Route component={Notfound} /> */}
      </Switch>

      <Footer/>
      
    </div>

  );
}

export default App;
