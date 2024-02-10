/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const EventCard = ({ data }) => {
	const formatDate = (inputDate) => {
		const date = new Date(inputDate);
		const day = date.getDate().toString().padStart(2, "0");
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	};

	const formattedDate = formatDate(data.date);
	return (
		<div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
			<div className="w-full h-[300px] max-sm:h-fit">
				<img
					src={data.imageUrl}
					className="rounded-md w-full h-full object-cover object-center"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-lightgreen via-lightyellow to-lightred  font-bold text-2xl">Event Information</h1>
				{/* Seprator */}
				<div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>
				<div className="flex font-grotesk">
					<Link
						to={`/events/details/${data._id}`}
						className="flex gap-1 text-xl font-bold cursor-pointer"
					>
						<h1 className="text-lightred f">Organizer:</h1>
						{data.name}
					</Link>
				</div>
				<div className="border h-full p-4 border-lightgray rounded-lg">
					<h1 className="font-grotesk font-bold text-lg">Event Description</h1>
					{/* Seprator */}
					<div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>

					<div>
						<div className="line-clamp-4 font-thin">{data.description}</div>
					</div>
				</div>

				<div className="flex gap-10 max-sm:gap-2 max-sm:flex-col font-poppins font-light">
					<div className="flex gap-1 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
							<path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="green" strokeWidth="1" />
							<path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="green" strokeWidth="1" />
						</svg> {data.venue}
					</div>
					<div className="flex gap-1 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M18 2V4M6 2V4" stroke="green" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M3.5 8H20.5" stroke="green" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="green" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M3 8H21" stroke="green" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
						</svg> {formattedDate}
					</div>
					<div className="flex gap-1 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="green" strokeWidth="1" />
							<path d="M12 8V12L14 14" stroke="green" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
						</svg> {data.time}
					</div>
				</div>
				<div className="flex flex-col items-start justify-center gap-1">
					<Link
						to={`/events/details/${data._id}`}
						className="text-lg bg-lightgreen py-1 px-6 text-black font-semibold font-grotesk
						rounded-lg  hover:bg-lightyellow  hover:text-white transition-all"
					>
						View More
					</Link>

					<div className="flex items-center">
						<span className="ml-1 text-sm font-poppins">
							Organized By :{" "}
							<span className="text-lightred font-bold">{data.organizer}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
