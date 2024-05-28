import React from "react";
import WaiverForm from "./WaiverForm";
import PaymentInfo from "./PaymentInfo";
import Footer from "../footer/Footer";

const MembershipAndFees = () => {
  return (
    <div className="bg-gray-100 justify-center items-center">
      <div>
        <WaiverForm />
      </div>
      <div className="bg-white flex-grow flex flex-col justify-center">
        <PaymentInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MembershipAndFees;
