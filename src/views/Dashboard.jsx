import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="home-page">
      <div className="home-status">
        <div className="home-status-left">
          <span>6:48</span>
          <span>Wed, Dec 10</span>
        </div>
        <div className="home-status-right">LTE · 92%</div>
      </div>

      <div className="home-brand">
        <div className="home-brand-logo">1</div>
        <div className="home-brand-text">
          <span className="home-brand-main">1ST</span>
          <span className="home-brand-sub">student</span>
        </div>
        <span className="home-brand-sep">|</span>
        <span className="home-brand-hello">HELLO</span>
      </div>

      <div className="home-subtitle">
        HELLO: Driver - 1STS12678_99 - NY1stMileFairNorth
      </div>

      <div className="home-tiles">
        <Link className="home-tile" to="/hello-work">
          <div className="tile-icon tile-yellow">T</div>
          <div className="tile-label">HELLO: Job</div>
        </Link>
        <div className="home-tile">
          <div className="tile-icon tile-blue">◆</div>
          <div className="tile-label">Skylar Drive (ALK)</div>
        </div>
        <div className="home-tile">
          <div className="tile-icon tile-sky">◎</div>
          <div className="tile-label">Close Call</div>
        </div>
        <div className="home-tile">
          <div className="tile-icon tile-orange">S</div>
          <div className="tile-label">HELLO: Conduct</div>
        </div>
        <div className="home-tile">
          <div className="tile-icon tile-green">S</div>
          <div className="tile-label">HELLO: Coach</div>
        </div>
        <div className="home-tile">
          <div className="tile-icon tile-blue tile-eagle">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path
                d="M47 18c-6-6-18-6-24 0-4 4-5 10-3 15l-6 6 6 2 2 6 6-6c5 2 11 1 15-3 6-6 6-18 4-20zm-7 6-8 2 6 6-10 4-6-6 2-8 8-2 6-6 2 10z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className="tile-label">Samsang Driver</div>
        </div>
      </div>

      <div className="home-info">i</div>
    </div>
  );
}

export default Dashboard;
