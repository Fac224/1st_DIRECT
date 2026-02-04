import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function HelloPin() {
  const [code, setCode] = useState([]);
  const navigate = useNavigate();

  const handleDigit = (digit) => {
    const next = [...code, digit].slice(-4);
    setCode(next);
    if (next.join("") === "0000") {
      navigate("/hello-tasks");
    }
  };

  const handleBackspace = () => {
    setCode((prev) => prev.slice(0, -1));
  };

  return (
    <div className="hello-work">
      <header className="hello-topbar">
        <div className="hello-topbar-left">
          <Link className="hello-back" to="/hello-work">
            ← Back
          </Link>
          <span className="hello-date">6:13 · Tue, Feb 3</span>
        </div>
        <div className="hello-title">
          <span className="hello-badge">1</span>
          HELLO: Job
        </div>
        <div className="hello-topbar-right">
          <span className="hello-time">06 : 31 AM</span>
          <span className="hello-signal">LTE · 90%</span>
        </div>
      </header>

      <main className="hello-pin">
        <div className="hello-pin-avatar" aria-hidden="true" />
        <div className="hello-pin-name">Harris, David C.</div>
        <div className="hello-pin-sub">Please enter your PASS Code.</div>
        <div className="hello-pin-dots">{"•".repeat(code.length)}</div>

        <div className="hello-keypad">
          {[
            ["1", ""],
            ["2", "ABC"],
            ["3", "DEF"],
            ["4", "GHI"],
            ["5", "JKL"],
            ["6", "MNO"],
            ["7", "PQRS"],
            ["8", "TUV"],
            ["9", "WXYZ"],
          ].map(([num, letters]) => (
            <button
              className="hello-key"
              type="button"
              key={num}
              onClick={() => handleDigit(num)}
            >
              <div>{num}</div>
              <div className="hello-key-letters">{letters}</div>
            </button>
          ))}
          <button className="hello-key hello-key-icon" type="button">
            ⌖
          </button>
          <button
            className="hello-key"
            type="button"
            onClick={() => handleDigit("0")}
          >
            0
          </button>
          <button
            className="hello-key hello-key-icon"
            type="button"
            onClick={handleBackspace}
          >
            ⌫
          </button>
        </div>

        <button className="hello-forgot" type="button">
          Forgot PASS Code?
        </button>
      </main>
    </div>
  );
}

export default HelloPin;
