import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
  	<div className="flex flex-grow flex-row justify-center items-center mt-10">
			<div className="bg-white px-32 flex-grow flex justify-center shadow-lg">
				{/* Left Column: Contact Form */}
				<div className="w-1/2 p-6">
						<h2 className="text-2xl text-left font-semibold mb-4">Reach us!</h2>
						<form>
							<ContactForm />
						</form>
				</div>
				{/* Right Column: Contact Information */}
				<div className="w-1/2 p-6">
						<div className="text-left">
							<h2 className="text-2xl font-semibold mb-4">Contact us. Better yet, see us in person!</h2>
							<p className="text-gray-700 mb-4">
								Walk-in to the club anytime during the club hours and someone will be available to welcome you and help you get registered.
							</p>
							<div className="mb-4">
								<p className="text-gray-700">
									<strong className="underline">New to the sport?</strong> Come and play a few games on us for <strong>FREE!</strong>
								</p>
								<a href="https://chat.whatsapp.com/17CBBe8C9Mv6Mh9i4XTKbo" className="text-green-500 bold underline">Join our WhatsApp group</a>
							</div>
							<h3 className="text-xl font-semibold mb-2">Palmetto Badminton Club</h3>
							<p className="text-gray-700 mb-4">
								Treholm Park - 3900 Covenant Road, Columbia SC 29204, United States
							</p>
							<p className="text-gray-700 mb-4">
								<a href="mailto:palmettobadmnclub@gmail.com" className="text-blue-500 underline">palmettobadmnclub@gmail.com</a>
							</p>
							<h3 className="text-xl font-semibold mb-2">Hours of Operation - Adults & Kids</h3>
							<table className="table-auto mb-4">
								<thead>
									<tr>
										<th className="py-2">Day</th>
										<th className="py-2">Hours</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="py-2">Monday</td>
										<td className="py-2">6:30 PM - 8:00 PM</td>
									</tr>
									<tr>
										<td className="py-2">Saturday</td>
										<td className="py-2">10:00 AM - 12:00 PM</td>
									</tr>
								</tbody>
							</table>
						</div>
				</div>
			</div>
		</div>
  );
};

export default ContactUs;