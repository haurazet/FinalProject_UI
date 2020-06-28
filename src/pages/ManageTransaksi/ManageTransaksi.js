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
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
} from "mdbreact";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faCheck,
  faUserClock,
  faTruckLoading,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { API_URL } from "../../support/Apiurl";
import { icon } from "@fortawesome/fontawesome-svg-core";

const ManageTransaksi = () => {
  const [confirmPayment, setConfirmPayment] = useState(true);
  const [confirmPickUp, setConfirmPickUp] = useState(false);
  const [ProgramTransaction, setProgramTransaction] = useState(false);
  const [RewardTransaction, setRewardTransaction] = useState(false);
  const [dataWaitForPayment, setDataWaitForPayment] = useState([]);
  const [dataConfirmPickup, setDataConfirmPickUp] = useState([]);
  const [dataAllTransaction, setDataAllTransaction] = useState([]);
  const [dataRewardTransaction, setdataRewardTransaction] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [pageConfirm, setPageConfirm] = useState(0);
  const [pageConfirmPickup, setPageConfirmPickup] = useState(0);
  const [pageTotalTransaction, setPageTotalTransaction] = useState(0);
  const [pageRewardTransaction, setPageRewardTransaction] = useState(0);
  const [totalConfirmPayment, setTotalConfirmPayment] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [totalRewardTransaction, setTotalRewardTransaction] = useState(0);
  const [totalPickUp, setTotalPickUp] = useState(0);

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = () => {
    Axios.all([
      Axios.get(`${API_URL}/transaction/gettotalconfirmpayment`),
      Axios.get(`${API_URL}/transaction/gettotalconfirmpickup`),
      Axios.get(`${API_URL}/transaction/gettotaltransaction`),
      Axios.get(`${API_URL}/reward/gettotalrewardtransaction`),
    ])
      .then((result) => {
        setTotalConfirmPayment(result[0].data[0].total_confirm);
        setTotalPickUp(result[1].data[0].total_pickup);
        setTotalTransaction(result[2].data[0].total_transaction);
        setTotalRewardTransaction(result[3].data[0].total_reward);
        Axios.all([
          Axios.get(
            `${API_URL}/transaction/confirmpayment?page=${pageConfirm}`
          ),
          Axios.get(
            `${API_URL}/transaction/confirmpickup?page=${pageConfirmPickup}`
          ),
          Axios.get(
            `${API_URL}/transaction/getalltransaction?page=${pageTotalTransaction}`
          ),
          Axios.get(
            `${API_URL}/reward/getallrewardtransaction?page=${pageRewardTransaction}`
          ),
        ]).then((result1) => {
          setDataWaitForPayment(result1[0].data);
          setDataConfirmPickUp(result1[1].data);
          setDataAllTransaction(result1[2].data);
          setdataRewardTransaction(result1[3].data);
        });
      })
      .catch((err) => console.log(err));
  };

  const handleContent = (value) => {
    switch (value === value) {
      case value === 1:
        return (
          setConfirmPayment(true),
          setConfirmPickUp(false),
          setProgramTransaction(false),
          setRewardTransaction(false)
        );
      case value === 2:
        return (
          setConfirmPayment(false),
          setConfirmPickUp(true),
          setProgramTransaction(false),
          setRewardTransaction(false)
        );
      case value === 3:
        return (
          setConfirmPayment(false),
          setConfirmPickUp(false),
          setProgramTransaction(true),
          setRewardTransaction(false)
        );
      case value === 4:
        return (
          setConfirmPayment(false),
          setConfirmPickUp(false),
          setProgramTransaction(false),
          setRewardTransaction(true)
        );
    }
  };
  const showPhoto = (linkImage) => {
    Swal.fire({
      title: "Bukti Transfer",
      imageUrl: linkImage,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const getpaginationdata = (val) => {
    console.log(val);
    {
      setPageConfirm(val * 6) ||
        setPageConfirmPickup(val * 6) ||
        setPageRewardTransaction(val * 6) ||
        setPageTotalTransaction(val * 6);
    }
    setRefresh(!refresh);
  };
  const renderpagination1 = () => {
    var totalpage = Math.ceil(totalConfirmPayment / 6);
    var arr = [];
    for (var i = 0; i < totalpage; i++) {
      arr.push(i);
    }
    return arr.map((val, index) => {
      return (
        <div key={index}>
          <MDBPageItem active={pageConfirm / 6 === val}>
            <MDBPageNav onClick={() => getpaginationdata(val)}>
              {val + 1}
            </MDBPageNav>
          </MDBPageItem>
        </div>
      );
    });
  };
  const renderpagination2 = () => {
    var totalpage = Math.ceil(totalPickUp / 6);
    var arr = [];
    for (var i = 0; i < totalpage; i++) {
      arr.push(i);
    }
    return arr.map((val, index) => {
      return (
        <div key={index}>
          <MDBPageItem active={pageConfirmPickup / 6 === val}>
            <MDBPageNav onClick={() => getpaginationdata(val)}>
              {val + 1}
            </MDBPageNav>
          </MDBPageItem>
        </div>
      );
    });
  };
  const renderpagination3 = () => {
    // console.log('masuk pagination')
    var totalpage = Math.ceil(totalTransaction / 6);
    var arr = [];
    for (var i = 0; i < totalpage; i++) {
      arr.push(i);
    }
    return arr.map((val, index) => {
      return (
        <div key={index}>
          <MDBPageItem active={pageTotalTransaction / 6 === val}>
            <MDBPageNav onClick={() => getpaginationdata(val)}>
              {val + 1}
            </MDBPageNav>
          </MDBPageItem>
        </div>
      );
    });
  };
  const renderpagination4 = () => {
    var totalpage = Math.ceil(totalRewardTransaction / 6);
    var arr = [];
    for (var i = 0; i < totalpage; i++) {
      arr.push(i);
    }
    return arr.map((val, index) => {
      return (
        <div key={index}>
          <MDBPageItem active={pageRewardTransaction / 6 === val}>
            <MDBPageNav onClick={() => getpaginationdata(val)}>
              {val + 1}
            </MDBPageNav>
          </MDBPageItem>
        </div>
      );
    });
  };

  const onClickAccept = (id) => {
    Swal.fire({
      title: "Do you want to accept this transaction?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        Axios.put(`${API_URL}/transaction/onaccepttransaction?id=${id}`)
          .then((result) => {
            Swal.fire({
              icon: "success",
              title: "This transaction has been accept",
              showConfirmButton: false,
              timer: 1500,
            });
            setRefresh(!refresh);
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const onClickDecline = (id) => {
    Swal.fire({
      icon: "error",
      showCancelButton: true,
      title: "Do you want to decline this transaction?",
      text: "write the reason why you decline this transaction",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
    })
      .then((result) => {
        if (result.isConfirmed) {
          Axios.put(`${API_URL}/transaction/declinetransaction?id=${id}`, {
            reject_reason: result.value,
          })
            .then((result1) => {
              Swal.fire({
                title: "Transaction has been Declined.",
                icon: "success",
              });
              setRefresh(!refresh);
            })
            .catch((err1) => console.log(err1));
        }
      })
      .catch((err) => console.log(err));
  };
  const onClickDeclinePickUp = (id) => {
    Swal.fire({
      icon: "error",
      title: "Do you want to reject this transaction?",
      text: "Write the reason why you decline this transaction",
      input: "text",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Axios.put(
            `${API_URL}/transaction/declinepickup?id=${id}&reject_reason=${result.value}`
          ).then((result) => {
            Swal.fire({
              title: "Transaction has been reject",
              icon: "success",
            });
          });
        }
      })
      .catch((error) => console.log(error));
  };
  const onClickAcceptPickUp = (id) => {
    Swal.fire({
      title: "Do you want to complete this transaction?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.put(`${API_URL}/transaction/acceptpickup?id=${id}`)
          .then((result) => {
            Swal.fire({
              icon: "success",
              title: "Transaction has been completed",
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const renderDataWaitForPayment = () => {
    console.log(dataWaitForPayment);
    return dataWaitForPayment.map((val) => {
      return (
        <div className={styles.horizontalCardContainer}>
          <div className={styles.transactionNumber}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              Transaction Number : 202006{val.id}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Program Name: {val.program_name}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Username: {val.username}
            </div>
          </div>
          <div className={styles.UserDetail}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              Payment Detail
            </div>
            <div className={styles.wrappers}>
              <div>
                <div>Payment method: {val.paymentmethod} </div>
                <div>First Name: {val.username}</div>
                <div>Phone Number: {val.phonenumber}</div>
              </div>
              <div>
                <div className={styles.boxFoto}>
                  <img
                    onClick={() => showPhoto(`${API_URL + val.payment_image}`)}
                    width="100%"
                    height="100%"
                    src={API_URL + val.payment_image}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actionBox}>
            <div className="d-flex justify-content-center">
              <div style={{ fontSize: 18, fontFamily: "sanfransiscobold" }}>
                Confirmation
              </div>
            </div>
            <div className="d-flex ml-4">
              <div
                className={styles.declineButton}
                onClick={() => onClickDecline(val.id)}
              >
                DECLINE
              </div>
              <div
                className={styles.acceptButton}
                onClick={() => onClickAccept(val.id)}
              >
                ACCEPT
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderDataConfirmPickup = () => {
    console.log(dataConfirmPickup);
    return dataConfirmPickup.map((val) => {
      return (
        <div className={styles.horizontalCardContainer}>
          <div className={styles.transactionNumber}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              Transaction Number : 202006{val.id}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Program Name:{val.program_name}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Username:{val.username}
            </div>
          </div>
          <div className={styles.UserDetail}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              Payment Detail
            </div>
            <div className={styles.wrappers}>
              <div>
                <div>Payment method: {val.paymentmethod} </div>
                <div>First Name: {val.username}</div>
                <div>Phone Number: {val.phonenumber}</div>
              </div>
              <div>
                <div className={styles.boxFoto}>
                  <img
                    onClick={() => showPhoto(`${API_URL + val.payment_image}`)}
                    width="100%"
                    height="100%"
                    src={API_URL + val.payment_image}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actionBox}>
            <div className="d-flex justify-content-center">
              <div style={{ fontSize: 18, fontFamily: "sanfransiscobold" }}>
                Confirm Pick Up
              </div>
            </div>
            <div className="d-flex ml-4">
              <div
                className={styles.declineButton}
                onClick={() => onClickDeclinePickUp(val.id)}
              >
                DECLINE
              </div>
              <div
                className={styles.acceptButton}
                onClick={() => onClickAcceptPickUp(val.id)}
              >
                ACCEPT
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderDataAllProgram = () => {
    console.log(dataAllTransaction);
    return dataAllTransaction.map((val) => {
      return (
        <div className={styles.horizontalCardContainer}>
          <div className={styles.transactionNumber}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              Transaction Number : 202006{val.id}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Program Name: {val.program_name}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Username: {val.username}
            </div>
          </div>
          <div className={styles.UserDetail}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              Payment Detail
            </div>
            <div className={styles.wrappers}>
              <div>
                <div>Payment method: {val.paymentmethod} </div>
                <div>First Name: {val.username}</div>
                <div>Phone Number: {val.phonenumber}</div>
              </div>
              <div>
                <div className={styles.boxFoto}>
                  <img
                    onClick={() => showPhoto(`${API_URL + val.payment_image}`)}
                    width="100%"
                    height="100%"
                    src={API_URL + val.payment_image}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actionBox}>
            <div className="ml-2">
              <div>
                <b>Transacation Status</b>
              </div>
              <div className={styles.spaceBetween}>
                {val.status === "waiting_payment" ? (
                  <div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>
                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faUserClock} />
                    </div>
                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faTruckLoading} />
                    </div>
                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                ) : null}
                {val.status === "waiting_verification" ? (
                  <div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faUserClock} />
                    </div>
                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faTruckLoading} />
                    </div>
                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                ) : null}
                {val.status === "on_pickup" ? (
                  <div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faUserClock} />
                    </div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faTruckLoading} />
                    </div>
                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                ) : null}
                {val.status === "completed" ? (
                  <div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faUserClock} />
                    </div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faTruckLoading} />
                    </div>
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                ) : null}
              </div>
              <div className={styles.statusBar}>
                {val.status === "waiting_payment"
                  ? "Waiting Payment and Proof Image."
                  : null}
                {val.status === "waiting_verification"
                  ? "Waiting for confirmation from admin."
                  : null}
                {val.status === "on_pickup" ? "On pick up truck" : null}
                {val.status === "completed" ? "Completed" : null}
                {val.status === "canceled" ? "Transaction Failed" : null}

                {/* Waiting Verification ,On Pick Up, Completed */}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderDataReward = () => {
    console.log(dataRewardTransaction);
    return dataRewardTransaction.map((val) => {
      return (
        <div className={styles.horizontalCardContainer}>
          <div className={styles.transactionNumber}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              Reward ID : 110498{val.id}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Reward Name : {val.title}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
              Category : {val.categoryname}
            </div>
          </div>
          <div className={styles.UserDetail}>
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
              User Details
            </div>
            <div className={styles.wrappers}>
              <div>
                <div>Username:{val.username}</div>
                <div>Email :{val.email}</div>
                <div>Points redeemed:{val.decreasedPoints} Points</div>
              </div>
            </div>
          </div>
          <div className={styles.actionBox}>
            <div className="d-flex justify-content-center">
              <div style={{ fontSize: 18, fontFamily: "sanfransiscobold" }}>
                Reward Details
              </div>
            </div>
            <div>Price: {val.priceDescription}</div>
            <div>Reward status: {val.status}</div>
          </div>
        </div>
      );
    });
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
            Confirm Pick Up
          </div>
          <div
            className="manage_transaksi_button"
            onClick={() => handleContent(3)}
          >
            Program Transaction
          </div>
          <div
            className="manage_transaksi_button"
            onClick={() => handleContent(4)}
          >
            Reward Transaction
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          {confirmPayment
            ? renderDataWaitForPayment()
            : // HORIZONTAL CARD START
            confirmPickUp
            ? renderDataConfirmPickup()
            : // HORIZONTAL CARD END
            ProgramTransaction
            ? renderDataAllProgram()
            : RewardTransaction
            ? renderDataReward()
            : null}
        </MDBCol>
      </MDBRow>
      {confirmPayment ? (
        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5 mr-5 pr-5 float-right" color="teal">
              <MDBPageItem
                disabled={pageConfirm === 0}
                onClick={() => getpaginationdata(pageConfirm / 6 - 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              {renderpagination1()}
              <MDBPageItem
                disabled={Math.ceil(pageConfirm / 6) === pageConfirm / 6 + 1}
                onClick={() => getpaginationdata(pageConfirm / 6 + 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
      ) : confirmPickUp ? (
        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5 mr-5 pr-5 float-right" color="teal">
              <MDBPageItem
                disabled={pageConfirmPickup === 0}
                onClick={() => getpaginationdata(pageConfirmPickup / 6 - 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              {renderpagination2()}
              <MDBPageItem
                disabled={
                  Math.ceil(pageConfirmPickup / 6) === pageConfirmPickup / 6 + 1
                }
                onClick={() => getpaginationdata(pageConfirmPickup / 6 + 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
      ) : ProgramTransaction ? (
        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5 mr-5 pr-5 float-right" color="teal">
              <MDBPageItem
                disabled={pageTotalTransaction === 0}
                onClick={() => getpaginationdata(pageTotalTransaction / 6 - 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              {renderpagination3()}
              <MDBPageItem
                disabled={
                  Math.ceil(pageTotalTransaction / 6) ===
                  pageTotalTransaction / 6 + 1
                }
                onClick={() => getpaginationdata(pageTotalTransaction / 6 + 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
      ) : RewardTransaction ? (
        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5 mr-5 pr-5 float-right" color="teal">
              <MDBPageItem
                disabled={pageRewardTransaction === 0}
                onClick={() => getpaginationdata(pageRewardTransaction / 6 - 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              {renderpagination4()}
              <MDBPageItem
                disabled={
                  Math.ceil(pageRewardTransaction / 6) ===
                  pageRewardTransaction / 6 + 1
                }
                onClick={() => getpaginationdata(pageRewardTransaction / 6 + 1)}
              >
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
      ) : null}
    </MDBContainer>
  );
};

export default ManageTransaksi;
