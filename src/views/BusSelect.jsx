import { Link } from "react-router-dom";

function BusSelect() {
  return (
    <div className="bus-select">
      <header className="direct-routes-header">
        <Link className="direct-routes-menu" to="/">
          ☰
        </Link>
        <div className="direct-routes-title">Bus Selection</div>
        <div className="direct-routes-spacer" />
      </header>

      <main className="bus-select-body">
        <Link className="bus-card" to="/route-menu">
          <div className="bus-card-label">Big Bus</div>
          <img className="bus-card-image" src="/bus-big.png" alt="Big bus" />
        </Link>

        <div className="bus-card">
          <div className="bus-card-label">Small Bus</div>
          <img className="bus-card-image" src="/bus-small.png" alt="Small bus" />
        </div>

        <div className="bus-card">
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
