import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./RewardCheckout.module.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { API_URL } from "../../support/Apiurl";
import { connect } from "react-redux";

const RewardCheckout = ({ Auth: { first_name } }) => {
  // const [Data,setData]=useState([])
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    setQuote(Math.floor(Math.random() * 10 + 1));
  }, []);

  // const getData=()=>{
  //     Axios.get(`${API_URL}/`)
  // }

  return (
    <MDBContainer fluid>
      <MDBRow className={styles.HeaderContainer}>
        <MDBCol className={styles.thankYouBox}>
          {/* <div className={styles.thankYouBox}>
            <div>Thank you</div>
          </div> */}
          <div className={styles.boxFlex}>
            <div
              style={{
                fontSize: 25,
                fontFamily: "sanfransiscobold",
                color: "white",
              }}
            >
              Your Redeem Checkout is succeed!
            </div>
            <div
              style={{
                fontSize: 18,
                fontFamily: "sanfransisco",
                marginLeft: 100,
                color: "white",
              }}
            >
              Your points has been redeemed
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className={styles.flexContent}>
          <div className={styles.wrapperContent}>
            {/* <div className={styles.flexContents}> */}
            <div style={{ fontFamily: "sanfransiscobold", fontSize: 30 }}>
              Thank You , {first_name}
            </div>
            <div style={{ fontFamily: "sanfransisco", fontSize: 18 }}>
              <p>
                By redeem this points you contribute to save the Earth and help
                people to have better life.
              </p>
              {quote < 3 ? (
                <p>
                  How can we be so arrogant? The planet is, was, and always will
                  be stronger than us. We can’t destroy it; if we overstep the
                  mark, the planet will simply erase us from its surface and
                  carry on existing. Why dont they start talking about not
                  letting the planet destroy us? – Paulo Coelho
                </p>
              ) : quote >= 3 && quote < 6 ? (
                <p>
                  When people align around shared political, social, economic or
                  environmental values, and take collective action, thinking and
                  behaviour that compromises the lives of millions of people
                  around the world can truly change. – Simon Mainwaring
                </p>
              ) : quote >= 6 ? (
                <p>
                  Sunshine is delicious, rain is refreshing, wind braces us up,
                  snow is exhilarating; there is really no such thing as bad
                  weather, only different kinds of good weather. – John Ruskin{" "}
                </p>
              ) : null}
            </div>
            <div className={styles.flextoCorner}>
              <div
                style={{
                  color: 18,
                  fontFamily: "sanfransiscobold",
                  fontWeight: "bolder",
                }}
              >
                Sincerely
              </div>
              <div style={{ fontFamily: "sanfransisco" }}>RECYCLY TEAM</div>
            </div>
            {/* </div> */}
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

export default connect(MapstatetoProps, null)(RewardCheckout);
