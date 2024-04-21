import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import "./Homepage.css";
import { useContext } from "react";
import AppDataContext from "../../contexts/AppData";

const Homepage = () => {
  const { total_carbon_emission, last_restart_time } =
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
            detail="6"
            cmdButton="Reconfigure"
          />
          <InfoCard title="Charger On For" detail="12 Hrs" />
          <InfoCard title="Accessories On" detail="3 Hrs" />
          <InfoCard title="Laptop Idle Time" detail="10 Hrs" />
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
