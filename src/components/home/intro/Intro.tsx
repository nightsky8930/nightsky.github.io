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
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      {/* <div className=" flex-grow flex flex-col justify-center items-center"> */}
        <div className="max-md:hidden bg-gray-800 p-6 flex-grow flex flex-row items-center justify-center shadow-lg text-center">
          <div className="w-1/2 mx-4 px-32 items-center">
            <HeroText />
          </div>
          <div className="w-1/2 p-4">
            <div className="h-auto w-auto">
              <img
                className="float-right"
                src={CourtPic}
                alt="Court pics not found!!"
              ></img>
            </div>
          </div>
        </div>
      {/* </div> */}
      {/* <div className="flex-grow flex flex-row justify-center items-center"> */}
        <div className="md:hidden bg-gray-800 p-6 flex-grow flex flex-col items-center justify-center shadow-lg text-center">
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
      {/* </div> */}
    </div>
  );
};

export default Intro;
