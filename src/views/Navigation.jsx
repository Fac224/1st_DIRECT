import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { routes, stops } from "../data/mockData.js";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function Navigation() {
  const { routeId } = useParams();
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStopIndex, setActiveStopIndex] = useState(0);

  const route = routes.find((item) => item.id === routeId) ?? routes[0];
  const routeStops = stops.filter((stop) => route.stopIds.includes(stop.id));

  useEffect(() => {
    if (!isSimulating) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveStopIndex((prev) => {
        if (prev >= routeStops.length - 1) {
          setIsSimulating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isSimulating, routeStops.length]);

  useEffect(() => {
    setActiveStopIndex(0);
    setIsSimulating(false);
  }, [routeId]);

  const polyline = routeStops.map((stop) => stop.coords);
  const mapCenter = routeStops[0]?.coords ?? [34.0589, -118.2468];
  const activeStop = routeStops[activeStopIndex];

  return (
    <div className="page-shell">
      <div className="nav-banner">
        <div>
          <div className="nav-distance">0.5 mi</div>
          <div className="nav-instruction">Turn Right onto Maple St</div>
        </div>
        <button
          className="button button-primary"
          type="button"
          onClick={() => {
            if (routeStops.length === 0) {
              return;
            }
            setIsSimulating((prev) => !prev);
          }}
        >
          ▶ SIMULATE DRIVE
        </button>
      </div>

      <section className="nav-map-full">
        <MapContainer center={mapCenter} zoom={14} style={{ height: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {polyline.length > 1 ? (
            <Polyline positions={polyline} color="#1c4ed8" />
          ) : null}
          {routeStops.map((stop, index) => (
            <Marker key={stop.id} position={stop.coords}>
              <Popup>
                <strong>{stop.address}</strong>
                <div>Stop {index + 1}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      {activeStop ? (
        <div className="nav-stop-card">
          <div className="stop-index">{activeStopIndex + 1}</div>
          <div className="stop-info">
            <div className="stop-address">{activeStop.address}</div>
            <div className="stop-time">
              {activeStop.students[0]?.name ?? "Next student"}
            </div>
            {activeStop.students[0]?.note ? (
              <div className="student-note warning">
                ⚠ {activeStop.students[0].note}
              </div>
            ) : null}
          </div>
          <button className="button button-success" type="button">
            COMPLETE STOP
          </button>
        </div>
      ) : null}

      <Link className="button button-link" to={`/route/${route.id}`}>
        Back to route
      </Link>
    </div>
  );
}

export default Navigation;
