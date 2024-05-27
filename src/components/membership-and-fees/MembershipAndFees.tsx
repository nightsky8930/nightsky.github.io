import React, { Component } from "react";
import WaiverForm from "./WaiverForm";
import PaymentInfo from "./PaymentInfo";
import Footer from "../footer/Footer";

class MembershipAndFees extends Component {
  render() {
    return (
      <div className="flex flex-col bg-gray-100 justify-center items-center">
        <div className="">
          <WaiverForm />
        </div>
        <div className="bg-white flex">
          <PaymentInfo />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MembershipAndFees;
