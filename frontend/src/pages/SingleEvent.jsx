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
		<div className="space-y-6">
			<div>
				<span className="flex">Organizers: {event.organizer}</span>
				<h1 className="text-3xl font-bold">{event.name}</h1>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{/* TODO : multiple images logic */}
				<img
					src={event.imageUrl}
					alt={event.name}
					className="rounded-md w-full h-full object-cover object-center"
				/>
				<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
					<div className="whitespace-pre-line">
						{event.description}
					</div>
				</div>
			</div>

			<div className="flex items-center justify-around">
				<span>Venue : {event.venue}</span>
				<span>Date : {formattedDate}</span>
				<span>Time: {event.time}</span>
				<button className="bg-green-500 px-6 py-2 rounded-sm text-white font-semibol">
					Attend
				</button>
			</div>
		</div>
	);
};

export default SingleEvent;
