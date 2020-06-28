import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify";
import Notfound from "./pages/NotFound";
import Home from "./pages/Home";
import ManageUser from "./pages/ManageUser/ManageUser";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";
import Verified from "./pages/Auth/Verified";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import ManageTransaksi from "./pages/ManageTransaksi/ManageTransaksi";
import Reward from "./pages/Reward/Reward";
import Dashboard from "./pages/Dashboard/Dashboard";
import Report from "./pages/Report/Report";
import Program from "./pages/Program/ProgramPage";
import ProgramDetail from "./pages/Program/ProgramDetail";
import JoinProgram from "./pages/Program/JoinProgram";
import ScrollToTop from "./components/scrolltop";
import { KeepLogin } from "./redux/actions";
import { API_URL } from "./support/Apiurl";
import TransactionDetail from "./pages/Program/TransactionDetail";
import RewardDetail from "./pages/RewardDetail/RewardDetail";
import Cart from "./pages/Cart/Cart";
import RewardCheckout from "./pages/RewardCheckout/RewardCheckout";

function App({ KeepLogin }) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      Axios.get(`${API_URL}/users/keeplogin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          KeepLogin(res.data);
        })
        .catch((err) => {
          console.log(err.message);
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
  }, [KeepLogin]);

  if (Loading) {
    return <div>loading....</div>;
  }

  return (
    <div>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route
          path="/registeremailverify"
          component={RegisterEmailVerify}
          exact
        />
        <Route path="/verified" component={Verified} exact />
        <Route path="/forgotpassword" component={ForgotPassword} exact />
        <Route path="/resetpassword" component={ResetPassword} exact />
        <Route path="/reward" component={Reward} exact />
        <Route path="/program" component={Program} exact />
        <Route path="/cart/:userid" component={Cart} exact />
        <Route path="/rewardcheckout" component={RewardCheckout} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/report" component={Report} exact />
        <Route path="/managetransaksi" component={ManageTransaksi} exact />
        <Route path="/manageuser" component={ManageUser} exact />
        <Route path="/rewarddetails/:idreward" component={RewardDetail} exact />
        <Route
          path="/transactionhistory/:id"
          component={TransactionHistory}
          exact
        />
        <Route path="/programdetail/:idprog" exact component={ProgramDetail} />
        <Route
          path="/transactionhistory"
          component={TransactionHistory}
          exact
        />
        <Route path="/programdetail/:idprog" exact component={ProgramDetail} />
        <Route path="/joinprogram/:idprog" exact component={JoinProgram} />
        <Route
          path="/transactiondetail/:idtrans"
          exact
          component={TransactionDetail}
        />
        <Route component={Notfound} />
      </Switch>
    </div>
  );
}

export default connect(null, { KeepLogin })(App);
