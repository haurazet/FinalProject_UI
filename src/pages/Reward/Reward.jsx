import React, { useEffect, useState, useReducer } from "react";
import styles from "./Reward.module.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBPageNav,
  MDBPageItem,
  MDBPagination,
} from "mdbreact";
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
  const [data, setdata] = useState([]);
  const [totalreward, setotalreward] = useState(0);
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");

  useEffect(() => {
    getData();
    console.log(Auth.points);
  }, [data]);

  const getData = () => {
    Axios.get(
      search
        ? `${API_URL}/reward/totalreward?search=${search}`
        : `${API_URL}/reward/totalreward`,
      {}
    )
      .then((result) => {
        setotalreward(result.data.total);
        console.log(sort);
        Axios.get(
          search
            ? `${API_URL}/reward/getrewarduser?search=${search}&page=${page}`
            : search && sort
            ? `${API_URL}/reward/getrewarduser?search=${search}&sort=${sort}&page=${page}`
            : sort
            ? `${API_URL}/reward/getrewarduser?sort=${sort}&page=${page}`
            : `${API_URL}/reward/getrewarduser?page=${page}`
        )
          .then((result1) => {
            console.log(result1);
            setdata(result1.data);
          })
          .catch((error1) => error1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getpaginationdata = (val) => {
    setpage(val * 6);
    getData();
  };
  const handleSearch = (e) => {
    let search = e.target.value;
    setsearch(search);
    getData();
  };

  const renderpagination = () => {
    // console.log('masuk pagination')
    var totalpage = Math.ceil(totalreward / 6);
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

  const handleSortBy = (e) => {
    console.log(e.target.value);
    let sort = e.target.value;
    setsort(sort);
    getData();
  };

  const renderCard = () => {
    return data.map((val, index) => (
      <NiceCard
        key={val.id}
        onClick={() => OnClickCard(val.id, val.title, val.priceDescription)}
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
    <div className={styles.marginTop}>
      <MDBContainer className={styles.container}>
        <MDBRow className={styles.RowReward}>
          <MDBCol lg="5" className={styles.flexDir}>
            <div className={styles.redeemBox}>Redeem Your Points</div>
            <div className={styles.descBox}>
              Through many of our programs, we reward you with RECYCLY points
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
                onChange={handleSearch}
                // onChange={handleSearch}
              />
            </div>
          </MDBCol>
          <MDBCol>
            <div>
              <select
                className="browser-default custom-select"
                onChange={handleSortBy}
              >
                <option value="">Sort By</option>
                <option value="priceDescription DESC">Most Expensive</option>
                <option value="priceDescription ASC">Cheapest</option>
              </select>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>{renderCard()}</MDBRow>
        <MDBRow>
          <MDBCol className="d-flex justify-content-center mt-4">
            <MDBRow>
              <MDBCol>
                <MDBPagination
                  className="mb-5 mr-5 pr-5 float-right"
                  color="teal"
                >
                  <MDBPageItem
                    disabled={page === 0}
                    onClick={() => getpaginationdata(page / 6 - 1)}
                  >
                    {/* <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav> */}
                  </MDBPageItem>
                  {renderpagination()}
                  <MDBPageItem
                    disabled={Math.ceil(totalreward / 6) === page / 6 + 1}
                    onClick={() => getpaginationdata(page / 6 + 1)}
                  >
                    {/* <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav> */}
                  </MDBPageItem>
                </MDBPagination>
              </MDBCol>
            </MDBRow>
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
