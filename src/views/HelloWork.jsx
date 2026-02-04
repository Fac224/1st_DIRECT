import { useState } from "react";
import { Link } from "react-router-dom";

function HelloWork() {
  const [query, setQuery] = useState("");
  const showResults = query.trim().toLowerCase() === "harris";

  return (
    <div className="hello-work">
      <header className="hello-topbar">
        <div className="hello-topbar-left">
          <span className="hello-menu">☰</span>
          <span className="hello-date">6:12 · Tue, Feb 3</span>
        </div>
        <div className="hello-title">
          <span className="hello-badge">1</span>
          HELLO: Job
        </div>
        <div className="hello-topbar-right">
          <span className="hello-time">06 : 12 AM</span>
          <span className="hello-signal">LTE · 90%</span>
        </div>
      </header>

      <main className="hello-body">
        <div className="hello-card">
          <div className="hello-icon">🔎</div>
          <h2>Enter your last name to find your assigned scheduled duties.</h2>
          <label className="hello-label" htmlFor="last-name">
            Enter your Last Name
          </label>
          <div className="hello-input">
            <span className="hello-input-icon">🔍</span>
            <input
              id="last-name"
              placeholder="E.g. Smith"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          {showResults ? (
            <div className="hello-results">
              <div className="hello-results-title">Search Results</div>
              <Link className="hello-result" to="/hello-pin">
                <div className="hello-avatar" aria-hidden="true" />
                <div>
                  <div className="hello-name">Harris, David C.</div>
                  <div className="hello-role">Driver CDL</div>
                </div>
                <div className="hello-id">***5406</div>
                <div className="hello-status">
                  <span className="hello-check">✓</span> Duties available
                </div>
              </Link>
              <div className="hello-result">
                <div className="hello-avatar" aria-hidden="true" />
                <div>
                  <div className="hello-name">Harris, Emily S.</div>
                  <div className="hello-role">Driver CDL</div>
                </div>
                <div className="hello-id">***1086</div>
                <div className="hello-status">
                  <span className="hello-check">✓</span> Duties available
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="hello-chip">HELLO: Driver Pad</div>
        <div className="hello-bus" aria-hidden="true">
          🚌
        </div>
        <Link className="hello-logout" to="/">
          Log Out from HELLO: Job
        </Link>
        <div className="hello-footer">
          <span>Change Language</span>
          <span>Version 2.2.8</span>
        </div>
      </main>
    </div>
  );
}

export default HelloWork;
