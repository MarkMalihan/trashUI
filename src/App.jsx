import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Topnav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
