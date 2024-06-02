import React from "react";
import WaiverForm from "./WaiverForm";
import PaymentInfoNew from "./PaymentInfoNew";
import Footer from "../footer/Footer";

const MembershipAndFees = () => {
  return (
    <div className="bg-gray-100 justify-center items-center">
      <div>
        <WaiverForm />
      </div>
      <div className="bg-customSeaGreen flex-grow flex flex-col justify-center">
        <PaymentInfoNew />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MembershipAndFees;
