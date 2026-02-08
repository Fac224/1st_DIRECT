import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Dashboard from "./views/Dashboard.jsx";
import HelloWork from "./views/HelloWork.jsx";
import HelloPin from "./views/HelloPin.jsx";
import HelloTasks from "./views/HelloTasks.jsx";
import HelloSignIn from "./views/HelloSignIn.jsx";
import HelloActive from "./views/HelloActive.jsx";
import DirectDriver from "./views/DirectDriver.jsx";
import DirectRoutes from "./views/DirectRoutes.jsx";
import DirectAfternoon from "./views/DirectAfternoon.jsx";
import BusSelect from "./views/BusSelect.jsx";
import RouteMenu from "./views/RouteMenu.jsx";
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
    location.pathname === "/hello-tasks" ||
    location.pathname === "/hello-signin" ||
    location.pathname === "/hello-active" ||
    location.pathname === "/direct-driver" ||
    location.pathname === "/direct" ||
    location.pathname === "/direct-afternoon" ||
    location.pathname === "/bus-select" ||
    location.pathname === "/route-menu";
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
          <Route path="/hello-signin" element={<HelloSignIn />} />
          <Route path="/hello-active" element={<HelloActive />} />
          <Route path="/direct-driver" element={<DirectDriver />} />
          <Route path="/direct" element={<DirectRoutes />} />
          <Route path="/direct-afternoon" element={<DirectAfternoon />} />
          <Route path="/bus-select" element={<BusSelect />} />
          <Route path="/route-menu" element={<RouteMenu />} />
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
