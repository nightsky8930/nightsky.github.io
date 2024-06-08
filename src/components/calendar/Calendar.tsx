import ReactCalendar from "./react-calendar/ReactCalendar";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";

const Calendar = () => {
  return (
    <div className="min-h-screen flex flex-grow flex-col w-full">
      <div>
        <NavBar />
      </div>
      <div className="bg-customSeaGreen flex flex-grow flex-col max-md:p-4 md:p-32 w-full">
        <div className="flex flex-row flex-grow items-center justify-center">
          <ReactCalendar />
        </div>
      </div>
      <div className="flex-grow-0 flex flex-row w-full justify-center">
				<Footer />
			</div>
    </div>
  );
};

export default Calendar;
