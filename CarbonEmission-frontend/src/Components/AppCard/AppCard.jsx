import { useNavigate } from "react-router-dom";
import "./AppCard.css";

const AppCard = ({ img, name, percentage, app }) => {
  const navigate = useNavigate();
  return (
    <div
      className="AppCard"
      onClick={() => {
        navigate(`/apps/${name}`, { state: { app } });
      }}
    >
      {/* <img src={img} alt="" /> */}
      <div className="right">
        <div className="texts">
          <p className="appName">{name}</p>
          <p className="usage">{percentage}%</p>
        </div>
        <div className="usagee">
          <div className="child" style={{ width: `${percentage*40}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
