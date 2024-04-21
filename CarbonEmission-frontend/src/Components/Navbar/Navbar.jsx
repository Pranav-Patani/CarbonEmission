import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Top.svg";
import userImg from "../../assets/Vector.svg";
import home from "../../assets/home.svg";
// import stats from "../../assets/stats.svg";
import apps from "../../assets/apps.svg";
// import settings from "../../assets/settings.svg";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "home") {
      navigate("/");
    } else {
      navigate(`/${buttonName}`);
    }
  };

  const buttonStyle = (buttonName) => {
    return activeButton === buttonName ? { backgroundColor: "#4B8E4B" } : {};
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <button
          style={buttonStyle("home")}
          onClick={() => handleButtonClick("home")}
        >
          <img src={home} className="bigIcon" alt="" />
          <p>Home</p>
        </button>
        <button
          style={buttonStyle("apps")}
          onClick={() => handleButtonClick("apps")}
        >
          <img src={apps} className="bigIcon" alt="" />
          <p>Your Apps</p>
        </button>
        {/* <button
          style={buttonStyle("stats")}
          onClick={() => handleButtonClick("stats")}
        >
          <img src={stats} alt="" />
          <p>Stats</p>
        </button> */}
        {/* <button
          style={buttonStyle("settings")}
          onClick={() => handleButtonClick("settings")}
        >
          <img src={settings} alt="" />
          <p>Settings</p>
        </button> */}
      </div>
      <div className="userBox">
        <p>Hello, User</p>
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
