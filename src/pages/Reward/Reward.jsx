import React, { useEffect, useState, useReducer } from "react";
import styles from "./Reward.module.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { NiceCard } from "../../components/NiceCard/NiceCard";
import Pagination from "../../components/Pagination/Pagination";
import { API_URL } from "../../support/Apiurl";
import Axios from "axios";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { text } from "@fortawesome/fontawesome-svg-core";
import { KeepLogin } from "../../redux/actions";

const Reward = ({ Auth }) => {
  const [page, setpage] = useState(0);
  const [totalreward, settotalreward] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(6);
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
    console.log(Auth.points);
  }, [totalreward]);

  const getData = () => {
    Axios.get(`${API_URL}/reward/getreward`)
      .then((result) => {
        console.log(result.data);
        setdata(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const getData = () => {
  // //   Axios.get(`${API_URL}`).then((res) => {
  // //     console.log(res);
  // //   });
  // // };

  // const getData = (search) => {
  //   Axios.get(
  //     search
  //       ? `${API_URL}/reward/totalreward?search=${search}`
  //       : `${API_URL}/reward/totalreward`,
  //     {}
  //   )
  //     .then((res) => {
  //       console.log(res);
  //       settotalreward(res.data.total);
  //       Axios.get(
  //         search
  //           ? `${API_URL}/reward/getrewarduser?search=${search}&page=${page}`
  //           : `${API_URL}/reward/getrewarduser?page=${page}`
  //       )
  //         .then((res1) => {
  //           // window.scrollTo(0, 0);
  //           console.log(res1);
  //           setdata(res1.data);
  //           // setisloading(false);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const OnClickCard = (id, title, price) => {
    console.log(Auth.isLogin);
    console.log(Auth.points);
    if (Auth.isLogin === false) {
      Swal.fire({
        title: "Please Login your account before redeem the reward",
      });
    }
    if (Auth.points < price) {
      Swal.fire({
        title: "Sorry, your RECYCLY Points is not enough.",
      });
    }
    if (Auth.points >= price) {
      Swal.fire({
        title: `Redeem`,
        text: `This reward will cost you ${price} points.
                Do you want to proceed? `,
        confirmButtonText: "Yes",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let obj = {
            status: "completed",
            userId: Auth.id,
            rewardId: id,
            decreasedPoints: price,
          };
          Axios.post(`${API_URL}/reward/buyreward`, obj).then((result) => {
            Swal.fire(
              "Redeem Success!",
              "Thank you for helping us to make world a better place.",
              "success"
            );
          });
        }
      });
    }
  };

  const renderCard = () => {
    return currentUser.map((val, index) => (
      <NiceCard
        key={val.id}
        onClick={() => OnClickCard(val.id, val.title, val.priceDescription)}
        title={val.title}
        description={val.description}
        imageAdress={API_URL + val.image}
        price="Price"
        priceDescription={val.priceDescription}
        type="Stock"
        typeDescription={val.stok}
      />
    ));
  };

  // Get Current Post

  console.log(data);
  const indexOfLastUser = currentPage * userPerPage; // 6
  const indexOfFirstUser = indexOfLastUser - userPerPage; //0
  const currentUser = data.slice(indexOfFirstUser, indexOfLastUser);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={styles.marginTop}>
      <MDBContainer className={styles.container}>
        <MDBRow className={styles.RowReward}>
          <MDBCol lg="5" className={styles.flexDir}>
            <div className={styles.redeemBox}>Redeem Your Points</div>
            <div className={styles.descBox}>
              Through many of our programs, we reward you with TerraCycle points
              for qualifying waste. These points are redeemable for a cash
              payment to the non-profit organization or school of your choice
              and other charitable gifts.
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow></MDBRow>
        <MDBRow>
          <MDBCol>
            {" "}
            <div className="active-pink-3 active-pink-4 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Search by Name "
                aria-label="Search"
                // onChange={handleSearch}
              />
            </div>
          </MDBCol>
          <MDBCol>
            <div>
              <select
                className="browser-default custom-select"
                // onChange={handleSortBy}
                defaultValue=""
              >
                <option value="">Sort By</option>
                <option value="cheapest">Cheapest</option>
                <option value="mostexpensive">Most Expensive</option>
                <option value="nameaz">Name A-Z</option>
                <option value="nameza">Name Z-A</option>
              </select>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>{renderCard()}</MDBRow>
        <MDBRow>
          <MDBCol className="d-flex justify-content-center mt-4">
            <Pagination
              userPerPage={userPerPage}
              totalUser={data.length}
              paginate={paginate}
              // name="page"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

const MapstatetoProps = ({ Auth }) => {
  console.log(Auth);
  return {
    Auth,
  };
};

export default connect(MapstatetoProps, { KeepLogin })(Reward);
