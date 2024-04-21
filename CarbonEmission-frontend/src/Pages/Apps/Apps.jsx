import { useContext } from "react";
import "./Apps.css";
import AppCard from "../../Components/AppCard/AppCard";
import AppDataContext from "../../contexts/AppData";

const Apps = () => {
  const { data } = useContext(AppDataContext);
  return (
    <div className="Apps">
      <h1>Your Apps</h1>
      <>
        {data &&
          data.map((app) => (
            <AppCard
              name={app.name}
              percentage={app.percentage}
              app={app}
              key={app.name}
            />
          ))}
      </>
    </div>
  );
};

export default Apps;
