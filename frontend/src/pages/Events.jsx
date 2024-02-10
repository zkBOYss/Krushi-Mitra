import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const Events = () => {
	const [events, setEvents] = useState([]);
	const getEvents = async () => {
		try {
			// neurelo endpoint to fetch all products
			const headers = new Headers();
			headers.append("Content-Type", "application/json");
			headers.append("X-API-KEY", import.meta.env.VITE_NEURELO_KEY);
			const response = await fetch(
				"https://us-east-2.aws.neurelo.com/rest/events",
				{
					method: "GET",
					headers: headers,
				}
			);

			if (!response.ok) {
				throw new Error("Error fetching events");
			}
			return response.json();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const fetchEvents = async () => {
			const eventData = await getEvents();
			console.log("eventData: ", eventData);
			const mappedData = eventData.data.map((item) => ({
				date: item.date,
				description: item.description,
				_id: item.id,
				imageUrl: item.imageUrl,
				name: item.name,
				organizer: item.organizer,
				time: item.time,
				venue: item.venue,
			}));
			setEvents(mappedData);
		};

		fetchEvents();
	}, []);

	if (!events) {
		return <span>Loading...</span>;
	}
	return (
		<div className="flex flex-col gap-5">
			<div className="gap-2 flex flex-col">
				<h2 className="text-3xl font-bold font-grotesk text-lightgreen">
					Events{" "}
				</h2>
				<p className="font-poppins text-lg max-sm:text-base">
					List impactful events for rural communities. Seamless
					registration, mobile notifications. Join us in making a
					difference!
				</p>
				{/* Seprator */}
				<div className="h-px my-1 bg-black w-full"></div>
			</div>
			<div className="gap-2 flex flex-col">
				<div className="flex justify-between items-center">
					<span className="text-xl max-sm:text-base font-bold font-grotesk">
						{events.length} events found
					</span>
					<select
						// value={sortOption}
						className="p-2 max-sm:p-1 font-poppins border rounded-md"
					>
						<option value="">Sort By</option>
						<option value="priceAsc">Price (low to high)</option>
						<option value="priceDesc">Price (high to low)</option>
					</select>
				</div>
				<div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 md:grid-cols-2">
					{events.map((item) => (
						<EventCard data={item} key={item._id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Events;
