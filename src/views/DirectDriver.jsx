import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const stops = [
  {
    label: "Pearls Hawthorne School, 350 Hawthorne Ave",
    lat: 40.92016,
    lng: -73.90301,
  },
  { label: "McLean Ave & Lee Ave", lat: 40.90942, lng: -73.8796 },
  { label: "McLean Ave & Agawam N", lat: 40.90844, lng: -73.87624 },
  { label: "McLean Ave & Aqueduct Ave", lat: 40.90656, lng: -73.87134 },
  { label: "McLean Ave & Kimball Ave", lat: 40.90395, lng: -73.86749 },
  { label: "Scott Ave & Bronx River Rd", lat: 40.90309, lng: -73.85979 },
  { label: "Bronx River Rd & Glen Rd", lat: 40.90775, lng: -73.85649 },
  { label: "Bronx River Rd & Raybrook Rd", lat: 40.91044, lng: -73.85433 },
];

const googleApiKey = "AIzaSyBx_fJmtDT73PJsnseCnQ2xUmM9UDW3ouQ";

const origin = stops[0];
const destination = stops[stops.length - 1];
const via = stops.slice(1, -1);

const loadGoogleMaps = () =>
  new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve(window.google.maps);
      return;
    }
    const existing = document.querySelector("script[data-google-maps]");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google.maps));
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Google Maps")),
      );
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";
    script.onload = () => resolve(window.google.maps);
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });

const stripHtml = (value) => value.replace(/<[^>]*>/g, "").trim();
const toRadians = (value) => (value * Math.PI) / 180;
const toDegrees = (value) => (value * 180) / Math.PI;
const getBearing = (start, end) => {
  const lat1 = toRadians(start.lat);
  const lat2 = toRadians(end.lat);
  const dLon = toRadians(end.lng - start.lng);
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return (toDegrees(Math.atan2(y, x)) + 360) % 360;
};

