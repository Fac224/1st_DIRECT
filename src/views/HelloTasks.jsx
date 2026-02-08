import { Link, useNavigate } from "react-router-dom";

function HelloTasks() {
  const navigate = useNavigate();
  return (
    <div className="hello-work hello-tasks">
      <header className="hello-topbar">
        <div className="hello-topbar-left">
          <button
            className="hello-back"
            type="button"
            onClick={() => navigate(-1)}
          >
            ←
          </button>
          <span className="hello-date">01:41 PM · Mon, Feb 16</span>
        </div>
        <div className="hello-title">
          <span className="hello-badge">1</span>
          HELLO: Job
        </div>
        <div className="hello-topbar-right">
          <span className="hello-time">01 : 41 PM</span>
          <span className="hello-signal">LTE · 89%</span>
        </div>
      </header>

      <main className="hello-tasks-body">
        <div className="hello-profile">
          <div className="hello-avatar-lg" aria-hidden="true" />
          <div>
            <div className="hello-name-lg">Harris, David C.</div>
            <div className="hello-id">***4560</div>
          </div>
        </div>

        <div className="hello-task-header">
          <div className="hello-task-title">Duty List</div>
          <div className="hello-task-date">02/16/2026</div>
        </div>

        <div className="hello-task">
          <div className="hello-task-time">06:31 AM</div>
          <div className="hello-task-card">
            <div className="hello-task-icon">🚌</div>
            <div className="hello-task-info">
              <div className="hello-task-name">Driving Task: 6070 AM</div>
              <div className="hello-task-sub">Home to school · Bus: 454</div>
              <div className="hello-task-location">
                Bronx River Rd & Raybrook (S)
              </div>
              <div className="hello-task-location">ROSMARIE ANN SIRAGUSA</div>
            </div>
            <div className="hello-task-actions">
              <div className="hello-task-status">
                Available for Sign-In at 06:31 AM
              </div>
              <button className="hello-task-button muted" type="button">
                Sign In
              </button>
            </div>
          </div>
        </div>

        <div className="hello-task">
          <div className="hello-task-time">01:41 PM</div>
          <div className="hello-task-card">
            <div className="hello-task-icon">🚌</div>
            <div className="hello-task-info">
              <div className="hello-task-name">Driving Task: 6070 PM</div>
              <div className="hello-task-sub">Home to school · Bus: 454</div>
              <div className="hello-task-location">Pearls Hawthorne</div>
              <div className="hello-task-location">Herriot St & Jackson St</div>
            </div>
            <div className="hello-task-actions">
              <div className="hello-task-status">Available for Sign-In</div>
              <Link className="hello-task-button" to="/hello-signin">
                Sign In
              </Link>
            </div>
          </div>
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

export default HelloTasks;
