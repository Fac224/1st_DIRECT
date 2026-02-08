import { Link } from "react-router-dom";

const routes = Array.from({ length: 101 }, (_, index) => 6000 + index);

function RouteMenu() {
  return (
    <div className="route-menu">
      <header className="direct-routes-header">
        <Link className="direct-routes-menu" to="/bus-select">
          ←
        </Link>
        <div className="direct-routes-title">Route Menu</div>
        <img className="direct-logo" src="/drive-logo.png" alt="Direct logo" />
      </header>

      <main className="route-menu-body">
        <div className="route-menu-list">
          {routes.map((route) =>
            route === 6070 ? (
              <Link key={route} className="route-menu-item" to="/direct">
                {route}
              </Link>
            ) : (
              <div key={route} className="route-menu-item disabled">
                {route}
              </div>
            ),
          )}
        </div>
      </main>
    </div>
  );
}

export default RouteMenu;