function DirectDriver() {
  const [state, setState] = useState({
    loading: true,
    error: "",
    steps: [],
    path: [],
    totalDistance: 0,
    totalDuration: 0,
  });
  const [isSimulating, setIsSimulating] = useState(false);
  const [pointIndex, setPointIndex] = useState(0);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [followEnabled, setFollowEnabled] = useState(true);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const lastSpokenStepRef = useRef(-1);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const maps = await loadGoogleMaps();
        if (!mapRef.current) {
          return;
        }
        const map = new maps.Map(mapRef.current, {
          center: { lat: origin.lat, lng: origin.lng },
          zoom: 13,
          tilt: 45,
          heading: 120,
        });
        mapInstanceRef.current = map;

        stops.forEach((stop) => {
          new maps.Marker({
            map,
            position: { lat: stop.lat, lng: stop.lng },
            title: stop.label,
            icon: {
              path: maps.SymbolPath.CIRCLE,
              scale: 4,
              fillColor: "#2563eb",
              fillOpacity: 1,
              strokeWeight: 0,
            },
          });
        });
        const service = new maps.DirectionsService();
        const result = await service.route({
          origin: { lat: origin.lat, lng: origin.lng },
          destination: { lat: destination.lat, lng: destination.lng },
          waypoints: via.map((stop) => ({
            location: { lat: stop.lat, lng: stop.lng },
            stopover: true,
          })),
          travelMode: maps.TravelMode.DRIVING,
          optimizeWaypoints: false,
        });

        const route = result?.routes?.[0];
        if (!route) {
          throw new Error("No route returned.");
        }

        const path = route.overview_path.map((point) => ({
          lat: point.lat(),
          lng: point.lng(),
        }));
        const steps = route.legs
          .flatMap((leg) => leg.steps ?? [])
          .map((step) => ({
            instruction: stripHtml(step.instructions ?? ""),
            distance: step.distance?.text ?? "",
            duration: step.duration?.text ?? "",
          }));
        const totalDistance = route.legs.reduce(
          (sum, leg) => sum + (leg.distance?.value ?? 0),
          0,
        );
        const totalDuration = route.legs.reduce(
          (sum, leg) => sum + (leg.duration?.value ?? 0),
          0,
        );

        const polyline = new maps.Polyline({
          path,
          geodesic: true,
          strokeColor: "#1e3a8a",
          strokeOpacity: 1,
          strokeWeight: 4,
        });
        polyline.setMap(map);
        const traffic = new maps.TrafficLayer();
        traffic.setMap(map);

        const bounds = new maps.LatLngBounds();
        path.forEach((point) => bounds.extend(point));
        map.fitBounds(bounds);

        markerRef.current = new maps.Marker({
          map,
          position: path[0],
          title: "Bus",
          label: {
            text: "🚌",
            fontSize: "18px",
          },
        });

        if (active) {
          setState({
            loading: false,
            error: "",
            steps,
            path,
            totalDistance,
            totalDuration,
          });
        }
      } catch (error) {
        if (active) {
          setState({
            loading: false,
            error: error?.message ?? "Unable to fetch route.",
            steps: [],
            path: [],
            totalDistance: 0,
            totalDuration: 0,
          });
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  const routeLine = state.path;
  const currentPoint = routeLine[pointIndex] ?? {
    lat: origin.lat,
    lng: origin.lng,
  };
  const currentStepIndex =
    routeLine.length && state.steps.length
      ? Math.min(
          state.steps.length - 1,
          Math.floor((pointIndex / (routeLine.length - 1)) * state.steps.length),
        )
      : 0;
  const currentStep = state.steps[currentStepIndex];
  const nextSteps = state.steps.slice(
    currentStepIndex,
    currentStepIndex + 3,
  );
  const progressRatio = routeLine.length
    ? pointIndex / Math.max(routeLine.length - 1, 1)
    : 0;
  const remainingSeconds = Math.max(
    0,
    Math.round(state.totalDuration * (1 - progressRatio)),
  );
  const etaDate = new Date(Date.now() + remainingSeconds * 1000);
  const etaTime = etaDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const avgSpeedMph =
    state.totalDuration > 0
      ? (state.totalDistance / 1609.34) / (state.totalDuration / 3600)
      : 0;

  useEffect(() => {
    if (!voiceEnabled || !currentStep?.instruction) {
      return;
    }
    if (currentStepIndex === lastSpokenStepRef.current) {
      return;
    }
    lastSpokenStepRef.current = currentStepIndex;
    const utterance = new SpeechSynthesisUtterance(currentStep.instruction);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [currentStep?.instruction, currentStepIndex, voiceEnabled]);

  useEffect(() => {
    if (!isSimulating || routeLine.length === 0) {
      return undefined;
    }
    const interval = setInterval(() => {
      setPointIndex((prev) => {
        const next = prev + 1;
        if (next >= routeLine.length) {
          setIsSimulating(false);
          return routeLine.length - 1;
        }
        if (markerRef.current) {
          markerRef.current.setPosition(routeLine[next]);
        }
        if (followEnabled && mapInstanceRef.current) {
          const map = mapInstanceRef.current;
          const current = routeLine[next];
          const ahead = routeLine[Math.min(next + 1, routeLine.length - 1)];
          map.panTo(current);
          map.setHeading(getBearing(current, ahead));
        }
        return next;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [followEnabled, isSimulating, routeLine.length]);

  return (
    <div className="direct-driver">
      <header className="hello-topbar">
        <div className="hello-topbar-left">
          <Link className="hello-back" to="/direct-afternoon">
            ← Back
          </Link>
          <span className="hello-date">1:42 · Mon, Feb 16</span>
        </div>
        <div className="hello-title">
          <span className="hello-badge">1</span>
          Direct Driver
        </div>
        <div className="hello-topbar-right">
          <span className="hello-time">01 : 42 PM</span>
          <span className="hello-signal">LTE · 89%</span>
        </div>
      </header>

      <main className="direct-driver-body">
        {state.loading ? <p>Loading route...</p> : null}
        {state.error ? <p className="direct-error">{state.error}</p> : null}

        <section className="direct-map" ref={mapRef} />

        <div className="direct-hud">
          <div>
            <div className="direct-hud-label">Speed</div>
            <div className="direct-hud-value">
              {avgSpeedMph ? avgSpeedMph.toFixed(0) : "--"} mph
            </div>
          </div>
          <div>
            <div className="direct-hud-label">ETA</div>
            <div className="direct-hud-value">
              {state.totalDuration ? etaTime : "--"}
            </div>
          </div>
          <div>
            <div className="direct-hud-label">Remaining</div>
            <div className="direct-hud-value">
              {state.totalDuration ? Math.ceil(remainingSeconds / 60) : "--"} min
            </div>
          </div>
        </div>

        <div className="direct-turn-card">
          <div className="direct-turn-title">Next Turns</div>
          {nextSteps.length ? (
            <div className="direct-turn-stack">
              {nextSteps.map((step, index) => (
                <div
                  key={`${step.instruction}-${index}`}
                  className={
                    index === 0
                      ? "direct-turn-item active"
                      : "direct-turn-item"
                  }
                >
                  <div className="direct-turn-instruction">
                    {step.instruction || "Continue"}
                  </div>
                  <div className="direct-turn-meta">
                    {step.distance ? `${step.distance} · ` : ""}
                    {step.duration || ""}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="direct-turn-instruction">Calculating route...</div>
          )}
        </div>

        <div className="direct-controls">
          <button
            className="direct-control-button"
            type="button"
            onClick={() => setIsSimulating((prev) => !prev)}
            disabled={!routeLine.length}
          >
            {isSimulating ? "Pause Navigation" : "Start Navigation"}
          </button>
          <button
            className="direct-control-button secondary"
            type="button"
            onClick={() => setFollowEnabled((prev) => !prev)}
          >
            {followEnabled ? "Follow: On" : "Follow: Off"}
          </button>
          <button
            className="direct-control-button secondary"
            type="button"
            onClick={() => setVoiceEnabled((prev) => !prev)}
          >
            {voiceEnabled ? "Voice: On" : "Voice: Off"}
          </button>
          <button
            className="direct-control-button secondary"
            type="button"
            onClick={() => {
              setPointIndex(0);
              setIsSimulating(false);
            }}
            disabled={!routeLine.length}
          >
            Reset
          </button>
          <div className="direct-control-status">
            Current position: {currentPoint.lat.toFixed(5)},
            {currentPoint.lng.toFixed(5)}
          </div>
        </div>

        <div className="direct-card">
          <div className="direct-card-title">Stops</div>
          <ol className="direct-stops">
            {stops.map((stop) => (
              <li key={stop.label}>
                {stop.label} ({stop.lat.toFixed(5)}, {stop.lng.toFixed(5)})
              </li>
            ))}
          </ol>
        </div>

        <div className="direct-card">
          <div className="direct-card-title">Navigation Steps</div>
          {state.steps.length ? (
            <ol className="direct-steps">
              {state.steps.map((step, index) => (
                <li
                  key={`${step.instruction}-${index}`}
                  className={index === currentStepIndex ? "direct-step-active" : ""}
                >
                  {step.instruction || "Continue"}
                </li>
              ))}
            </ol>
          ) : (
            <p className="direct-muted">No instructions returned yet.</p>
          )}
        </div>

      </main>
    </div>
  );
}

export default DirectDriver;
