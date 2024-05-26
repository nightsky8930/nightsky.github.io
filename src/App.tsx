import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import MembershipAndFees from './components/MembershipAndFees';
import NavBar from './components/HeaderBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveHeaderBar /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/membership-&-fees" element={<MembershipAndFees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
