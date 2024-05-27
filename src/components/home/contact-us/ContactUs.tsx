import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex-grow flex justify-center items-center mt-10">
      <div className="bg-white px-4 lg:px-32 flex-grow flex flex-col md:flex-row justify-center shadow-lg">
        {/* Left Column: Contact Form */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl md:text-left font-semibold mb-4">Reach us!</h2>
          <form>
            <ContactForm />
          </form>
        </div>
        {/* Right Column: Contact Information */}
        <div className="md:w-1/2 p-6">
          <div className="md:text-left">
            <h2 className="text-2xl font-semibold mb-4">
              Contact us. Better yet, see us in person!
            </h2>
            <p className="text-gray-700 mb-4">
              Walk-in to the club anytime during the club hours and someone will
              be available to welcome you and help you get registered.
            </p>
            <div className="mb-4">
              <p className="text-gray-700">
                <strong className="underline">New to the sport?</strong> Come
                and play a few games on us for <strong>FREE!</strong>
              </p>
              <a
                href="https://chat.whatsapp.com/17CBBe8C9Mv6Mh9i4XTKbo"
                className="text-green-500 bold underline"
              >
                Join our WhatsApp group
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Palmetto Badminton Club
            </h3>
            <p className="text-gray-700 mb-4">
              Treholm Park - 3900 Covenant Road, Columbia SC 29204, United
              States
            </p>
            <p className="text-gray-700 mb-4">
              <a
                href="mailto:palmettobadmnclub@gmail.com"
                className="text-blue-500 underline"
              >
                palmettobadmnclub@gmail.com
              </a>
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Hours of Operation - Adults & Kids
            </h3>
						<div className="flex max-sm:flex-row max-sm:justify-center">
							<table className="table-auto mb-2 border-spacing-0">
								<tbody>
									<tr><td className="pr-4">Mon</td><td className="text-left">6:30 pm - 8:00 pm</td></tr>
									<tr><td className="pr-4">Tue</td><td className="text-left">Closed</td></tr>
									<tr><td className="pr-4">Wed</td><td className="text-left">Closed</td></tr>
									<tr><td className="pr-4">Thu</td><td className="text-left">Closed</td></tr>
									<tr><td className="pr-4">Fri</td><td className="text-left">Closed</td></tr>
									<tr><td className="pr-4">Sat</td><td className="text-left">10:00 am - 12:00 pm</td></tr>
									<tr><td className="pr-4">Sun</td><td className="text-left">Closed</td></tr>
								</tbody>
							</table>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
