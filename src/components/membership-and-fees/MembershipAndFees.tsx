import React from "react";
import WaiverForm from "./WaiverForm";
import PaymentInfoNew from "./PaymentInfoNew";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";

const MembershipAndFees = () => {
  return (
    // <div className="flex flex-grow flex-col bg-gray-100 justify-center items-center">
    //   <div className="flex-grow flex">
    //     <WaiverForm />
    //   </div>
    //   <div className="flex-grow flex">
    //     <PaymentInfoNew />
    //   </div>
    //   <div className="flex-grow flex flex-row">
    //     <Footer />
    //   </div>
    // </div>
    <div className="min-h-screen flex flex-col flex-grow bg-gray-100 justify-center items-center">
      <NavBar />
      <div className="flex w-full">
        <WaiverForm />
      </div>
      <div className="bg-customSeaGreen flex-grow flex flex-col w-full justify-center">
        <PaymentInfoNew />
      </div>
      <div className="flex w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MembershipAndFees;
