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
import MyImpact from "./pages/MyImpact/MyImpact";
import CollectionPrograms from "./pages/CollectionPrograms/CollectionPrograms";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import EditProfile from "./pages/EditProfile/EditProfile";
import AboutUs from "./pages/AboutUs/aboutus";
import ContactUs from "./pages/ContactUs/contactus";
import logo from "./images/recyly_nobg.png";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ManageProgram from './pages/ManageProgram/ManageProgram'
import ManageReward from './pages/ManageReward/ManageReward'

function App({ KeepLogin }) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(Auth);
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

  const Auth = useSelector((state) => state.Auth);

  if (Loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img src={logo} width="280px" height="150px"></img>
        <div
          style={{ paddingTop: "20px", fontWeight: "bold", fontSize: "20px" }}
        >
          Loading..
        </div>
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />

      <NavBar />

      {/* Jika tidak login dan role=admin, balik ke home
      {Auth.role===0?
        <Redirect to='/dashboard'></Redirect>
          :
        <Redirect to='/dashboard'></Redirect>
            } */}

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
        <Route path='/collection-programs' component={CollectionPrograms} exact />
        <Route path='/my-impact' component={MyImpact} exact />
        <Route path='/personal-info' component={PersonalInfo} exact />
        <Route path='/edit-profile' component={EditProfile} exact />
        <Route  path='/aboutus' component={AboutUs} exact />
        <Route  path='/contactus' component={ContactUs} exact />
        <Route path="/report" component={Report} exact />
        <Route path="/managetransaksi" component={ManageTransaksi} exact />
        <Route path="/manageuser" component={ManageUser} exact />
        <Route path="/rewarddetails/:idreward" component={RewardDetail} exact />
        <Route
          path="/transactionhistory/:id"
          component={TransactionHistory}
          exact
        />
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

        <Route 
          path="/managetransaksi" 
          exact 
          component={Auth.role === 0 ? ManageTransaksi : Notfound}
        />
     
        <Route
          path="/manageuser"
          component={Auth.role === 0 ? ManageUser : Notfound}
          exact
        />
        <Route
          path="/report"
          component={Auth.role === 0 ? Report : Notfound}
          exact
        />
         <Route 
          path="/manageprogram" 
          component={Auth.role === 0 ? ManageProgram : Notfound} exact 
        />
          
        <Route 
          path="/managereward" 
          component={Auth.role === 0 ? ManageReward : Notfound} exact 
        />

        <Route component={Notfound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default connect(null, { KeepLogin })(App);