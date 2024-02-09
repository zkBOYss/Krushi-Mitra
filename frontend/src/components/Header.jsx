import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {

  return (
    <div
      className="flex py-5 g rounded-2xl mx-2 sticky top-2 backdrop-blur-lg z-40
	"
    >
      <div className="container mx-auto flex justify-between px-6">
        <Link
          to="/"
          className=" flex lg:text-4xl items-center gap-1  text-lg text-lightred  cursor-pointer" style={{fontFamily : "Vestige Grotesk"}}
        >
            <img src={logo} alt="logo" className="w-11 h-12 max-sm:w-6 max-sm:h-6" />
          Krushi Mitra
        </Link>
        <div
          className={`lg:flex md:flex lg:items-center md:items-center lg:space-x-4 md:space-x-4 md:py-1 lg:py-1 lg:text-base md:text-base lg:text-black md:text-black lg:font-medium font-poppins  md:font-medium hidden
		  `}
        >
          <Link to="/" className="py-1 px-2  hover:text-lightyellow ease-in transition-all">
            Home
          </Link>
          <Link to="/dashboard" className="py-1 px-2  hover:text-lightyellow ease-in transition-all ">
            Dashboard
          </Link>
          <Link to="/marketplace" className="py-1 px-2  hover:text-lightyellow ease-in transition-all ">
            Marketplace
          </Link>
          <Link to="/events" className="py-1 px-2  hover:text-lightyellow ease-in transition-all ">
            Events
          </Link>
          <Link to="/add-products" className="py-1 px-2  hover:text-lightyellow ease-in transition-all">
            Add Product
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Header;