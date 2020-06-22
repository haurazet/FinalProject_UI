import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Spinner } from "reactstrap";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import Axios from "axios";
import { API_URL } from "../../support/Apiurl";
import Numeral from "numeral";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import { FaBars } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { connect } from "react-redux";

class Productpage extends Component {
  state = {
    isLoading: false,
    products: [],
    page: 0,
    totalproduct: 0,
    category: [],
    activecategory: 0,
    // filter, search, sort
    filter: "",
    search: "",
    sort: "",
  };

  componentDidMount() {
    // console.log('masuk componentDidMount')
    Axios.get(`${API_URL}/programs/category`).then((res) => {
      this.setState({ category: res.data });
    });
    this.getData();
  }

  getData = () => {
    const { search, filter, sort, page } = this.state;
    // console.log(this.state)
    // console.log('masuk get data')
    window.scrollTo(0, 400);
    Axios.get(
      search && filter
        ? `${API_URL}/programs/totalprogram?search=${search}&filter=${filter}`
        : search
        ? `${API_URL}/programs/totalprogram?search=${search}`
        : filter
        ? `${API_URL}/programs/totalprogram?filter=${filter}`
        : `${API_URL}/programs/totalprogram`,
      {}
    )
      .then((res) => {
        this.setState({ totalproduct: res.data.total });
        Axios.get(
          search && filter && sort
            ? `${API_URL}/programs/getprogramuser?search=${search}&filter=${filter}&sort=${sort}&page=${page}`
            : search && filter
            ? `${API_URL}/programs/getprogramuser?search=${search}&filter=${filter}&page=${page}`
            : search && sort
            ? `${API_URL}/programs/getprogramuser?search=${search}&sort=${sort}&page=${page}`
            : filter && sort
            ? `${API_URL}/programs/getprogramuser?filter=${filter}&sort=${sort}&page=${page}`
            : search
            ? `${API_URL}/programs/getprogramuser?search=${search}&page=${page}`
            : filter
            ? `${API_URL}/programs/getprogramuser?filter=${filter}&page=${page}`
            : sort
            ? `${API_URL}/programs/getprogramuser?sort=${sort}&page=${page}`
            : `${API_URL}/programs/getprogramuser?page=${page}`
        )
          .then((res1) => {
            this.setState({ products: res1.data, isLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getpaginationdata = (val) => {
    this.setState({ page: val * 6, isLoading: true }, function () {
      this.getData();
    });
  };

  renderProducts = () => {
    const { isLoading, products } = this.state;
    if (isLoading) {
      return (
        <div className="tocenter mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />{" "}
        </div>
      );
    }
    return products.map((val, index) => {
      return (
        <div key={index} className="p-4 col-md-4 ">
          <Link to={`/programdetail/${val.id}`}>
            <Card>
              <div className="program-picture p-3 row align-items-center">
                <img src={API_URL + val.image} width="100%" height="100%"></img>
              </div>
              <CardBody>
                <CardTitle className="text-center program-card-bottom h5">
                  {val.name}
                </CardTitle>
                <div className="d-flex justify-content-between align-self-baseline">
                  <div className="program-price col-md-4 col-xs-3 text-center">
                    {"IDR " + Numeral(val.price).format(0.0)}{" "}
                  </div>
                  <div className="program-reward col-md-7 col-xs-5 text-center">
                    {" "}
                    Get {val.point} RECYC.LY point
                  </div>
                </div>
              </CardBody>
            </Card>
          </Link>
        </div>
      );
    });
  };

  renderpagination = () => {
    // console.log('masuk pagination')
    var totalpage = Math.ceil(this.state.totalproduct / 6);
    var arr = [];
    for (var i = 0; i < totalpage; i++) {
      arr.push(i);
    }
    return arr.map((val, index) => {
      return (
        <div key={index}>
          <MDBPageItem active={this.state.page / 6 === val}>
            <MDBPageNav onClick={() => this.getpaginationdata(val)}>
              {val + 1}
            </MDBPageNav>
          </MDBPageItem>
        </div>
      );
    });
  };

  rendercategory = () => {
    const { category, activecategory } = this.state;
    // console.log(category)
    return category.map((val, index) => {
      return (
        <div key={index}>
          <div className="category-container mb-2">
            <div className="category-bullet"></div>
            <div
              className={
                parseInt(activecategory) === val.id ? "category-name" : ""
              }
            >
              <a onClick={(e) => this.onCategoryClick(val.id)}>
                {" "}
                <MdPlayArrow /> {val.name}
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  renderSort = () => {
    const { totalproduct } = this.state;
    return (
      <div className="d-md-flex justify-content-end">
        <div className="mr-1 font-weight-bold">
          {totalproduct} {totalproduct > 1 ? "Programs" : "Program"} |{" "}
        </div>
        <div className="sort-title mr-2"> Sort by </div>
        <select onChange={this.onSortClick}>
          <option value="purchased">Popularity</option>
          <option value="create_time">Newest Program</option>
          <option value="price DESC">Price: High to Low</option>
          <option value="price ASC">Price: Low to High</option>
          <option value="point DESC">Reward: High to Low</option>
          <option value="point ASC">Reward: Low to High</option>
        </select>
      </div>
    );
  };

  dataOnChange = (e) => {
    var search = e.target.value;
    this.setState({ page: 0, search: search }, () => {
      this.getData();
    });
  };

  onCategoryClick = (e) => {
    var filter = e;
    this.setState({ page: 0, activecategory: filter, filter }, () => {
      this.rendercategory();
      this.getData();
    });
  };

  onSortClick = (e) => {
    var sort = e.target.value;
    this.setState({ page: 0, sort: sort }, () => {
      this.getData();
    });
    console.log(this.state.sort);
  };

  onCategoryClear = () => {
    this.setState({ page: 0, activecategory: 0 });
    this.getData();
  };

  render() {
    const { page, totalproduct, activecategory } = this.state;
    return (
      <div className="program-page-container">
        {/* ================= TOP ================= */}
        <div className="program-top-container">
          <div className="program-top-title h4">Browse Recycling Program</div>
          <div className="program-top-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="program-bottom-container ">
          {/* ================= SEARCH ================= */}
          <div className="searchbar-container d-flex justify-content-center align-items-center">
            <div className="input-group md-form form-sm form-2 w-50 ">
              <input
                className="form-control my-0 py-2 lime-border"
                name="search"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={this.dataOnChange}
              />
              <div>
                <Button text="search" />
                {/* <span className="input-group-text text-white" id="basic-text1">Search</span> */}
              </div>
            </div>
          </div>
          {/* ================= PROGRAM ================= */}
          <div className="program-card-super-container d-md-flex mx-md-5">
            {/* ================= FILTER ================= */}
            <div className="program-card-filter-container row col-md-2 d-flex flex-column ">
              <div className="font-weight-bold mb-3">
                <a onClick={this.onCategoryClear}>
                  <FaBars /> All Categories
                </a>
              </div>
              {this.rendercategory()}
            </div>
            <div className="row col-md-10">
              <div className="sort-container mt-md-4 w-100">
                {this.renderSort()}
              </div>

              <div className="program-card-container ml-md-2  px-xs-0 d-flex flex-wrap justify-content-start col-md-12">
                {this.state.isloading ? null : this.renderProducts()}
              </div>
            </div>
          </div>

          {/* ================= PAGINATION ================= */}
          <MDBRow>
            <MDBCol>
              <MDBPagination
                className="mb-5 mr-5 pr-5 float-right"
                color="teal"
              >
                <MDBPageItem
                  disabled={this.state.page === 0}
                  onClick={() => this.getpaginationdata(page / 6 - 1)}
                >
                  <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">Previous</span>
                  </MDBPageNav>
                </MDBPageItem>
                {this.renderpagination()}
                <MDBPageItem
                  disabled={Math.ceil(totalproduct / 6) === page / 6 + 1}
                  onClick={() => this.getpaginationdata(page / 6 + 1)}
                >
                  <MDBPageNav aria-label="Previous">
                    <span aria-hidden="true">Next</span>
                  </MDBPageNav>
                </MDBPageItem>
              </MDBPagination>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}

const MapstatetoProps = ({ Auth }) => {
  console.log(Auth);
  return {
    Auth,
  };
};

export default connect(MapstatetoProps)(Productpage);
