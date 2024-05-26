import CourtPic from "../../../images/court.jpeg";

const HeroText = () => {
  return (
    <div>
      <h1 className="text-white text-left text-6xl font-semibold mb-4">
        Welcome to Palmetto Badminton Club
      </h1>
      <p className="text-white text-xl text-justify">
        The club is a non-profit organization dedicated to the play and
        promotion of badminton
      </p>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <div className="bg-gray-700 p-6 flex-grow flex items-center justify-center shadow-lg text-center">
        <div className="w-1/2 mx-4 px-32 items-center">
					<HeroText />
				</div>
        <div className="w-1/2 p-4">
          <img
            className="h-auto w-auto float-right"
            src={CourtPic}
            alt="Court pics not found!!"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
