import React from "react";
import "./InfoCard.css";

const InfoCard = ({ title, detail, cmdButton }) => {
  return (
    <div className="InfoCard">
      <p className="title">{title}</p>
      <p className="detail">{detail}</p>
      <div className="cmdButton">
        {cmdButton ? <button>{cmdButton}</button> : null}
      </div>
    </div>
  );
};

export default InfoCard;
