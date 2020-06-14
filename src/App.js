import React from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import Axios from 'axios';
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} exact/>
      <Route path="/register" component={Register} exact/>
      {/* <Route component={Notfound} /> */}
    </Switch>
  );
}

export default App;
