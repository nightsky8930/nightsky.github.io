import { useEffect, useRef, useState } from "react";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";

const TestPage = () => {
  const ref = useRef();
  const [height, setHeight] = useState(0);

  const onLoad = () => {
    // @ts-ignore
    setHeight(ref?.current?.contentWindow?.document?.body?.scrollHeight);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="min-h-screen flex flex-grow flex-col w-full">
      <NavBar />
      <div className="bg-customSeaGreen flex flex-grow flex-col max-md:p-10 md:p-32 w-full">
        <div className="flex flex-grow flex-col w-full h-full rounded-lg">
          <iframe
            className="flex-grow w-full h-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.441954815948!2d-80.98229658817169!3d34.03253257305253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8af8f7c0e8537%3A0x9481e0122e5d26de!2sTrenholm%20Park!5e0!3m2!1sen!2sus!4v1718425203858!5m2!1sen!2sus"
            height={height}
            loading="lazy"
            title="Trenholm Park Map"
          ></iframe>
        </div>
      </div>
      <div className="flex-grow-0 flex flex-row w-full justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default TestPage;
