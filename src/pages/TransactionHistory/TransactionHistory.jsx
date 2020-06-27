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
import { MDBBtn, MDBPageItem, MDBPageNav } from "mdbreact";
import { API_URL } from "../../support/Apiurl";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { set } from "numeral";

const TransactionHistory = ({ match: { params } }) => {
  const [data, setdata] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const [totalTransactionHistory, setTotalTransactionHistory] = useState(0);
  const [image, setImage] = useState({ preview: "", raw: undefined });
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    Axios.get(
      filter
        ? `${API_URL}/transaction/totaltransactionhistory/${params.id}?filter=${filter}`
        : `${API_URL}/transaction/totaltransactionhistory/${params.id}`
    ).then((result) => {
      console.log(result.data);
      setTotalTransactionHistory(result.data);
      Axios.get(
        filter && sort
          ? `${API_URL}/transaction/datatransactionhistory/${params.id}?filter=${filter}&sort=${sort}&page=${page}`
          : filter
          ? `${API_URL}/transaction/datatransactionhistory/${params.id}?filter=${filter}&page=${page}`
          : sort
          ? `${API_URL}/transaction/datatransactionhistory/${params.id}?sort=${sort}&page=${page}`
          : `${API_URL}/transaction/datatransactionhistory/${params.id}?page=${page}`
      ).then((result1) => {
        console.log(result1.data);
        setdata(result1.data);
      });
    });
  };

  const onClickFilter = (e) => {
    let filter = e.target.value;
    console.log(filter);
    setFilter(filter);
    setRefresh(!refresh);
  };
  const onClickSort = (e) => {
    console.log(e.target.value);
    let sort = e.target.value;
    setSort(sort);
    setRefresh(!refresh);
  };

  const onClickUploadButton = (e, transactionId) => {
    if (image.raw === undefined) {
      Swal.fire({
        title: "choose your file first and then click upload button.",
      });
    } else {
      e.preventDefault();
      console.log("ini click upload", transactionId);
      // formData.append("image", image.raw);
      var token = localStorage.getItem("token");
      var formdata = new FormData();
      var obj = {
        id: transactionId,
      };
      var token = localStorage.getItem("token");
      var Headers = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      formdata.append("image", image.raw);
      formdata.append("data", JSON.stringify(obj));
      Axios.post(`${API_URL}/transaction/uploadpayment`, formdata, Headers)
        .then((result) => {
          Swal.fire({
            title: "Image has been uploaded",
            icon: "success",
          });
          setRefresh(!refresh);
        })
        .catch((err) => console.log(err));
    }
  };
  const imageInput = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      console.log(image);
    } else {
      setImage({
        preview: "",
        raw: undefined,
      });
    }
  };

  const getpaginationdata = (val) => {
    setPage(val * 6);
  };
  const renderpagination = () => {
    // console.log('masuk pagination')
    var totalpage = Math.ceil(totalTransactionHistory / 6);
    var arr = [];
    for (var i = 0; i < totalpage; i++) {
      arr.push(i);
    }
    return arr.map((val, index) => {
      return (
        <div key={index}>
          <MDBPageItem active={page / 6 === val}>
            <MDBPageNav onClick={() => getpaginationdata(val)}>
              {val + 1}
            </MDBPageNav>
          </MDBPageItem>
        </div>
      );
    });
  };

  const renderCard = () => {
    return data.map((val) => {
      return (
        <Row className="mb-2" key={val.id_transaksi}>
          <Col>
            {/* Vertical Card Render */}
            <div className={styles.horizontalCard}>
              <div className={styles.CardBoxLeft}>
                <Row>
                  <Col>
                    <div>
                      <b className="ml-2">
                        No.Transaction:202006{val.id_transaksi}
                      </b>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="ml-3">
                      <img
                        width="150px"
                        height="95px"
                        src={`${API_URL + val.image}`}
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col>
                    <div>{val.name}</div>
                  </Col>
                </Row>
              </div>
              <div className={styles.CardBoxMid}>
                <b className="ml-2">Delivery Details</b>
                <div className="ml-2">Name:{val.first_name}</div>
                <div className="ml-2">Address:{val.address}</div>
                <div className="ml-2">Phone Number:{val.phonenumber}</div>
              </div>
              <div>
                <div className={styles.CardBoxRight}>
                  <div className={styles.boxLeft}>
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
                      ) : val.status === "waiting_verification" ? (
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
                      ) : val.status === "on_pickup" ? (
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
                      ) : val.status === "completed" ? (
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
                    </div>
                  </div>
                  {val.status === "waiting_payment" ||
                  val.status === "canceled" ? (
                    <div className={styles.boxRight}>
                      <div className="mt-4 input-group">
                        <div className="input-group-prepend">
                          <span className={styles.uploadButton}>
                            <div
                              style={{ fontWeight: "bolder" }}
                              onClick={(e) =>
                                onClickUploadButton(e, val.id_transaksi)
                              }
                            >
                              Upload
                            </div>
                          </span>
                        </div>
                        <div>
                          <input
                            type="file"
                            defaultValue={Image}
                            style={{ width: 200 }}
                            onChange={(e) => imageInput(e)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      );
    });
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <Container fluid>
      <Row>
        <Col className={styles.Title_box}>Transaction History</Col>
      </Row>
      <Row>
        <Col>
          <div
            className="d-flex justify-content-between "
            role="group"
            aria-label="Basic example"
          >
            <div>
              <b style={{ fontFamily: "sanfransiscobold" }}>
                Filter By Status:
              </b>
              <select
                style={{ width: 500, marginBottom: 20 }}
                onChange={(e) => onClickFilter(e)}
              >
                <option value=""></option>
                <option value="waiting_payment">Waiting Payment</option>
                <option value="waiting_verification">
                  Waiting Admin Confirmation
                </option>
                <option value="on_pickup">On Pickup</option>
                <option value="completed">Completed</option>
                <option value="canceled">Failed</option>
              </select>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <b style={{ fontFamily: "sanfransiscobold" }}>Sort By:</b>
            <select style={{ width: 500 }} onChange={onClickSort}>
              <option value=""></option>
              <option value="create_time ASC">Newest</option>
              <option value="create_time DESC">Oldest</option>
            </select>
          </div>
        </Col>
      </Row>
      {renderCard()}
    </Container>
  );
};

const MapstatetoProps = ({ Auth }) => {
  console.log(Auth);
  return {
    Auth,
  };
};

export default connect(MapstatetoProps, null)(TransactionHistory);
