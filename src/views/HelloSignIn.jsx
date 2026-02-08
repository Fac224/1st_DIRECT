import { Link } from "react-router-dom";

function HelloSignIn() {
  return (
    <div className="hello-work">
      <header className="hello-topbar">
        <div className="hello-topbar-left">
          <span className="hello-menu">☰</span>
          <span className="hello-date">1:41 · Mon, Feb 16</span>
        </div>
        <div className="hello-title">
          <span className="hello-badge">1</span>
          HELLO: Work
        </div>
        <div className="hello-topbar-right">
          <span className="hello-time">01 : 41 PM</span>
          <span className="hello-signal">LTE · 89%</span>
        </div>
      </header>

      <main className="hello-signin">
        <div className="hello-signin-icon">✓</div>
        <div className="hello-signin-title">Good Work</div>
        <div className="hello-signin-sub">
          You successfully Signed In to Driving Task: 6070 PM
        </div>
        <div className="hello-signin-time">
          Signed In at 01:41PM
        </div>
        <Link className="hello-signin-button" to="/hello-active">
          Ready
        </Link>
      </main>
    </div>
  );
}

export default HelloSignIn;
