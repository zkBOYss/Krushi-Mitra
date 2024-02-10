import htf from "../assets/htf_logo.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import star from "../assets/star.svg";
import Marquee from "react-fast-marquee";

const Footer = () => {
	return (
		<div className=" flex flex-col justify-center">
			<Marquee>
				<div className="z-10 w-full bg-lightred h-12 max-sm:h-16 mt-24 max-sm:mt-6 max-sm:text-lg flex items-center text-2xl overflow-hidden justify-center font-grotesk">
				Empowering Rural Communities
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Krushi-Mitra
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Empowering Rural Communities
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Krushi-Mitra
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Empowering Rural Communities
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Krushi-Mitra
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Empowering Rural Communities
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Krushi-Mitra
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
					Empowering Rural Communities
					<img
						src={star}
						width={24}
						height={24}
						alt="star"
						className="mx-2 pointer-events-none max-sm:w-8 max-sm:h-8  "
					/>
				</div>
			</Marquee>
			<div className="flex flex-col justify-center items-center mx-20 mt-10 max-sm:mx-5">
				<div className="flex  justify-between w-full items-center my-1">
					{/* Logo */}
					<div className="flex flex-col gap-2">
						<Link
							to="/"
							className="flex items-center gap-1 lg:text-2xl text-sm font-bold text-lightred cursor-pointer" style={{fontFamily : "Vestige Grotesk"}}
						>
							{" "}
							<img src={logo} alt="logo" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
							Krushi Mitra
						</Link>
						<div className="flex max-sm:flex-col items-center font-poppins font-bold gap-2">
							<h1>built at</h1>
							<Link
								to="https://hackthisfall.tech/"
								target="_blank"
							>
								<img
									src={htf}
									alt="hackthisfall logo"
									className="pointer-events-none"
									width={75}
								/>
							</Link>
						</div>
					</div>
					{/* Quick Links */}
					<div className="flex flex-col gap-1 text-sm text-lightgray font-poppins text-right  max-sm:mt-4">
						<Link
							to="/"
							className="py-1 px-2  hover:underline hover:text-lightgreen ease-in transition-all"
						>
							Home
						</Link>
						<Link
							to="/dashboard"
							className="py-1 px-2  hover:underline hover:text-lightgreen ease-in transition-all "
						>
							Dashboard
						</Link>
						<Link
							to="/marketplace"
							className="py-1 px-2  hover:underline hover:text-lightgreen ease-in transition-all "
						>
							Marketplace
						</Link>
						<Link
							to="/events"
							className="py-1 px-2  hover:underline hover:text-lightgreen ease-in transition-all "
						>
							Events
						</Link>
						<Link
							to="/add-products"
							className="py-1 px-2  hover:underline hover:text-lightgreen ease-in transition-all"
						>
							Add Product
						</Link>
					</div>
				</div>
				{/* Seprator */}
				<div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>
				<div className="flex justify-between w-full items-center py-4">
					{/* Copy right */}
					<div className="text-base font-poppins text-lightgray max-sm:text-xs">
						©2024 Krushi Mitra 
					</div>
					{/* Social Media */}
					<div className="flex gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M20.9608 5.25489C21.1399 4.84457 20.6691 4.49899 20.2745 4.71049C19.6557 5.04213 19.0045 5.31177 18.3302 5.5148C15.6161 2.12518 10.94 4.97882 11.631 8.63441C11.6534 8.75303 11.5652 8.86786 11.4445 8.86559C8.90196 8.81779 7.10701 7.99065 5.37498 6.04184C5.12908 5.76516 4.69391 5.7782 4.50788 6.09821C3.36354 8.06663 0.538612 14.1724 7.80588 16.6205C6.38468 17.5852 4.53053 18.4045 3.58068 18.7963C3.34575 18.8932 3.33572 19.2266 3.56743 19.3309C13.0505 23.6026 22.2799 17.3808 19.3574 7.58866C20.0384 6.91712 20.5813 6.12419 20.9608 5.25489Z"
								stroke="#545454"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M16.9999 6.99945H17.0099M2.99994 12C2.99994 9.48639 2.99994 8.22958 3.35348 7.21924C3.9867 5.40959 5.40953 3.98676 7.21918 3.35354C8.22952 3 9.48633 3 11.9999 3C14.5135 3 15.7703 3 16.7807 3.35354C18.5903 3.98676 20.0131 5.40959 20.6464 7.21924C20.9999 8.22958 20.9999 9.48639 20.9999 12C20.9999 14.5136 20.9999 15.7704 20.6464 16.7808C20.0131 18.5904 18.5903 20.0132 16.7807 20.6465C15.7703 21 14.5135 21 11.9999 21C9.48633 21 8.22952 21 7.21918 20.6465C5.40953 20.0132 3.9867 18.5904 3.35348 16.7808C2.99994 15.7704 2.99994 14.5136 2.99994 12ZM15.7774 11.4398C15.8952 12.2344 15.7595 13.0458 15.3895 13.7588C15.0196 14.4718 14.4343 15.0499 13.7168 15.4111C12.9993 15.7722 12.1862 15.8979 11.3932 15.7703C10.6002 15.6427 9.86762 15.2683 9.29965 14.7003C8.73168 14.1323 8.35726 13.3997 8.22966 12.6067C8.10205 11.8137 8.22775 11.0006 8.58887 10.2831C8.94999 9.56564 9.52816 8.98031 10.2411 8.61036C10.9541 8.24042 11.7655 8.1047 12.56 8.22253C13.3705 8.3427 14.1208 8.72036 14.7002 9.29971C15.2795 9.87907 15.6572 10.6294 15.7774 11.4398Z"
								stroke="#545454"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M17 17V13.5C17 12.1193 15.8807 11 14.5 11C13.1193 11 12 12.1193 12 13.5M12 13.5V17M12 13.5V10.5M8 10.5V17M8 7V7.01M11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21Z"
								stroke="#545454"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M11 5.99991H13.6929C13.8829 5.99991 14.0565 5.89225 14.1409 5.72204L14.8191 4.35434C14.9221 4.14663 15.1533 4.03755 15.3761 4.10146C16.0315 4.2894 17.4069 4.74283 18.5042 5.49991C22.3682 8.39714 22.0078 14.8896 21.9786 16.2608C21.9768 16.3445 21.9554 16.427 21.9142 16.4999C19.9311 19.9999 16.491 19.9999 16.491 19.9999L15.3248 17.5737M13 5.99991H10.3119C10.1224 5.99991 9.94909 5.8927 9.86449 5.72306L9.18127 4.35311C9.07799 4.14602 8.84722 4.03743 8.62476 4.10121C7.96978 4.28899 6.59358 4.74248 5.49577 5.49991C1.6318 8.39714 1.99218 14.8896 2.0214 16.2608C2.02319 16.3445 2.04456 16.427 2.08583 16.4999C4.06894 19.9999 7.50897 19.9999 7.50897 19.9999L8.67893 17.5733M7.00128 16.9999C7.60094 17.2247 8.15567 17.4158 8.67893 17.5733M17.0038 16.9999C16.4036 17.2249 15.8485 17.4162 15.3248 17.5737M8.67893 17.5733C11.1232 18.3086 12.8808 18.3088 15.3248 17.5737M10.0021 11.9999C10.0021 12.5522 9.55422 12.9999 9.00179 12.9999C8.44937 12.9999 8.00154 12.5522 8.00154 11.9999C8.00154 11.4476 8.44937 10.9999 9.00179 10.9999C9.55422 10.9999 10.0021 11.4476 10.0021 11.9999ZM16.0036 11.9999C16.0036 12.5522 15.5558 12.9999 15.0033 12.9999C14.4509 12.9999 14.0031 12.5522 14.0031 11.9999C14.0031 11.4476 14.4509 10.9999 15.0033 10.9999C15.5558 10.9999 16.0036 11.4476 16.0036 11.9999Z"
								stroke="#545454"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;