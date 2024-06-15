import { Link } from "react-router-dom";
import CourtPic from "../../../images/court.jpeg";

const HeroText = () => {
  return (
    <div>
      <h1 className="text-white md:text-left text-3xl md:text-6xl font-semibold mb-4">
        Welcome to Palmetto Badminton Club
      </h1>
      <p className="text-white text-xl lg:text-justify">
        The club is a non-profit organization dedicated to the play and
        promotion of badminton
      </p>
      <div className="flex-grow flex flex-row items-center py-4 max-md:py-2">
        <Link
          to="/test-page"
          className="flex-grow flex bg-customGreenBlue hover:bg-green-700 items-center justify-center rounded-full text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
        >
          LOCATE US
        </Link>
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <>
      <div className="bg-gray-500">
        <div className="max-md:hidden p-6 flex-grow flex flex-row items-center justify-center shadow-lg text-center">
          <div className="w-1/2 mx-4 px-32 items-center">
            <HeroText />
          </div>
          <div className="w-1/2 px-32 py-8">
            <div className="md:h-80 md:w-85 overflow-hidden">
              <div className="h-full w-full">
                <img
                  className="float-right"
                  src={CourtPic}
                  alt="Court pics not found!!"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden p-6 flex-grow flex flex-col items-center justify-center shadow-lg text-center">
          <div className="h-auto w-auto p-4">
            <img
              className="float-right"
              src={CourtPic}
              alt="Court pics not found!!"
            ></img>
          </div>
          <div className="items-center">
            <HeroText />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
