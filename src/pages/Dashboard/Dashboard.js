import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import ManageTransaksi from "../ManageTransaksi/ManageTransaksi";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Report from "../Report/Report";
import ManageUser from "../ManageUser/ManageUser";
import NavbarPage from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faChartLine,
  faDollarSign,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [isManageTransaksi, setManageTransaksi] = useState(false);
  const [isManageUser, setIsManageUser] = useState(false);
  const [isManageReward, setIsManageReward] = useState(false);
  const [isManageProgram, setIsManageProgram] = useState(false);
  const [isReport, setReport] = useState(false);

  const handleContent = ({ value }) => {
    if (value === 1) {
      setIsManageUser(false);
      setManageTransaksi(false);
      setIsManageReward(false);
      setIsManageProgram(false);
      setReport(true);
    }
    if (value === 2) {
      console.log("masuk2");
      setIsManageUser(true);
      setManageTransaksi(false);
      setIsManageReward(false);
      setIsManageProgram(false);
      setReport(false);
    }
    if (value === 3) {
      console.log("masuk2");
      setIsManageUser(false);
      setManageTransaksi(true);
      setIsManageReward(false);
      setIsManageProgram(false);
      setReport(false);
    }
    if (value === 4) {
      console.log("masuk2");
      setIsManageUser(false);
      setManageTransaksi(false);
      setIsManageReward(false);
      setIsManageProgram(true);
      setReport(false);
    }
  };
  return (
    <MDBContainer fluid className={styles.wrappers}>
      <MDBRow>
        <MDBCol className="ml-0 pl-0"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="ml-0 pl-0 mr-0 pr-0" md="12" lg="2">
          <div className={styles.sideBar}>
            <div className={styles.Box1}>
              <div className={styles.adminDashboardText}>Admin Dashboard</div>
            </div>
            <div
              className={styles.Box2}
              onClick={() => handleContent({ value: 1 })}
            >
              <div onClick={() => handleContent({ value: 1 })} name="report">
                <FontAwesomeIcon icon={faChartLine} style={{ fontSize: 20 }} />{" "}
                Report
              </div>
            </div>
            <div
              className={styles.Box2}
              onClick={() => handleContent({ value: 2 })}
            >
              <div onClick={() => handleContent({ value: 2 })}>
                {" "}
                <FontAwesomeIcon
                  icon={faAddressBook}
                  style={{ fontSize: 20 }}
                />{" "}
                Manage User
              </div>
            </div>
            <div
              className={styles.Box2}
              onClick={() => handleContent({ value: 3 })}
            >
              <div
                onClick={() => handleContent({ value: 3 })}
                name="managetransaksi"
              >
                <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: 20 }} />{" "}
                Manage Transaksi
              </div>
            </div>
            <div
              className={styles.Box2}
              onClick={() => handleContent({ value: 4 })}
            >
              <div
                onClick={() => handleContent({ value: 4 })}
                name="manageprogram"
              >
                <FontAwesomeIcon icon={faCalendar} style={{ fontSize: 20 }} />{" "}
                Manage Reward
              </div>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="12" lg="10">
          <div className={styles.ContentBox}>
            {isManageUser ? (
              <ManageUser />
            ) : isManageTransaksi ? (
              <ManageTransaksi />
            ) : isReport ? (
              <Report />
            ) : null}
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>Footer</MDBCol>
      </MDBRow>
    </MDBContainer>
    // </div>
  );
};

export default Dashboard;
