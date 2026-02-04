import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Dashboard from "./views/Dashboard.jsx";
import HelloWork from "./views/HelloWork.jsx";
import HelloPin from "./views/HelloPin.jsx";
import HelloTasks from "./views/HelloTasks.jsx";
import Login from "./views/Login.jsx";
import RouteList from "./views/RouteList.jsx";
import RouteDetail from "./views/RouteDetail.jsx";
import Navigation from "./views/Navigation.jsx";

function App() {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/" ||
    location.pathname === "/hello-work" ||
    location.pathname === "/hello-pin" ||
    location.pathname === "/hello-tasks";
  const headerRightText = location.pathname.startsWith("/navigation")
    ? "Navigation"
    : "Welcome to Skylar Drive, Chong, Felix";

  return (
    <div className="app-shell">
      {!hideHeader && <Header rightText={headerRightText} />}
      <main className={hideHeader ? "main main-full" : "main"}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hello-work" element={<HelloWork />} />
          <Route path="/hello-pin" element={<HelloPin />} />
          <Route path="/hello-tasks" element={<HelloTasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/routes" element={<RouteList />} />
          <Route path="/route/:routeId" element={<RouteDetail />} />
          <Route path="/navigation/:routeId" element={<Navigation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
