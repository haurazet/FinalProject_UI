import React, { useState, useEffect, useContext } from "react";
import styles from "./TransactionHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faCheck,
  faUserClock,
  faTruckLoading,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
import Pagination from "../../components/Pagination/Pagination";
import Axios from "axios";
import { MDBBtn } from "mdbreact";
import { API_URL } from "../../support/Apiurl";

const TransactionHistory = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const [data, setdata] = useState([
    {
      id: 12313,
      image: `${API_URL}/REWARD/REWARD1.jpg`,
      programName: "Save Earth",
      firstName: "asd",
      address: "asd",
      phoneNumber: "1123123",
      status: "payment",
    },
    {
      id: 12313,
      image: `${API_URL}/REWARD/REWARD1.jpg`,
      programName: "Save Earth",
      firstName: "asd",
      address: "asd",
      phoneNumber: "1123123",
      status: "payment",
    },
    {
      id: 12313,
      image: `${API_URL}/REWARD/REWARD1.jpg`,
      programName: "Save Earth",
      firstName: "asd",
      address: "asd",
      phoneNumber: "1123123",
      status: "payment",
    },
    {
      id: 12313,
      image: `${API_URL}/REWARD/REWARD1.jpg`,
      programName: "Save Earth",
      firstName: "asd",
      address: "asd",
      phoneNumber: "1123123",
      status: "payment",
    },
    {
      id: 12313,
      image: `${API_URL}/REWARD/REWARD1.jpg`,
      programName: "Save Earth",
      firstName: "asd",
      address: "asd",
      phoneNumber: "1123123",
      status: "payment",
    },
    {
      id: 12313,
      image: `${API_URL}/REWARD/REWARD1.jpg`,
      programName: "Save Earth",
      firstName: "asd",
      address: "asd",
      phoneNumber: "1123123",
      status: "payment",
    },
    {
      id: 12313,
      image: `${API_URL}/REWARD/REWARD1.jpg`,
      programName: "Save Earth",
      firstName: "asd",
      address: "asd",
      phoneNumber: "1123123",
      status: "payment",
    },
  ]);
  const [search, setsearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const [uploaded, setuploaded] = useState(true);
  const [image, setImage] = useState({ preview: "", raw: null });

  const onClickUploadButton = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image.raw);
    var token = localStorage.getItem("token");
    var Headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    Axios.post(`${API_URL}/users/proofimage`, formData, Headers)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const imageInput = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      console.log(image);
    }
  };

  const renderCard = () => {
    return currentUser.map((val, index) => {
      return (
        <Row className="mb-2">
          <Col>
            {/* Vertical Card Render */}
            <div className={styles.horizontalCard}>
              <div className={styles.CardBoxLeft}>
                <Row>
                  <Col>
                    <div>
                      <b className="ml-2">No.Transaction:</b>
                      {val.id}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="ml-3">
                      <img width="150px" height="95px" src={val.image} alt="" />
                    </div>
                  </Col>
                  <Col>
                    <div>{val.programName}</div>
                  </Col>
                </Row>
              </div>
              <div className={styles.CardBoxMid}>
                <b className="ml-2">Delivery Details</b>
                <div className="ml-2">Name:{val.firstName}</div>
                <div className="ml-2">Address:{val.address}</div>
                <div className="ml-2">Phone Number:{val.phoneNumber}</div>
              </div>
              <div>
                <div className={styles.CardBoxRight}>
                  <div className={styles.boxLeft}>
                    <div>
                      <b>Transacation Status</b>
                    </div>
                    <div className={styles.spaceBetween}>
                      {uploaded ? (
                        <div className={styles.dotColor}>
                          <FontAwesomeIcon icon={faCloudUploadAlt} />
                        </div>
                      ) : (
                        <div className={styles.dot}>
                          <FontAwesomeIcon icon={faCloudUploadAlt} />
                        </div>
                      )}
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
                    <div className={styles.statusBar}>
                      Waiting for Payment Proof
                    </div>
                  </div>
                  <div className={styles.boxRight}>
                    <div className="mt-4 input-group">
                      <div className="input-group-prepend">
                        <span className={styles.uploadButton}>
                          <div
                            style={{ fontWeight: "bolder" }}
                            onClick={onClickUploadButton}
                          >
                            Upload
                          </div>
                        </span>
                      </div>
                      <div>
                        <input
                          type="file"
                          style={{ width: 200 }}
                          onChange={imageInput}
                        />
                        {image.preview ? (
                          <img width="30px" height="30px" src={image.preview} />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      );
    });
  };

  useEffect(() => {
    setdata(data);
    console.log(currentUser);
  }, []);

  const toggle = () => setOpen(!dropdownOpen);

  // Get Current Post
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = data.slice(indexOfFirstUser, indexOfLastUser);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.marginTop}>
      <Container fluid>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center border">
              <h1>History</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="d-flex justify-content-center btn-group btn-group-lg mb-4"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-primary btn-lg">
                Confirm Payment
              </button>
              <button type="button" className="btn btn-warning btn-lg">
                Confirm Received items
              </button>
              <button type="button" className="btn btn-danger btn-lg">
                History
              </button>
            </div>
          </Col>
        </Row>
        {renderCard()}
        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination
              userPerPage={userPerPage}
              totalUser={data.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TransactionHistory;
