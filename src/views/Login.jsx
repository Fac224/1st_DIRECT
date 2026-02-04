import { useNavigate } from "react-router-dom";
import { drivers } from "../data/mockData.js";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/routes");
  };

  return (
    <div className="login-page">
      <header className="login-topbar">
        <div className="login-topbar-title">
          <span className="driverhub-icon">✚</span>
          DriverClub
        </div>
        <div className="login-topbar-text">
          Welcome to Skylar Drive, please login...
        </div>
      </header>
      <div className="login-body">
        <div className="login-list">
          {drivers.map((driver) => (
            <div className="login-row" key={driver.id}>
              <span>{driver.name}</span>
              <button
                className="button button-success"
                type="button"
                onClick={handleSubmit}
              >
                SELECT
              </button>
            </div>
          ))}
        </div>
        <aside className="login-actions">
          <button className="button button-warning" type="button">
            search
          </button>
          <button className="button button-success" type="button">
            refresh
          </button>
          <button className="button button-muted" type="button">
            normal
            <br />
            login
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Login;
