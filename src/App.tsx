import React from "react";
import Home from "./components/home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import MembershipAndFees from "./components/membership-and-fees/MembershipAndFees";
import TestPage from "./components/TestPage";
import Calendar from "./components/calendar/Calendar";

function App() {
  return (
    <div className="flex-grow flex flex-col text-center w-full">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/membership-and-fees" element={<MembershipAndFees />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
