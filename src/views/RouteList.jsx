import { useNavigate } from "react-router-dom";
import { routes, stops } from "../data/mockData.js";

function RouteList() {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      <div className="route-grid">
        <div className="route-list-panel">
          {routes.map((route) => {
            const routeStops = stops.filter((stop) =>
              route.stopIds.includes(stop.id),
            );
            return (
              <div className="route-row" key={route.id}>
                <div>
                  <div className="route-row-title">{route.name}</div>
                  <div className="route-row-subtitle">
                    {route.school} · {routeStops.length} Stops · {route.duration}
                  </div>
                </div>
                <button
                  className="button button-success"
                  onClick={() => navigate(`/route/${route.id}`)}
                >
                  SELECT
                </button>
              </div>
            );
          })}
          <div className="route-list-filler" />
        </div>
        <aside className="route-actions">
          <button className="button button-warning" type="button">
            SEARCH
          </button>
          <button className="button button-success" type="button">
            REFRESH
          </button>
          <button className="button button-muted" type="button">
            DISPATCH
          </button>
        </aside>
      </div>
    </div>
  );
}

export default RouteList;
