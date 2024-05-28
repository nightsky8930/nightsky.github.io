import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MembershipAndFees from "./components/membership-and-fees/MembershipAndFees";
import NavBar from "./components/headerbar/NavBar";

function App() {
  return (
    <div className="text-center w-full">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership-&-fees" element={<MembershipAndFees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
