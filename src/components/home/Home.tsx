import ContactUs from './contact-us/ContactUs';
import Intro from './intro/Intro';
import Footer from '../footer/Footer';

const Home = () => {
	return (
		<div className="flex flex-grow flex-col bg-gray-100 items-strech md:w-full md:h-full justify-center items-center overflow-y-scroll">
			<div className="flex-grow flex flex-row w-full justify-center items-center">
				<Intro />
			</div>
			<div className="bg-customSeaGreen flex-grow flex flex-row md:w-full md:h-full justify-center">
				<ContactUs />
			</div>
			<div className="flex-grow flex flex-row w-full justify-center">
				<Footer />
			</div>
		</div>
	);
};

export default Home;