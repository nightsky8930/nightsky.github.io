import * as React from "react";

const PaymentInfo = () => {
  return (
    <div className="flex flex-col items-center mt-8 py-14">
      <h2 className="text-2xl font-semibold mb-4">Membership and Fees</h2>
      <div className="overflow-x-auto mx-32 px-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            {/* <div className="grid grid-rows-2 grid-flow-col gap-1 border border-gray-300">
              <div className="row-span-2 col-span-1">Membership Type</div>
              <div className="row-span-1 col-span-2">Playing Fee</div>
              <div className="row-span-2 col-span-1">Monthly</div>
              <div className="row-span-2 col-span-1">Daily</div>
            </div> */}
            <tr className="bg-gray-200 text-gray-700">
              <th rowSpan={2} className="px-4 py-2 border border-gray-300">
                Membership Type
              </th>
            </tr>
            <tr>
              {/* <th rowSpan={1} colSpan={2} className="px-4 py-2 border border-gray-300">
                Annual Membership Fee
                <br />
                (Paid once every season from Jan 1st to Dec 31st)
              </th> */}
              <th colSpan={2} className="px-4 py-2 border border-gray-300">
                Playing Fee
              </th>
            </tr>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 border border-gray-300"></th>
              {/* <th className="px-4 py-2 border border-gray-300">
                Fee if the joining date is during the months
                <br />
                Jan - Sept
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Fee if the joining date is during the months
                <br />
                Oct - Dec
              </th> */}
              <th className="px-4 py-2 border border-gray-300">
                Monthly
                <br />
                (to be paid on 1st day of play each month)
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Daily
                <br />
                (per day per individual or additional family member)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Single</td>
              {/* <td className="px-4 py-2 border border-gray-300">$30.00</td>
              <td className="px-4 py-2 border border-gray-300">$15.00</td> */}
              <td className="px-4 py-2 border border-gray-300">$35.00</td>
              <td className="px-4 py-2 border border-gray-300">$7.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Family{" "}
                <span className="italic">
                  (Covers members, spouse, and children)
                </span>
              </td>
              {/* <td className="px-4 py-2 border border-gray-300">$35.00</td>
              <td className="px-4 py-2 border border-gray-300">$17.50</td> */}
              <td className="px-4 py-2 border border-gray-300">$35.00</td>
              <td className="px-4 py-2 border border-gray-300">$7.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Senior <span className="italic">(65 years or above)</span>
              </td>
              {/* <td className="px-4 py-2 border border-gray-300">$20.00</td>
              <td className="px-4 py-2 border border-gray-300">$10.00</td> */}
              <td className="px-4 py-2 border border-gray-300">$25.00</td>
              <td className="px-4 py-2 border border-gray-300">$7.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Student <span className="italic">(15 - 22 years)</span>
              </td>
              {/* <td className="px-4 py-2 border border-gray-300">$20.00</td>
              <td className="px-4 py-2 border border-gray-300">$10.00</td> */}
              <td className="px-4 py-2 border border-gray-300">$25.00</td>
              <td className="px-4 py-2 border border-gray-300">$7.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Non-Member</td>
              {/* <td className="px-4 py-2 border border-gray-300">N/A</td>
              <td className="px-4 py-2 border border-gray-300">N/A</td> */}
              <td className="px-4 py-2 border border-gray-300">N/A</td>
              <td className="px-4 py-2 border border-gray-300">$10.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-blue-600 mt-4">
        Payment Mode accepted: Electronic Zelle payment made to{" "}
        <span className="font-semibold">
          "tres@greenvillebadmintonclub.com"
        </span>
      </p>
    </div>
  );
};

export default PaymentInfo;
