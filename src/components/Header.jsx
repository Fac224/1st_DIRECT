function Header({ rightText = "Welcome to Skylar Drive, Chong, Felix" }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-brand">
          <span className="topbar-logo" />
          <div className="topbar-title">
            <span className="topbar-title-main">skylar</span>
            <span className="topbar-title-sub">TECHNOLOGIES</span>
          </div>
        </div>
        <div className="topbar-welcome">{rightText}</div>
      </div>
    </header>
  );
}

export default Header;
