import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const Events = () => {
	const [events, setEvents] = useState([]);
	const getEvents = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/events", {
				credentials: "include",
			});

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
			setEvents(eventData);
		};

		fetchEvents();
	}, []);

	if (!events) {
		return <span>Loading...</span>;
	}
	return (
		<div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
			<div className="rounded:lg border border-slate-300 p-5 h-fit xl:sticky top-10">
				<div className="space-y-5">
					<h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
						Filter by:
					</h3>
					{/* TODO 
            Filter Logic (filter by vegetable, crop, etc) */}
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<div className="flex justify-between items-center">
					<span className="text-xl font-bold">
						{events.length} events found
					</span>
					<Link
						to="/events/add-events"
						className="mt-2 bg-green-500 px-4 py-2 rounded-md text-white font-bold"
					>
						Add Event
					</Link>
					<select
						// value={sortOption}
						className="p-2 border rounded-md"
					>
						<option value="">Sort By</option>
						<option value="priceAsc">Price (low to high)</option>
						<option value="priceDesc">Price (high to low)</option>
					</select>
				</div>
				{events.map((item) => (
					<EventCard data={item} key={item._id} />
				))}
				<div>
					{/* todo  */}
					<span>1/10</span>
				</div>
			</div>
		</div>
	);
};

export default Events;
