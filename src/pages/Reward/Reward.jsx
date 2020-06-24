import React, { useEffect, useState } from "react";
import styles from "./Reward.module.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { NiceCard } from "../../components/NiceCard/NiceCard";
import { API_URL } from "../../support/Apiurl";
import Axios from "axios";
import { connect } from "react-redux";

const Reward = ({ Auth }) => {
  const [datacat1, setdatacat1] = useState([]);
  const [datacat2, setdatacat2] = useState([]);
  const [datacat3, setdatacat3] = useState([]);
  const [datacat4, setdatacat4] = useState([]);

  useEffect(() => {
    getData();
    console.log(Auth.points);
  }, []);

  const getData = () => {
    Axios.all([
      Axios.get(`${API_URL}/reward/getrewarduser?categoryid=${1}`),
      Axios.get(`${API_URL}/reward/getrewarduser?categoryid=${2}`),
      Axios.get(`${API_URL}/reward/getrewarduser?categoryid=${3}`),
      Axios.get(`${API_URL}/reward/getrewarduser?categoryid=${4}`),
    ])
      .then((result1) => {
        setdatacat1(result1[0].data);
        setdatacat2(result1[1].data);
        setdatacat3(result1[2].data);
        setdatacat4(result1[3].data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const OnClickCard = (id, title, price) => {
  //   console.log(Auth.isLogin);
  //   console.log(Auth.points);
  //   if (Auth.isLogin === false) {
  //     Swal.fire({
  //       title: "Please Login your account before redeem the reward",
  //     });
  //   }
  //   if (Auth.points < price) {
  //     Swal.fire({
  //       title: "Sorry, your RECYCLY Points is not enough.",
  //     });
  //   }
  //   if (Auth.points >= price) {
  //     Swal.fire({
  //       title: `Redeem`,
  //       text: `This reward will cost you ${price} points.
  //               Do you want to proceed? `,
  //       confirmButtonText: "Yes",
  //       showCancelButton: true,
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         let obj = {
  //           status: "completed",
  //           userId: Auth.id,
  //           rewardId: id,
  //           decreasedPoints: price,
  //         };
  //         Axios.post(`${API_URL}/reward/buyreward`, obj).then((result) => {
  //           Swal.fire(
  //             "Redeem Success!",
  //             "Thank you for helping us to make world a better place.",
  //             "success"
  //           );
  //         });
  //       }
  //     });
  //   }
  // };

  const renderCardCat1 = () => {
    return datacat1.map((val, index) => (
      <NiceCard
        key={val.id}
        onClick={`/rewarddetails/${val.id}`}
        title={val.title}
        description={val.description}
        imageAdress={API_URL + val.image}
        price="Price"
        priceDescription={val.priceDescription}
        // type="Stock"
        // typeDescription={val.stok}
      />
    ));
  };
  const renderCardCat2 = () => {
    return datacat2.map((val, index) => (
      <NiceCard
        key={val.id}
        onClick={`/rewarddetails/${val.id}`}
        title={val.title}
        description={val.description}
        imageAdress={API_URL + val.image}
        price="Price"
        priceDescription={val.priceDescription}
        // type="Stock"
        // typeDescription={val.stok}
      />
    ));
  };
  const renderCardCat3 = () => {
    return datacat3.map((val, index) => (
      <NiceCard
        key={val.id}
        onClick={`/rewarddetails/${val.id}`}
        title={val.title}
        description={val.description}
        imageAdress={API_URL + val.image}
        price="Price"
        priceDescription={val.priceDescription}
        // type="Stock"
        // typeDescription={val.stok}
      />
    ));
  };
  const renderCardCat4 = () => {
    return datacat4.map((val, index) => (
      <NiceCard
        key={val.id}
        onClick={`/rewarddetails/${val.id}`}
        title={val.title}
        description={val.description}
        imageAdress={API_URL + val.image}
        price="Price"
        priceDescription={val.priceDescription}
        // type="Stock"
        // typeDescription={val.stok}
      />
    ));
  };

  return (
    <MDBContainer fluid>
      <MDBRow className={styles.RowReward}>
        <MDBCol lg="5" className={styles.flexDir}>
          <div className={styles.redeemBox}>Redeem Your Points</div>
          <div className={styles.descBox}>
            Through many of our programs, we reward you with RECYCLY points for
            qualifying waste. These points are redeemable for a cash payment to
            the non-profit organization or school of your choice and other
            charitable gifts.
          </div>
          <div className={styles.pointBox}>
            Your Current RECYCLY Points:{Auth.points ? Auth.points : 0}
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className={styles.rewardDescriptions}>
        <MDBCol className="d-flex justify-content-center">
          <div className={styles.boxtoMiddle}>
            <MDBRow>
              <MDBCol className={styles.colorHelp}>Help the Environment</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className={styles.descriptionText}>
                Donate your points to protect the atmosphere and promote
                environmental research and appreciation.
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className={styles.BoxMiddle}>{renderCardCat1()}</MDBRow>
      <MDBRow className={styles.rewardDescriptions}>
        <MDBCol className="d-flex justify-content-center">
          <div className={styles.boxtoMiddle}>
            <MDBRow>
              <MDBCol className={styles.colorHelp}>Animal</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className={styles.descriptionText}>
                Donate your points to provide people in need with direct
                services.
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className={styles.BoxMiddle}>{renderCardCat2()}</MDBRow>
      <MDBRow className={styles.rewardDescriptions}>
        <MDBCol className="d-flex justify-content-center">
          <div className={styles.boxtoMiddle}>
            <MDBRow>
              <MDBCol className={styles.colorHelp}>Human Services</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className={styles.descriptionText}>
                Donate your points to provide people in need with direct
                services.
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className={styles.BoxMiddle}>{renderCardCat3()}</MDBRow>
      <MDBRow className={styles.rewardDescriptions}>
        <MDBCol className="d-flex justify-content-center">
          <div className={styles.boxtoMiddle}>
            <MDBRow>
              <MDBCol className={styles.colorHelp}>Education</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className={styles.descriptionText}>
                Donate your points to create education opportunities for
                students and provide ongoing support for our schools.
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className={styles.BoxMiddle}>{renderCardCat4()}</MDBRow>
    </MDBContainer>
  );
};

const MapstatetoProps = ({ Auth }) => {
  console.log(Auth);
  return {
    Auth,
  };
};

export default connect(MapstatetoProps, null)(Reward);
