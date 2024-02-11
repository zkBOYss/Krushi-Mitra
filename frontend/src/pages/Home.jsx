import home_illustration from "../assets/home_illustration.png";
import chakra2 from "../assets/chakra-2.svg";
import chakra3 from "../assets/chakra-3.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HowWorks from "../components/HowWorks";
import { API_URL } from "../api";

function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 80);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mt-10  max-sm:flex-col max-sm:gap-10">
        <div className="flex-col w-1/2 max-sm:w-full relative">
          <h1 className="text-5xl font-bold max-sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-lightgreen via-lightyellow to-lightred font-grotesk">
            Welcome to Krushi-Mitra
          </h1>

          <div className="flex flex-col gap-2">
            <p className="text-xl max-sm:text-base font-poppins font-normal">
              Krushi-Mitra is a transformative platform bridging rural-urban
              divides by facilitating event connections. Our &apos;Community
              Catalyst &apos; feature empowers users to list beneficial events,
              fostering collaboration between government, urban, and rural
              communities.{" "}
            </p>
            <div className="flex flex-row gap-5 items-center max-sm:gap-2">
              <Link
                to="/events/add-events"
                className="text-lg bg-lightgreen py-1 px-2 text-white font-semibold max-sm:text-sm max-sm:font-medium max-sm:rounded-md font-grotesk rounded-lg  hover:bg-lightyellow  hover:text-black transition-all"
              >
                Add Event
              </Link>
              <Link
                to="/add-products"
                className="text-lg bg-none py-1 px-6 text-black border-lightgreen border  font-semibold max-sm:text-sm max-sm:font-medium max-sm:rounded-md font-grotesk rounded-lg  hover:bg-lightgreen  hover:text-black transition-all"
              >
                Add Products
              </Link>
            </div>
          </div>
          <img
            src={chakra3}
            alt="chakra1"
            width={500}
            height={500}
            className="absolute pointer-events-none -left-80 -top-80 max-sm:-left-36 max-sm:-top-56 -z-10 "
            style={{ transform: `rotate(${-rotation}deg)` }}
          />
        </div>
        <div className="flex relative">
          <img
            src={home_illustration}
            alt="home_illustration"
            width={350}
            height={350}
            className="pointer-events-none rounded-bl-[35%] rounded-tr-[35%]"
          />
          <img
            src={chakra2}
            alt="chakra1"
            width={250}
            height={250}
            className="absolute pointer-events-none left-44 -top-20 -z-10"
            style={{ transform: `rotate(${-rotation}deg)` }}
          />
        </div>
      </div>
      <HowWorks />
    </div>
  );
}

export default Home;
