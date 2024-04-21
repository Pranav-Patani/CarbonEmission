import React, { useEffect, useState } from "react";
import "./AppDetail.css";
import { useLocation } from "react-router-dom";
import time from "../../assets/time.svg";
import stop from "../../assets/stop.svg";
import uninstall from "../../assets/uninstall.svg";
import open from "../../assets/open.svg";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const AppDetail = () => {
  const location = useLocation();
  const app = location.state.app;
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours",
        data: [10.5, 16.3, 8.2, 5.2, 11.4, 3.7, 6.1],
        fill: true,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "green",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "gray",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        beginAtZero: true,
        max: 24,
        grid: {
          color: "gray",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="AppDetail">
      <div className="title">
        <p>{app.name}</p>
      </div>
      <div className="actionButtons">
        <button>
          <img src={open} alt="" />
          <p>Open</p>
        </button>
        <button>
          <img src={stop} alt="" />
          <p>Force Stop</p>
        </button>
        <button>
          <img src={uninstall} alt="" />
          <p>Uninstall</p>
        </button>
      </div>
      <div className="infoButtons">
        <div className="infoCard">
          <img src={time} alt="" />
          <div className="text">
            <p>Time Used</p>
            <p>{app.usage_time} hrs</p>
          </div>
        </div>
      </div>
      <div className="parentChart">
        <div className="chart">
          <Line data={data} options={options} />
        </div>
        <div className="details">
          <p className="heading">App Details:</p>
          <div className="appInfo">
            <div>
              <p>Name : {app.name}</p>
              <p>Power Consumption : {app.power_consumption} watts </p>
              <p>Usage Time : {app.usage_time} hours </p>
              <p>Carbon Percentage : {app.percentage}% </p>
            </div>
          </div>
        </div>
      </div>
      <div className="carbonEmitted">
        <p className="heading">Total Carbon Emmited :</p>
        <p>&nbsp;&nbsp;{app.carbon_emission} Kg CO2</p>
      </div>
      <div className="tips">
        <p className="head">Tips:</p>
        <p>• Close apps when not in use to save energy.</p>
        <p>• Limit background app processes to reduce CPU and GPU usage.</p>
        <p>• Lower screen brightness to decrease power consumption.</p>
        <p>• Keep apps updated for energy efficiency improvements.</p>
        <p>• Use energy-saving modes on your device to conserve power.</p>
      </div>
    </div>
  );
};

export default AppDetail;
