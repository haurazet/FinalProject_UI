import React, { useState, useEffect } from "react";
import styles from "./ManageUser.module.css";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { API_URL } from "../../support/Apiurl";
import {
  MDBPageNav,
  MDBPageItem,
  MDBRow,
  MDBCol,
  MDBPagination,
} from "mdbreact";

const ManageUser = () => {
  const [filter, setfilter] = useState("");
  const [search, setsearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(0);
  const [totaluser, setotaluser] = useState(0);

  const getData = () => {
    Axios.get(
      search
        ? `${API_URL}/users/gettotaluser?search=${search}`
        : `${API_URL}/users/gettotaluser`,
      {}
    )
      .then((res) => {
        console.log(res.data.total);
        setotaluser(res.data.total);
        Axios.get(
          search
            ? `${API_URL}/users/getusers?search=${search}&page=${page}`
            : `${API_URL}/users/getusers?page=${page}`
        )
          .then((result) => {
            setdata(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error1) => console.log(error1));
  };

  const getpaginationdata = (val) => {
    setpage(val * 6);
    getData();
  };

  const renderpagination = () => {
    // console.log('masuk pagination')
    var totalpage = Math.ceil(totaluser / 6);
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

  const renderData = () => {
    return data.map((val, index) => {
      return (
        <tr key={index + 1}>
          <td>{val.id}</td>
          <td>{val.username}</td>
          <td>
            <button
              className={styles.buttonRed}
              onClick={() => onClickBanUser(val.id)}
            >
              Ban User
            </button>
          </td>
        </tr>
      );
    });
  };
  const handleSearch = (e) => {
    let search = e.target.value;
    setsearch(search);
    getData();
  };

  const onClickBanUser = (id) => {
    // console.log(e.target.value);
    Swal.fire({
      title: "Are you sure want to ban this user?",
      text: "User will be banned for permanent time.",

      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        console.log(search);
        Axios.put(`${API_URL}/users/banuser/${id}`)
          .then((result) => {
            Swal.fire({
              title: "Ban user Success",
              confirmButtonText: "Yes",
            });
            getData();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className={styles.containers}>
      <div className={styles.manageUser}>
        <div>
          <h1>Manage User</h1>
        </div>
      </div>
      <div className={styles.table_container}>
        <div className={styles.table_search_filter}>
          <div>
            <b>Search by Id:</b>
            <input placeholder="Search.." onChange={handleSearch} />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
        <div className={styles.table_box}>
          <table className={styles.contenttable}>
            <thead>
              <tr>
                <td>Id User</td>
                <td>Username</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>{renderData()}</tbody>
          </table>
        </div>
        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5 mr-5 pr-5 float-right" color="teal">
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
                disabled={Math.ceil(totaluser / 6) === page / 6 + 1}
                onClick={() => getpaginationdata(page / 6 + 1)}
              >
                {/* <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav> */}
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default ManageUser;
