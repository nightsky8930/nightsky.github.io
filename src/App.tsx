import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MembershipAndFees from "./components/membership-and-fees/MembershipAndFees";
import NavBar from "./components/headerbar/NavBar";
import TestPage from "./components/TestPage";

function App() {
  return (
    <div className="text-center w-full">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/membership-and-fees" element={<MembershipAndFees />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
