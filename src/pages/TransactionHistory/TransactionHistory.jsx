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
  const [data, setdata] = useState([]);
  const [filterstatus, setfilterstatus] = useState("All");
  const [search, setsearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const [uploaded, setuploaded] = useState(true);
  const [image, setImage] = useState({ preview: "", raw: "" });

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
    }

    // console.log(e.target.files[0]);
    // setimage(e.target.files[0].name);
    // console.log(image);
    // console.log(image);
    // setimage();
    // console.log(image);
    // console.log(e.target.files[0]);
    // setimage(e.target.files[0]);
    // console.log(image);
    // setimage()
  };
  // const renderData = () => {
  //   if (filterstatus === "All") {
  //     return currentUser.map((value, index) => {
  //       console.log(index);
  //       return (
  //         <tr key={index}>
  //           <td>{value.transactionId}</td>
  //           <td>
  //             {value.status === "waiting_payment" ? (
  //               <button className="badge badge-info" disabled>
  //                 Waiting for Payment
  //               </button>
  //             ) : value.status === "waiting_verification" ? (
  //               <button className="badge badge-danger" disabled>
  //                 Waiting for verification
  //               </button>
  //             ) : value.status === "waiting_pickup" ? (
  //               <button className="badge badge-primary" disabled>
  //                 Wait for pickup
  //               </button>
  //             ) : value.status === "item_pickedup" ? (
  //               <button className="badge badge-success" disabled>
  //                 Picked Up
  //               </button>
  //             ) : value.status === "completed" ? (
  //               <button className="badge badge-success" disabled>
  //                 Completed
  //               </button>
  //             ) : null}
  //           </td>
  //           <td>{value.program}</td>
  //           <td>
  //             <button className="btn btn-primary mt-0">Detail</button>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   } else if (
  //     filterstatus === "Pending" ||
  //     "Onprocess" ||
  //     "Completed" ||
  //     "Failed"
  //   ) {
  //     const filteredData = data.filter((val) => {
  //       return val.status === filterstatus;
  //     });
  //     const currentUser = filteredData.slice(indexOfFirstUser, indexOfLastUser);
  //     return currentUser.map((value, index) => {
  //       return (
  //         <tr key={index}>
  //           <td>{value.transactionId}</td>
  //           <td>
  //             {value.status === "Pending" ? (
  //               <button className="badge badge-info" disabled>
  //                 Pending
  //               </button>
  //             ) : value.status === "Failed" ? (
  //               <button className="badge badge-danger" disabled>
  //                 Failed
  //               </button>
  //             ) : value.status === "Onprocess" ? (
  //               <button className="badge badge-primary" disabled>
  //                 On Process
  //               </button>
  //             ) : value.status === "Completed" ? (
  //               <button className="badge badge-success" disabled>
  //                 Completed
  //               </button>
  //             ) : null}
  //           </td>
  //           <td>{value.program}</td>
  //           <td>
  //             <button className="btn btn-primary mt-0">Detail</button>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   }
  // };

  // const HandleFilter = (e) => {
  //   setfilterstatus(e.target.name);
  // };

  // const HandleSearch = (e) => {
  //   setsearch(e.target.value);
  //   if (e.target.value === "") {
  //     setsearch(data);
  //   } else {
  //     let stringify = e.target.value.toString();
  //     let transactionFilter = data.filter((data) =>
  //       data.transactionId.toString().includes(stringify)
  //     );
  //     setsearch(transactionFilter);
  //   }
  // };
  useEffect(() => {
    setsearch(data);
    console.log(currentUser);
  }, []);

  const toggle = () => setOpen(!dropdownOpen);

  // Get Current Post
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = search.slice(indexOfFirstUser, indexOfLastUser);
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
        <Row>
          <Col>
            {/* Vertical Card Render */}
            <div className={styles.horizontalCard}>
              <div className={styles.CardBoxLeft}>
                <Row>
                  <Col>
                    <div>
                      <b className="ml-2">No.Transaction:</b>12090090
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="ml-3">
                      <img
                        width="150px"
                        height="95px"
                        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&w=1000&q=80"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col>
                    <div>Save Earth With Tesla</div>
                  </Col>
                </Row>
              </div>
              <div className={styles.CardBoxMid}>
                <b className="ml-2">Delivery Details</b>
                <div className="ml-2">Name:Fuad</div>
                <div className="ml-2">Address:Setiabudi Street</div>
                <div className="ml-2">Phone Number:081245108073</div>
              </div>
              <div>
                <div className={styles.CardBoxRight}>
                  <div className={styles.boxLeft}>
                    <div>
                      <b>Transacation History</b>
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
                        {/* <input
                          type="file"
                          // onChange={imageInput}
                          onChange={(e) => imageInput(e)}
                          className="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        /> */}
                        <input
                          type="file"
                          style={{ width: 200 }}
                          onChange={(e) => imageInput(e)}
                        />
                        {image.preview ? (
                          <img width="30px" height="30px" src={image.preview} />
                        ) : null}
                        {/* <label
                          className="custom-file-label"
                          htmlFor="inputGroupFile01"
                        >
                          Choose file
                        </label> */}
                      </div>
                    </div>
                    {/* <button>asd</button> */}
                    {/* <MDBBtn color="success" onClick={onClickUploadButton}>
                      Upload
                    </MDBBtn> */}
                    {/* <button>asd</button> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    // <div className={styles.marginTop}>
    //   <Container fluid>
    //     <Row label="Title">
    //       <Col>
    //         <div className={styles.flexboxTitle}>
    //           <div>
    //             <h1>History Transaksi</h1>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col md="12" lg="6">
    //         <div className="d-flex justify-content-center mt-3">
    //           <input
    //             type="number"
    //             placeholder="Transaction Id"
    //             onChange={HandleSearch}
    //           />
    //           <button>Search</button>
    //         </div>
    //       </Col>
    //       <Col md="12" lg="6" className="d-flex justify-content-center mt-2">
    //         <b className="mt-3">Transaction Status:</b>
    //         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    //           <DropdownToggle caret color="info">
    //             {filterstatus}
    //           </DropdownToggle>
    //           <DropdownMenu>
    //             <DropdownItem onClick={HandleFilter} name="All">
    //               All
    //             </DropdownItem>
    //             <DropdownItem onClick={HandleFilter} name="Pending">
    //               Waiting for Payment
    //             </DropdownItem>
    //             <DropdownItem onClick={HandleFilter} name="Onprocess">
    //               Waiting for verification
    //             </DropdownItem>
    //             <DropdownItem onClick={HandleFilter} name="Completed">
    //               Wait for pickup
    //             </DropdownItem>
    //             <DropdownItem onClick={HandleFilter} name="Failed">
    //               Picked Up
    //             </DropdownItem>
    //             <DropdownItem onClick={HandleFilter} name="Failed">
    //               Completed
    //             </DropdownItem>
    //           </DropdownMenu>
    //         </ButtonDropdown>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col md="12" lg="12">
    //         <Table responsive dark>
    //           <thead>
    //             <tr>
    //               <th>Transaction Id</th>
    //               <th>Status</th>
    //               <th>Program Name</th>
    //               <th>Detail</th>
    //             </tr>
    //           </thead>
    //           <tbody>{renderData()}</tbody>
    //         </Table>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col className="d-flex justify-content-center">
    //         <Pagination
    //           className="color_pagination"
    //           userPerPage={userPerPage}
    //           totalUser={search.length}
    //           paginate={paginate}
    //         />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default TransactionHistory;
