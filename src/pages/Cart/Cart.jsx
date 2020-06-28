import React, { Component } from "react";
import styles from "./Cart.module.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { API_URL } from "../../support/Apiurl";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

class Cart extends Component {
  state = {
    data: [],
    redirect: false,
  };

  componentDidMount() {
    Axios.get(
      `${API_URL}/reward/getcartdata?id=${this.props.match.params.userid}`
    )
      .then((result) => {
        this.setState({ data: result.data });
        console.log(this.state.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderCartData = () => {
    return this.state.data.map((val) => {
      return (
        <tr>
          <td>{val.title}</td>
          <td>{val.priceDescription}</td>
          <td>{val.qty}</td>
          <td>{val.priceDescription * val.qty}</td>
          <td>
            <a
              style={{ color: "green", fontWeight: "bolder" }}
              onClick={() => this.anchorDelete(val.id)}
            >
              X
            </a>
          </td>
        </tr>
      );
    });
  };

  refreshPage = () => {
    window.location.reload();
  };

  renderTotal = () => {
    if (this.state.data.length) {
      let totalPrice = 0;
      this.state.data.forEach(
        (val) => (totalPrice += val.priceDescription * val.qty)
      );
      return totalPrice;
    }
  };

  anchorDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to remove this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,remove it!",
    }).then((result) => {
      if (result.value) {
        Axios.put(`${API_URL}/reward/deletefromcart?id=${id}`)
          .then((result) => window.location.reload())
          .catch((err) => console.log(err));
      }
    });
  };

  onClickCheckout = () => {
    if (this.renderTotal() > this.props.Auth.points) {
      Swal.fire({
        icon: "error",
        title: "Sorry, your points is not enough to redeem this reward",
      });
    } else {
      Axios.put(
        `${API_URL}/reward/checkoutreward?userId=${
          this.props.Auth.id
        }&totalPoints=${this.renderTotal()}`
      )
        .then((result) => this.setState({ redirect: true }))
        .catch((err) => console.log(err));
    }
  };

  render() {
    const { points } = this.props.Auth;
    if (this.state.redirect) {
      return <Redirect to="/rewardcheckout" />;
    } else {
      return (
        <MDBContainer fluid>
          <MDBRow className={styles.containerCartHeader}>
            <MDBCol className={styles.flexboxHeader}>
              <div className={styles.boxHeader}>
                <div className="d-flex">
                  <div style={{ fontSize: 30, color: "#3797a4" }}>
                    <FontAwesomeIcon icon={faLeaf} />
                  </div>
                  <div className={styles.myCartText}>My Cart</div>
                </div>
                <div className={styles.pointsBox}>
                  {points
                    ? "Your Current Points: " + points
                    : "You have no points yet"}
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className={styles.contentWrapper}>
              <div className={styles.contentBox}>
                <div className={styles.titleContent}>
                  <div
                    style={{
                      fontSize: 27,
                      color: "#3797a4",
                      fontFamily: "sanfransiscobold",
                    }}
                  >
                    Shopping Chart Instructions
                  </div>
                  <div>
                    <a
                      href="/reward"
                      style={{
                        color: "#9ac84a",
                        fontFamily: "sanfransiscobold",
                      }}
                    >
                      Redeem More Points
                    </a>
                  </div>
                </div>
                <div className={styles.paragraph1}>
                  Every piece of waste you recycle turns into something good for
                  our planet and good for the organizations and schools you care
                  about.
                </div>
                <div className={styles.paragraph}>
                  When you're ready to complete your points redemption, click
                  "checkout" and you'll receive a confirmation message on
                  screen. A point redemption receipt will also be sent to the
                  email associated with your Recycly account. Please note: only
                  click 'checkout' once, double clicking can lead to errors or
                  the redemption being charged twice.
                </div>
                <div className={styles.paragraph}>
                  Additionally, cash donations are paid out twice a year. Please
                  contact team5JC12@recycly.com for more information on the next
                  payment date. Remember that the minimum cash redemption is
                  Rp.100.000,00 or 100 Recycly points.
                </div>
                {/* <MDBRow>
                      <MDBCol>asd</MDBCol>
                    </MDBRow> */}
                <div>
                  <div>
                    <MDBTable striped>
                      <MDBTableHead>
                        <tr>
                          <th>Reward</th>
                          <th>Cost</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>{this.renderCartData()}</MDBTableBody>
                    </MDBTable>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={this.refreshPage}
                    >
                      UPDATE CART
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={this.onClickCheckout}
                    >
                      CHECKOUT
                    </button>
                  </div>
                  <div
                    style={{
                      fontFamily: "sanfransiscobold",
                      color: "#3797a4",
                      fontSize: 25,
                    }}
                  >
                    {" "}
                    Total:{" "}
                    <a style={{ color: "black" }}>
                      {this.renderTotal()} points
                    </a>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
  }
}

const MapstatetoProps = ({ Auth }) => {
  console.log(Auth);
  return {
    Auth,
  };
};

export default connect(MapstatetoProps, null)(Cart);
