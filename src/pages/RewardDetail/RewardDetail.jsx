import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import styles from "./RewardDetail.module.css";
import ButtonNeon from "../../components/ButtonNeon/ButtonNeon";
import { NiceCard } from "../../components/NiceCard/NiceCard";
import Axios from "axios";
import { API_URL } from "../../support/Apiurl";
import { Link, Redirect, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

const RewardDetail = ({
  Auth: { points },
  match: {
    params: { idreward },
  },
}) => {
  const [Data, setData] = useState({});
  const [otherData, setOtherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    console.log("getdata");
    Axios.all([
      Axios.get(`${API_URL}/reward/rewarddetails?id=${idreward}`),
      Axios.get(`${API_URL}/reward/getothergift?id=${idreward}`),
    ]).then((result) => {
      console.log(result[0].data[0]);
      setData(result[0].data[0]);
      setOtherData(result[1].data);
    });
  };

  const renderOtherData = () => {
    return otherData.map((val) => {
      return (
        <NiceCard
          key={val.id}
          onClick={`/rewarddetails/${val.id}`}
          title={val.title}
          description={val.description}
          imageAdress={API_URL + val.image}
          price="Price"
          priceDescription={val.priceDescription}
        />
      );
    });
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol className={styles.containerTitleBox}>
          <div className={styles.TitleBox}>
            {/* <MDBRow className={styles.lineHeight}>
              <MDBCol className={styles.fontsizetitle}>
                Back to{" "}
                <a style={{ color: "#9ac84a" }} href="/reward">
                  Reward
                </a>
              </MDBCol>
            </MDBRow> */}
            <MDBRow>
              <MDBCol md="12" sm="12">
                <div className={styles.boxTtileandphotos}>
                  <div className={styles.titleBoxes}>
                    <div className={styles.titleFont}>{Data.title}</div>
                    <div className={styles.priceandbuttonbox}>
                      <div>
                        <div className="d-flex">
                          <div style={{ fontSize: 40 }}>
                            {Data.priceDescription}
                          </div>
                          <div style={{ fontSize: 30, marginLeft: 10 }}>
                            points
                          </div>
                        </div>
                        <div>Currently Have : {points} points</div>
                      </div>
                      <div>
                        {/* <ButtonNeon text="REDEEM" /> */}
                        <button className="btn btn-success bt">REDEEM</button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.photos}>
                    <img
                      width="100%"
                      height="100%"
                      src={API_URL + Data.image}
                    />
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className={styles.wrappers}>
          {" "}
          <div className={styles.contentMid}>
            <p>{Data.p1}</p>
            <p>{Data.p2}</p>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div className={styles.otherGiftContainer}>
            <div className={styles.otherGiftFont}>OTHER GIFTS</div>
            <MDBRow>
              <div className={styles.otherGiftCard}>{renderOtherData()}</div>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
const MapstatetoProps = ({ Auth }) => {
  console.log(Auth);
  return {
    Auth,
  };
};

export default connect(MapstatetoProps, null)(RewardDetail);
