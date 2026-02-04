import { Link } from "react-router-dom";

function HelloTasks() {
  return (
    <div className="hello-work hello-tasks">
      <header className="hello-topbar">
        <div className="hello-topbar-left">
          <span className="hello-menu">☰</span>
          <span className="hello-date">6:31 · Tue, Feb 3</span>
        </div>
        <div className="hello-title">
          <span className="hello-badge">1</span>
          HELLO: Job
        </div>
        <div className="hello-topbar-right">
          <span className="hello-time">06 : 31 AM</span>
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
          <div className="hello-task-date">02/03/2026</div>
        </div>

        <div className="hello-task">
          <div className="hello-task-time">06:31 AM</div>
          <div className="hello-task-card">
            <div className="hello-task-icon">🚌</div>
            <div className="hello-task-info">
              <div className="hello-task-name">Driving Task: 1234 AM</div>
              <div className="hello-task-sub">Home to school · Bus: 4739</div>
              <div className="hello-task-location">Oak St & Elm St (E)</div>
              <div className="hello-task-location">SCHOOL 22</div>
            </div>
            <div className="hello-task-actions">
              <div className="hello-task-status">Available for Sign-In</div>
              <button className="hello-task-button" type="button">
                Sign In
              </button>
            </div>
          </div>
        </div>

        <div className="hello-task">
          <div className="hello-task-time">01:11 PM</div>
          <div className="hello-task-card">
            <div className="hello-task-icon">🚌</div>
            <div className="hello-task-info">
              <div className="hello-task-name">Driving Task: 1234 PM</div>
              <div className="hello-task-sub">Home to school · Bus: 4739</div>
              <div className="hello-task-location">Montessori Academy</div>
              <div className="hello-task-location">Kimball Ave & Vredenburgh Ave</div>
            </div>
            <div className="hello-task-actions">
              <div className="hello-task-status">
                Available for Sign-In at 01:09 PM
              </div>
              <button className="hello-task-button muted" type="button">
                Sign In
              </button>
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
