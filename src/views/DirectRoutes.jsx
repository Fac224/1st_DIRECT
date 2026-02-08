import { Link } from "react-router-dom";

function DirectRoutes() {
  return (
    <div className="direct-routes">
      <header className="direct-routes-header">
        <Link className="direct-routes-menu" to="/route-menu">
          ←
        </Link>
        <div className="direct-routes-title">Routes</div>
        <img className="direct-logo" src="/drive-logo.png" alt="Direct logo" />
      </header>

      <div className="direct-routes-body">
        <div className="direct-routes-section">Morning</div>
        <div className="direct-routes-card morning">
          <div className="direct-routes-bus">
            <span>Route</span>
            <strong>6070</strong>
          </div>
          <div className="direct-routes-info">
            <div className="direct-routes-time">6:43 AM</div>
            <div className="direct-routes-days">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>
          </div>
        </div>

        <div className="direct-routes-section">Afternoon</div>
        <Link className="direct-routes-card afternoon" to="/direct-afternoon">
          <div className="direct-routes-bus">
            <span>Route</span>
            <strong>6070</strong>
          </div>
          <div className="direct-routes-info">
            <div className="direct-routes-time">2:10 PM</div>
            <div className="direct-routes-days">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DirectRoutes;
