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
			<div className="w-full h-[300px]">
				<img
					src={data.imageUrl}
					className="w-full h-full object-cover object-center"
				/>
			</div>
			<div className="grid grid-rows-[1fr_2fr]">
				<div>
					<Link
						to={`/events/details/${data._id}`}
						className="text-2xl font-bold cursor-pointer"
					>
						{data.name}
					</Link>

					<div>
						<div className="line-clamp-4">{data.description}</div>
					</div>
				</div>

				<div className="grid grid-cols-3 items-end whitespace-nowrap">
					<div className="flex gap-1 items-center">
						Location: {data.venue}
					</div>
					<div className="flex gap-1 items-center">
						Date: {formattedDate}
					</div>
					<div className="flex gap-1 items-center">
						Time: {data.time}
					</div>
				</div>
				<div className="flex items-end justify-between gap-1">
					<Link
						to={`/events/details/${data._id}`}
						className="bg-green-600 text-white h-full p-2 font-bold text-xl max-w-fit hover:bg-green-500"
					>
						View More
					</Link>

					<div className="flex items-center">
						<span className="ml-1 text-sm">
							Organized By :{" "}
							<span className="font-bold">{data.organizer}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
