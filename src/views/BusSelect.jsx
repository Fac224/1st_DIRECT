import { Link } from "react-router-dom";

function BusSelect() {
  return (
    <div className="bus-select">
      <header className="direct-routes-header">
        <div className="direct-routes-spacer" />
        <div className="direct-routes-title">Bus Selection</div>
        <img className="direct-logo" src="/drive-logo.png" alt="Direct logo" />
      </header>

      <main className="bus-select-body">
        <Link className="bus-card bus-card-big" to="/route-menu">
          <div className="bus-card-label">Big Bus</div>
          <img className="bus-card-image" src="/bus-big.png" alt="Big bus" />
        </Link>

        <div className="bus-card bus-card-small">
          <div className="bus-card-label">Small Bus</div>
          <img className="bus-card-image" src="/bus-small.png" alt="Small bus" />
        </div>

        <Link className="bus-dashboard" to="/">
          Dashboard
        </Link>

        <div className="bus-card bus-card-caravan">
          <div className="bus-card-label">Caravan</div>
          <img
            className="bus-card-image"
            src="/bus-caravan.png"
            alt="Caravan"
          />
        </div>
      </main>
    </div>
  );
}

export default BusSelect;
