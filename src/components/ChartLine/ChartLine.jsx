import React, { useState, useEffect } from "react";
import styles from "./ChartLine.module.css";
import { Line, Bar, Pie } from "react-chartjs-2";
import Axios from "axios";
import { API_URL } from "../../support/Apiurl";

const ChartLine = ({ displayTitle, legendPosition }) => {
  const [getDataReward, setGetDataReward] = useState();

  const [chartData, setChartData] = useState();

  //     defaultProps={
  //        displayTitle:true,
  //        displayLegend:true,
  //        legendPosition:legendPosition
  //    }
  const getData = () => {
    Axios.get(`${API_URL}/reward/getrewardreport`)
      .then((result) => {
        setChartData({
          labels: ["Environment", "Animals", "Human Services", "Education"],
          datasets: [
            {
              label: "Redeemed  Reward",
              data: [
                result.data[0].REWARD1,
                result.data[0].REWARD2,
                result.data[0].REWARD3,
                result.data[0].REWARD4,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(52,210,20,0.2",
              ],
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Pie
        data={chartData}
        width={100}
        height={50}
        options={{
          title: {
            text: "Top Reward Category",
            display: true,
            fontSize: 20,
            fontColor: "darkgreen",
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

export default ChartLine;
