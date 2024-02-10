import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleEvent = () => {
	const { eventId } = useParams();
	const [event, setEvent] = useState([]);

	const fetchEventById = async () => {
		try {
			const response = await fetch(
				`http://localhost:5000/api/events/${eventId}`
			);

			if (!response.ok) {
				throw new Error("Error fetching event details");
			}

			return response.json();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const fetchEvent = async () => {
			const eventData = await fetchEventById(eventId);
			console.log("Event data: ", eventData);
			setEvent(eventData);
		};

		fetchEvent();
	}, [eventId]);

	const formatDate = (inputDate) => {
		const date = new Date(inputDate);
		const day = date.getDate().toString().padStart(2, "0");
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	};

	const formattedDate = formatDate(event.date);

	return (
		<div className="flex flex-col p-4 border rounded-lg border-lightgray">
			<div className="flex flex-col">
				<h1 className="text-2xl max-sm:text-lg gap-1 font-bold font-grotesk flex"><div className="text-lightred ">Event Name: </div>{event.name}</h1>
				{/* Seprator */}
				<div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>
			</div>

			<div className="flex max-sm:flex-col justify-between gap-10 p-4">
				{/* TODO : multiple images logic */}
				<img
					src={event.imageUrl}
					alt={event.name}
					className="rounded-md w-1/2 max-sm:w-full h-[300px] object-cover object-center"
				/>
				<div className="flex flex-col w-1/2 max-sm:w-full gap-4">
					<div className="flex w-full h-full flex-col p-4 border border-lightgray rounded-md ">
						<div className="flex flex-col">
							<h1 className="font-grotesk font-bold text-lg">Event Description</h1>
							{/* Seprator */}
							<div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>
						</div>
						<div className="">
							{event.description}
						</div>
					</div>
					<div className="flex justify-between max-sm:flex-col gap-2">
						<div className="flex flex-col gap-4">
							<div className="flex gap-10 max-sm:gap-2 max-sm:flex-col font-poppins font-light">
								<div className="flex gap-1 items-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
										<path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="green" strokeWidth="1" />
										<path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="green" strokeWidth="1" />
									</svg> {event.venue}
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
									</svg> {event.time}
								</div>

							</div>
							<span className="flex text-black font-grotesk gap-1 font-bold  text-sm "><span className=" text-lightred font-medium">*Organizers:</span> {event.organizer}</span>
						</div>
						<div className="flex flex-col">
							<button className="text-lg bg-lightgreen py-1 px-6 text-white font-semibold font-grotesk rounded-lg  hover:bg-lightyellow  hover:text-black transition-all">
								Attend
							</button>

						</div>
					</div>

				</div>

			</div>
		</div>
	);
};

export default SingleEvent;
