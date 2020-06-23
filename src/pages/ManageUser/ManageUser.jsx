import React, { useState, useEffect } from "react";
import styles from "./ManageUser.module.css";
import ButtonNeon from "../../components/ButtonNeon/ButtonNeon";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Pagination from "../../components/Pagination/Pagination";
import { API_URL } from "../../support/Apiurl";

const ManageUser = () => {
  const [filter, setfilter] = useState("");
  const [count, setcount] = useState(false);
  const [inputid, setinputid] = useState(null);
  const [search, setsearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (e) => {
    setfilter(e.target.value);
  };

  const getData = () => {
    Axios.get(`${API_URL}/users/getusers`)
      .then((result) => {
        setsearch(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickButton = () => {
    setcount(!count);
    console.log(count);
  };

  const renderData = () => {
    return currentUser.map((val, index) => {
      return (
        <tr key={index + 1}>
          <td>{val.id}</td>
          <td>{val.username}</td>
          {/* <td>{val.report}</td> */}
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
    setsearch(e.target.value);
    console.log(e.target.value);
    if ((e.target.value = "")) {
      setsearch(data);
    }

    let stringify = e.target.value.toString();
    console.log(stringify);
    let userFilter = data.filter((val) =>
      val.id.toString().includes(stringify)
    );
    setsearch(userFilter);
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
    setsearch(data);
  }, []);

  // Get Current Post
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = search.slice(indexOfFirstUser, indexOfLastUser);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <div className="d-flex justify-content-center mt-4">
          <Pagination
            className="color_pagination"
            userPerPage={userPerPage}
            totalUser={search.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
