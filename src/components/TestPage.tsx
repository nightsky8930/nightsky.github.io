import Calendar from "./calendar/Calendar";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";

const TestPage = () => {
  return (
    <div className="min-h-screen flex flex-grow flex-col w-full">
      <NavBar />
      <div className="bg-customSeaGreen flex flex-grow flex-col max-md:p-4 md:p-32 w-full">
        
      </div>
      <div className="flex-grow-0 flex flex-row w-full justify-center">
				<Footer />
			</div>
    </div>
  );
};

export default TestPage;
