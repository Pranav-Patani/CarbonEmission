import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import "./Homepage.css";
import { useContext } from "react";
import AppDataContext from "../../contexts/AppData";

const Homepage = () => {
  const { total_carbon_emission, last_restart_time, charging_status } =
    useContext(AppDataContext);

  return (
    <div className="Homepage">
      <div className="contents">
        <p className="heading">Dashboard</p>
        <div className="InfoCards">
          <InfoCard
            title="Total Carbon Emission (Kg CO2)"
            detail={
              total_carbon_emission
                ? `${total_carbon_emission}`
                : `calculating...`
            }
          />
          <InfoCard
            title="Unused Startup Apps"
            detail={total_carbon_emission ? `6` : `calculating...`}
            cmdButton="Reconfigure"
          />
          <InfoCard
            title="Charging Status"
            detail={
              charging_status === undefined
                ? `calculating...`
                : charging_status
                ? `charging`
                : `not charging`
            }
          />
          <InfoCard
            title="Accessories On"
            detail={total_carbon_emission ? `3 Hrs` : `calculating...`}
          />
          <InfoCard
            title="Laptop Idle Time"
            detail={total_carbon_emission ? `10 Hrs` : `calculating...`}
          />
          <InfoCard
            title="Last Restart"
            detail={
              last_restart_time
                ? `${last_restart_time} hrs ago`
                : `calculating...`
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
