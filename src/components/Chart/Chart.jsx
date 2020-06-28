import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";
import { Line, Bar, Pie } from "react-chartjs-2";
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { API_URL } from "../../support/Apiurl";

const Chart = ({ displayTitle, legendPosition }) => {
  const [getDataProgram, setGetdataProgram] = useState({});
  const [chartData, setChartData] = useState();
  const [filter, setFilter] = useState("");
  const [refresh, setRefresh] = useState(true);

  const handleFilterProgram = (e) => {
    let filter = e.target.value;
    setFilter(filter);
    setRefresh(!refresh);
  };

  const getData = () => {
    Axios.get(
      filter
        ? `
    ${API_URL}/transaction/gettransactionreport?filter=${filter}`
        : `${API_URL}/transaction/gettransactionreport`
    )
      .then((result) => {
        console.log(result);
        setGetdataProgram({
          labels: [
            "Bango Recycling Program",
            "Glico Recycling Program",
            "Dell Recycling Program",
            "Otsuka Recycling Program",
            "Medical Recycling Program",
            "Faber Castell Recycling Program",
            "Indofood Recycling Program",
            "Lion Recycling Program",
            "Innisfree Recycling Program",
          ],
          datasets: [
            {
              label: filter ? `Program ${filter}` : null,
              data: [
                result.data[0].PROGRAM_4,
                result.data[0].PROGRAM_5,
                result.data[0].PROGRAM_6,
                result.data[0].PROGRAM_7,
                result.data[0].PROGRAM_8,
                result.data[0].PROGRAM_9,
                result.data[0].PROGRAM_12,
                result.data[0].PROGRAM_11,
                result.data[0].PROGRAM_12,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 102, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 64, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 10, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 64, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div>
      <MDBRow className=" mt-4">
        <MDBCol>
          <b style={{ fontSize: 20 }}>Filter By: </b>
          <div>
            <select
              className="browser-default custom-select"
              onChange={handleFilterProgram}
            >
              <option value="completed">Choose your option</option>
              <option value="completed">Program Completed</option>
              <option value="canceled">Program Canceled</option>
            </select>
          </div>
        </MDBCol>
      </MDBRow>
      <Bar
        data={getDataProgram}
        width={100}
        height={50}
        options={{
          title: {
            text: "Program Overview",
            display: true,
            fontSize: 20,
            fontFamily: "sanfransisco",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
};

export default Chart;
