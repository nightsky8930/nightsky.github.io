import React from "react";

const ClubInfo = () => {
  return (
    <div className="md:text-left">
      <h2 className="text-4xl font-bold pb-6">Get in Touch with Us!</h2>
      <p className="text-lg mb-8">
        Drop by the club during our hours, and our friendly team will be ready
        to welcome and assist you.
      </p>
      <div className="mb-8">
        <p className="text-lg mb-2">
          <strong className="underline">New to Badminton?</strong> Enjoy a few
          free games on us!
        </p>
        <a
          href="https://chat.whatsapp.com/17CBBe8C9Mv6Mh9i4XTKbo"
          className="text-blue-500 font-semibold underline hover:text-blue-800 transition duration-300"
        >
          Join our WhatsApp Group
        </a>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Badminton Court</h3>
      <p className="text-lg mb-6">
        Treholm Park - 3900 Covenant Road, Columbia SC 29204, USA
      </p>
      <p className="text-lg mb-8">
        <a
          href="mailto:palmettobadmnclub@gmail.com"
          className="text-blue-500 font-semibold underline hover:text-blue-800 transition duration-300"
        >
          palmettobadmnclub@gmail.com
        </a>
      </p>
      <h3 className="text-2xl font-semibold mb-4">Operating Hours</h3>
      <div className="flex rounded-lg justify-center md:justify-start">
        <div className="w-full">
          <table className="rounded-lg mb-4 w-full border-collapse p-4">
            <thead className="">
              <tr className="bg-gray-100">
                <th className="rounded-tl-lg px-4 py-2 text-left text-gray-600">
                  Day
                </th>
                <th className="rounded-tr-lg px-4 py-2 text-left text-gray-600">
                  Hours
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: "Mon", hours: "6:30 pm - 8:00 pm" },
                { day: "Tue", hours: "Closed" },
                { day: "Wed", hours: "Closed" },
                { day: "Thu", hours: "Closed" },
                { day: "Fri", hours: "Closed" },
                { day: "Sat", hours: "10:00 am - 12:00 pm" },
                { day: "Sun", hours: "Closed" },
              ].map((entry, index) => (
                <tr
                  key={entry.day}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 text-gray-700">{entry.day}</td>
                  <td className="px-4 py-2 text-left text-gray-700">
                    {entry.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClubInfo;
