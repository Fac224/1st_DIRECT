import { Link, useParams } from "react-router-dom";
import { routes, stops } from "../data/mockData.js";

function RouteDetail() {
  const { routeId } = useParams();
  const route = routes.find((item) => item.id === routeId) ?? routes[0];
  const routeStops = stops.filter((stop) => route.stopIds.includes(stop.id));

  return (
    <div className="page-shell">
      <div className="route-detail-header">
        <Link className="button button-secondary" to="/routes">
          ← BACK
        </Link>
        <div className="route-detail-title">
          <div className="route-detail-name">{route.name}</div>
          <div className="route-detail-sub">
            {route.school} · {route.duration}
          </div>
        </div>
        <Link className="button button-success" to={`/navigation/${route.id}`}>
          START ROUTE
        </Link>
      </div>

      <div className="route-stops">
        {routeStops.map((stop, index) => (
          <div className="stop-card" key={stop.id}>
            <div className="stop-index">{index + 1}</div>
            <div className="stop-info">
              <div className="stop-address">{stop.address}</div>
              <div className="stop-time">{stop.time}</div>
              <div className="stop-students">
                {stop.students.length === 0 ? (
                  <span className="student-pill">School stop</span>
                ) : (
                  stop.students.map((student) => (
                    <span className="student-pill" key={student.name}>
                      {student.name}
                      {student.note ? (
                        <span className={`student-note ${student.tone ?? ""}`}>
                          {student.note}
                        </span>
                      ) : null}
                    </span>
                  ))
                )}
              </div>
            </div>
            <div className={`stop-status ${stop.type}`}>
              {stop.type === "dropoff" ? "DROPOFF" : "PICKUP"}
            </div>
          </div>
        ))}
      </div>

      <div className="route-detail-actions">
        <Link className="button button-primary" to="/login">
          ← logout
        </Link>
        <button className="button button-icon" type="button" aria-label="Flashlight">
          🔦
        </button>
      </div>
    </div>
  );
}

export default RouteDetail;
