import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./pages/Layouts";
import Footer from "./components/Footer";
import Topnav from "./components/Topnav";
import Sidenav from "./components/Sidenav";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <>
      <Router>
        <MainContent />
      </Router>
    </>
  );
}

function MainContent() {
  // Get the current location using useLocation hook
  const location = useLocation();

  // Determine if the current route is the dashboard
  const isHome = location.pathname === "/";

  const [isSidenavOpen, setSidenavOpen] = useState(window.innerWidth >= 768);
  const ToggleSidebar = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidenavOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Topnav ToggleSidebar={ToggleSidebar} />
      {!isHome && (
        <Sidenav isOpen={isSidenavOpen} ToggleSidebar={ToggleSidebar} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Layouts" element={<Layouts />} />
        <Route path="/ButtonPage" element={<ButtonPage />} />
        <Route path="/CardPage" element={<CardPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
