
import home_illustration2 from "../assets/home_illustration2.png";

const HowWorks = () => {
    return (
        <div className="flex max-sm:flex-col py-6 container  my-20 px-16 mx-auto bg-lightyellow rounded-3xl max-sm:px-4 max-sm:my-10">
            <div className="w-1/2 max-sm:w-full">
                <div className="flex flex-col max-sm:flex max-sm:items-center">
                    <h1 className="text-3xl text-zinc-700 font-bold font-grotesk max-sm:text-xl">
                        HOW KRUSHI MITRA WORKS?
                    </h1>
                    <h3 className="mt-2 max-sm:text-base font-semibold font-poppins">
                        TAKE A LOOK AT OUR{" "}
                        <span className="font-bold  text-lightred">
                            PLATFORM DEMO:
                        </span>
                    </h3>
                </div>
                <ol className="flex flex-col gap-5 my-10 text-lg font-grotesk">
                    <li>1. Sign-up to the platform.</li>
                    <li>
                        2. Discover a diverse range of products and services from local
                        farmers and artisans..
                    </li>
                    <li>3. Create or Attend Events.</li>
                    <li>4. Explore Cultures and Local Art</li>
                </ol>
            </div>
            <img src={home_illustration2} alt="home_illustration2" className="w-1/2 max-sm:w-full" />
        </div>
    );
};

export default HowWorks;