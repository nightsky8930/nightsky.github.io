import React from 'react';
import ContactUs from './contact-us/ContactUs';
import Intro from './intro/Intro';

const Home = () => {
	return (
		<div className="bg-gray-100 justify-center items-center">
			<div>
				<Intro />
			</div>
			<div className="bg-white flex">
				<ContactUs />
			</div>
			<div>
				<footer className="bg-gray-800 flex w-full justify-center p-4 text-white text-center">
					<p>Copyright &copy; 2024 Palmetto Badminton Club</p>
				</footer>
			</div>
		</div>
	);
};

export default Home;