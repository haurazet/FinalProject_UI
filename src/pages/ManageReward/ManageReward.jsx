import React, { useState, useEffect } from "react";
import styles from "./ManageReward.module.css";
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
import Axios from "axios";
import { API_URL } from "../../support/Apiurl";
import Swal from "sweetalert2";
// import Pagination from "../../components/Pagination";

const ManageReward = () => {
  const [transcationstatus, settransactionstatus] = useState(false);
  const [confirm, setconfirm] = useState(true);
  const [search, setsearch] = useState([]);
  const [data, setdata] = useState([]);

  const getData = () => {
    Axios.get(`${API_URL}/users/getrewardtransaction`)
      .then((result) => setdata(result.data))
      //   setdata(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const changeTable = () => {
    setconfirm(!confirm);
    settransactionstatus(!transcationstatus);
  };

  const acceptButton = (item, username, id) => {
    Swal.fire({
      //   title: `Are you sure want to send this ${item} to ${username}`,
      input: "text",
      //   text: "INPUT THE RECEIPT NUMBER BELOW",
      title: "INPUT THE RECEIPT NUMBER BELOW",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result);
        Axios.put(`${API_URL}/users/acceptreward/${id}`, {
          nomor_resi: result.value,
        })
          .then((result1) => {
            console.log(result1);
            getData();
          })
          .catch((err1) => {
            console.log(err1);
          });
        Swal.fire("Accepted!", "This Program has been accepted.");
      }
    });
  };

  const declineButton = () => {
    Swal.fire({
      //   title: "Are you sure want to decline this?",
      text: "Write down the reason why you decline this program.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
      input: "text",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Are you sure want to decline this reward request?",
          showCancelButton: true,
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            // KIRIM DECLINE KE TRANSACTION REWARD
          }
        });
      }
      // if (result.value) {
    });
  };

  const handleSearch = (e) => {
    setsearch(e.target.value);
    if (e.target.value === "") {
      setsearch(data);
    } else {
      let searchInput = e.target.value;
      let filterData = data.filter((data) =>
        data.username.includes(searchInput)
      );
      setsearch(filterData);
    }
  };
  const renderData = () => {
    return data.map((val, index) => {
      return (
        <tr key={index}>
          <td>{val.id}</td>
          <td>{val.title}</td>
          <td>{val.username}</td>
          <td>
            {" "}
            <MDBBtn
              outline
              color="danger"
              className="btn btn-sm"
              onClick={declineButton}
            >
              Decline
            </MDBBtn>
            <MDBBtn
              outline
              color="success"
              className="btn btn-sm"
              onClick={() => acceptButton(val.title, val.username, val.id)}
            >
              Accept
            </MDBBtn>
          </td>
        </tr>
      );
    });
  };

  return (
    <MDBContainer fluid>
      <MDBRow className={styles.toMiddle}>
        <MDBCol>Manage Reward</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className={styles.toMiddle}>
          <MDBBtnGroup>
            {confirm ? (
              <MDBBtn onClick={changeTable} disabled>
                Reward Confirmation
              </MDBBtn>
            ) : (
              <MDBBtn onClick={changeTable}>Reward Confirmation</MDBBtn>
            )}
            {transcationstatus ? (
              <MDBBtn onClick={changeTable} disabled>
                Reward Status
              </MDBBtn>
            ) : (
              <MDBBtn onClick={changeTable}>Reward Status</MDBBtn>
            )}
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
      <MDBRow middle>
        <MDBCol md="12" lg="12" className={styles.toMiddle}>
          <MDBInput label="Search By Username" onChange={handleSearch} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="md-12">
          <MDBTable responsive>
            <MDBTableHead color="default-color-dark" textWhite>
              {confirm ? (
                <tr>
                  <th>Id Reward</th>
                  <th>Reward</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              ) : (
                <tr>
                  <th>Reward Id</th>
                  <th>Reward</th>
                  <th>Username</th>
                  <th>Status</th>
                </tr>
              )}
            </MDBTableHead>
            <MDBTableBody>
              {/* {confirm ? renderData() : null} */}
              {renderData()}
              {/* {confirm ? renderData() : null} */}
              {/* Transaction Status get data dari hasil fetch trus status nya ongoing */}
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
      {/* <MDBRow>
        <MDBCol className="d-flex justify-content-center">
          {confirm ? (
            <Pagination
              className="color_pagination"
              userPerPage={userPerPage}
              totalUser={search.length}
              paginate={paginate}
            />
          ) : null}
        </MDBCol>
      </MDBRow> */}
    </MDBContainer>
  );
};

export default ManageReward;
