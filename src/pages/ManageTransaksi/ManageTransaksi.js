import React, { useState, useEffect } from "react";
import styles from "./ManageTransaksi.module.css";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBInput,
} from "mdbreact";
import Pagination from "../../components/Pagination/Pagination";
import Swal from "sweetalert2";

const ManageTransaksi = () => {
  const [confirmPayment, setConfirmPayment] = useState(true);
  const [ProgramTransaction, setProgramTransaction] = useState(false);
  const [RewardTransaction, setRewardTransaction] = useState(false);

  useEffect(() => {
    console.log(confirmPayment);
    console.log(ProgramTransaction);
    console.log(RewardTransaction);
  }, [confirmPayment]);

  const handleContent = (value) => {
    switch (value === value) {
      case value === 1:
        console.log("masuk 1");
        return (
          setConfirmPayment(true),
          setProgramTransaction(false),
          setRewardTransaction(false)
        );
      case value === 2:
        console.log("masuk 2");
        return (
          setConfirmPayment(false),
          setProgramTransaction(true),
          setRewardTransaction(false)
        );
      case value === 3:
        console.log("masuk 3");
        return (
          setConfirmPayment(false),
          setProgramTransaction(false),
          setRewardTransaction(true)
        );
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className={styles.ContainerHeader}>
        <MDBCol className={styles.toMiddle}>
          <h1 style={{ fontFamily: "sanfransiscobold", fontSize: 30 }}>
            Manage Transaction
          </h1>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="d-flex justify-content-around">
          <div
            className="manage_transaksi_button"
            onClick={() => handleContent(1)}
          >
            Confirm Payment
          </div>
          <div
            className="manage_transaksi_button"
            onClick={() => handleContent(2)}
          >
            Program Transaction
          </div>
          <div
            className="manage_transaksi_button"
            onClick={() => handleContent(3)}
          >
            Reward Transaction
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="d-flex justify-content-center mt-4">
          {confirmPayment ? (
            <p>confirmPayment</p>
          ) : ProgramTransaction ? (
            <p>ProgramTransaction</p>
          ) : RewardTransaction ? (
            <p>RewardTransaction</p>
          ) : null}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ManageTransaksi;
