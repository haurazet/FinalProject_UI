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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faCheck,
  faUserClock,
  faTruckLoading,
} from "@fortawesome/free-solid-svg-icons";

const ManageTransaksi = () => {
  const [confirmPayment, setConfirmPayment] = useState(true);
  const [ProgramTransaction, setProgramTransaction] = useState(false);
  const [RewardTransaction, setRewardTransaction] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(confirmPayment);
    console.log(ProgramTransaction);
    console.log(RewardTransaction);
  }, [confirmPayment]);

  const handleContent = (value) => {
    switch (value === value) {
      case value === 1:
        return (
          setConfirmPayment(true),
          setProgramTransaction(false),
          setRewardTransaction(false)
        );
      case value === 2:
        return (
          setConfirmPayment(false),
          setProgramTransaction(true),
          setRewardTransaction(false)
        );
      case value === 3:
        return (
          setConfirmPayment(false),
          setProgramTransaction(false),
          setRewardTransaction(true)
        );
    }
  };
  const showPhoto = (linkImage) => {
    Swal.fire({
      title: "Bukti Transfer",
      text: "Modal with a custom image.",
      imageUrl: linkImage,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const onClickAccept = () => {
    console.log("accept");
  };
  const onClickDecline = () => {
    console.log("decline");
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
        <MDBCol className="d-flex  mt-4">
          {confirmPayment ? (
            // HORIZONTAL CARD START
            <div className={styles.horizontalCardContainer}>
              <div className={styles.transactionNumber}>
                <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
                  Transaction Number : 129012
                </div>
                <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
                  Program Name: asd
                </div>
                <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
                  Username: asdasd
                </div>
              </div>
              <div className={styles.UserDetail}>
                <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
                  Payment Detail
                </div>
                <div className={styles.wrappers}>
                  <div>
                    <div>Payment method:</div>
                    <div>First Name:</div>
                    <div>Phone Number:</div>
                  </div>
                  <div>
                    <div className={styles.boxFoto}>
                      <img
                        onClick={() =>
                          showPhoto("../../images/registertop.jpg")
                        }
                        width="100%"
                        height="100%"
                        src="../../images/registertop.jpg"
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
                    onClick={onClickDecline}
                  >
                    DECLINE
                  </div>
                  <div className={styles.acceptButton} onClick={onClickAccept}>
                    ACCEPT
                  </div>
                </div>
              </div>
            </div>
          ) : // HORIZONTAL CARD END
          ProgramTransaction ? (
            <div className={styles.horizontalCardContainer}>
              <div className={styles.transactionNumber}>
                <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
                  Transaction Number : 129012
                </div>
                <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
                  Program Name: asd
                </div>
                <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
                  Username: asdasd
                </div>
              </div>
              <div className={styles.UserDetail}>
                <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
                  Payment Detail
                </div>
                <div className={styles.wrappers}>
                  <div>
                    <div>Payment method:</div>
                    <div>First Name:</div>
                    <div>Phone Number:</div>
                  </div>
                  <div>
                    <div className={styles.boxFoto}>
                      <img
                        onClick={() =>
                          showPhoto("../../images/registertop.jpg")
                        }
                        width="100%"
                        height="100%"
                        src="../../images/registertop.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.actionBox}>
                {/* <div className="d-flex justify-content-center">
                  <div
                    style={{ fontSize: 18, fontFamily: "sanfransiscobold" }}
                  ></div>
                </div> */}
                <div className="ml-2">
                  <div>
                    <b>Transacation Status</b>
                  </div>
                  <div className={styles.spaceBetween}>
                    {/* Waiting Payment */}
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>

                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>
                    {/* Waiting Payment */}
                    {/* Waiting Verification */}
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faUserClock} />
                    </div>

                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faUserClock} />
                    </div>
                    {/* Waiting Verification */}
                    {/* On Pick Up */}
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faTruckLoading} />
                    </div>

                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faTruckLoading} />
                    </div>
                    {/* On Pick Up */}
                    {/* Completed */}
                    <div className={styles.dotColor}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>

                    <div className={styles.dot}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    {/* Completed */}
                  </div>
                  <div className={styles.statusBar}>
                    Waiting Payment, Waiting Verification ,On Pick Up, Completed
                  </div>
                </div>
              </div>
            </div>
          ) : RewardTransaction ? (
            <div className={styles.horizontalCardContainer}>
              <div className={styles.transactionNumber}>
                <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
                  Reward ID :
                </div>
                <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
                  Reward Name :
                </div>
                <div style={{ fontFamily: "sanfransisco", fontSize: 16 }}>
                  Category :
                </div>
              </div>
              <div className={styles.UserDetail}>
                <div style={{ fontFamily: "sanfransiscobold", fontSize: 18 }}>
                  User Details
                </div>
                <div className={styles.wrappers}>
                  <div>
                    <div>Username:</div>
                    <div>Email :</div>
                    <div>Points redeemed: Points</div>
                  </div>
                </div>
              </div>
              <div className={styles.actionBox}>
                <div className="d-flex justify-content-center">
                  <div style={{ fontSize: 18, fontFamily: "sanfransiscobold" }}>
                    Reward Details
                  </div>
                </div>
                <div>Price:</div>
                <div>Reward Description: </div>
              </div>
            </div>
          ) : null}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ManageTransaksi;
