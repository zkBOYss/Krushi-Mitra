import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import LogoutButton from "./LogoutButton";
import logo from "../assets/logo.png";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const user = useAuthContext();

    return (
        <div
            className="flex py-5 shadow-lg rounded-2xl sticky w-full top-2 backdrop-blur-lg z-40
	"
        >
            <div className="container mx-auto flex justify-between px-6">
                <Link
                    to="/"
                    className="flex items-center lg:text-3xl md:text-3xl text-lg font-bold text-lightred font-grotesk cursor-pointer" style={{fontFamily: "Vestige Grotesk"}}
                >
                    <img src={logo} alt="Logo" className="w-12 h-12 max-sm:w-8 max-sm:h-8 mr-2" />
                    <span className="lg:text-3xl md:text-3xl">Krushi Mitra</span>

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
                {toggle && toggle ? (
                    <div
                        className={`${toggle
                                ? " flex w-full flex-col bg-lightgreen rounded-b-2xl items-center font-poppins  absolute right-0 top-16 md:hidden lg:hidden"
                                : "hidden"
                            }`}
                    >
                        <Link to="/" className="py-1 px-2 hover:text-white">
                            Home
                        </Link>
                        <Link to="/dashboard" className="py-1 px-2 hover:text-white">
                            Dashboard
                        </Link>
                        <Link to="/marketplace" className="py-1 px-2 hover:text-white ">
                            Marketplace
                        </Link>
                        <Link to="/events" className="py-1 px-2 hover:text-white ">
                            Events
                        </Link>
                        <Link to="/add-products" className="py-1 px-2 hover:text-white">
                            Add Product
                        </Link>
                        {user ? (
                            <Link to="/sign-in" className="py-1 px-2 hover:text-white">
                                Logout
                            </Link>
                        ) : (
                            <Link to="/sign-in" className="py-1 px-2 hover:text-white">
                                Sign In
                            </Link>
                        )}
                    </div>
                ) : null}

                <div
                    onClick={() => setToggle(!toggle)}
                    className="flex items-center gap-1 flex-col lg:hidden md:hidden cursor-pointer"
                >
                    <span className="flex w-7 h-1 bg-lightgreen"></span>
                    <span className="flex w-7 h-1 bg-lightgreen"></span>
                    <span className="flex w-7 h-1 bg-lightgreen"></span>
                </div>
                <div className="hidden space-x-4 lg:flex md:flex items-center">
                    {user && user.userId ? (
                        <Link to="/">
                            <LogoutButton />
                        </Link>
                    ) : (
                        <Link
                            to="/sign-in"
                            className="text-lg bg-lightgreen py-1 px-6 text-black font-semibold font-grotesk
              rounded-lg  hover:bg-lightred  hover:text-white transition-all"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;