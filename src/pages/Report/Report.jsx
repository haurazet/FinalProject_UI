import React, { useState, useEffect } from "react";
import styles from "./Report.module.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Chart from "../../components/Chart/Chart";
import ChartLine from "../../components/ChartLine/ChartLine";
import Axios from "axios";
import { API_URL } from "../../support/Apiurl";
import { faItalic } from "@fortawesome/free-solid-svg-icons";

const Report = () => {
  const [dataTransaction, setDataTransaction] = useState([]);

  return (
    <div className={styles.marginTop}>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol className={styles.adminOverview}>
            <div
              style={{
                // height: 200,
                // marginTop: 100,
                fontSize: 40,
                fontFamily: "sanfransiscobold",
                color: "white",
              }}
            >
              Recyly Admin Overview
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className={styles.backgroundColor}>
            <div className={styles.flexing}>
              <div
                style={{
                  fontFamily: "sanfransiscobold",
                  fontSize: 50,
                  color: "#3797a4",
                }}
              >
                Program Report
              </div>
              <div style={{ fontWeight: "bolder" }}>
                This is a report of RECYLY Successful and Failed Transaction
                Program.
              </div>
              <div style={{ fontFamily: "", fontStyle: "italic" }}>
                The data that been used is up to date.
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className=" mt-4">
          <MDBCol>
            <Chart />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className={styles.backgroundColor}>
            <div className={styles.flexing}>
              <div
                style={{
                  fontFamily: "sanfransiscobold",
                  fontSize: 50,
                  color: "#3797a4",
                }}
              >
                Reward Report
              </div>
              <div style={{ fontWeight: "bolder" }}>
                This is a report of RECYLY best selling reward category.
              </div>
              <div style={{ fontFamily: "", fontStyle: "italic" }}>
                The data that been used is up to date.
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className=" mt-4">
          <MDBCol>
            <ChartLine />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Report;
