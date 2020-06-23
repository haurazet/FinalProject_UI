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
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol className={styles.toMiddle}>Manage Transaction</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ManageTransaksi;
