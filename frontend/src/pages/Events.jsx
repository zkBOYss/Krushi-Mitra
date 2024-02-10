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
		<div className="flex flex-col gap-5">
			<div className="gap-2 flex flex-col">
				<h2 className="text-3xl font-bold font-grotesk text-lightgreen">Events	</h2>
				<p className="font-poppins text-lg max-sm:text-base">List impactful events for rural communities. Seamless registration, mobile notifications. Join us in making a difference!</p>
				{/* Seprator */}
				<div className="h-px my-1 bg-black w-full">
				</div>
			</div>
			<div className="flex flex-col gap-5 ">
				<div className="flex justify-between items-center">
					<span className="text-xl font-bold font-grotesk">
						{events.length} events found
					</span>

					<select
						// value={sortOption}
						className="p-2 font-poppins border rounded-md"
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
