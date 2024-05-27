import ContactUs from './contact-us/ContactUs';
import Intro from './intro/Intro';
import Footer from '../footer/Footer';

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
				<Footer />
			</div>
		</div>
	);
};

export default Home;