import home_illustration from "../assets/home_illustration.png"
import chakra2 from "../assets/chakra-2.svg"
import chakra3 from "../assets/chakra-3.svg"
import { useEffect, useState } from "react";

function Home() {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 80);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex items-start mx-20 justify-between mt-10 max-sm:mx-5 max-sm:flex-col max-sm:gap-10">
      <div className="flex-col w-1/2 max-sm:w-full relative">
        <h1 className="text-5xl font-bold text bg-clip-text text-transparent bg-gradient-to-r from-lightgreen via-lightyellow to-lightred font-grotesk">Lorem ipsum dolor sit amet.</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum pretium massa, at auctor diam aliquet ac. Etiam nec nisi.</p>
        <img src={chakra3} alt="chakra1" width={500} height={500} className="absolute pointer-events-none -left-80 -top-80 max-sm:-left-36 max-sm:-top-56 -z-10 " style={{ transform: `rotate(${-rotation}deg)` }}/>

      </div>
      <div className="flex relative">
        <img src={home_illustration} alt="home_illustration" width={350} height={350} className="pointer-events-none rounded-bl-[35%] rounded-tr-[35%]" />
        <img src={chakra2} alt="chakra1" width={250} height={250} className="absolute pointer-events-none left-44 -top-20 -z-10" style={{ transform: `rotate(${-rotation}deg)` }} />
      </div>
    </div>
  );
}

export default Home;