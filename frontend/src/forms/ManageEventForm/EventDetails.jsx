import { FormProvider, useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const EventDetails = () => {
	const user = useAuthContext();

	console.log("User : ", user);
	const {
		register,
		watch,
		handleSubmit,
		setValue,
		formState: { errors },
		formMethods,
	} = useForm();

	const eventDate = watch("eventDate");
	const minDate = new Date();
	const maxDate = new Date();
	maxDate.setFullYear(maxDate.getFullYear() + 1);

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
		const dateStr = data.eventDate.toISOString();
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("description", data.description);
		formData.append("organizer", data.organizer);
		formData.append("date", dateStr);
		formData.append("time", data.time);
		formData.append("venue", data.venue);
		formData.append("imageFile", data.imageFile[0]);
		for (var pair of formData.entries()) {
			console.log("form Data ", pair[0] + ", " + pair[1]);
		}

		// todo : add image to formData.

		// todo : Fetch req to backend to add event
		try {
			const response = await fetch("http://localhost:5000/api/events/", {
				method: "POST",
				credentials: "include",
				body: formData,
			});

			const responseBody = await response.json();

			if (!response.ok) {
				alert("Failed to add event!");
				throw new Error(responseBody.message);
			} else {
				alert("Event added successfully!");
			}
		} catch (err) {
			console.error(err);
		}
		// onSave(formData);
	});

	return (
		<FormProvider {...formMethods}>
			<form
				className="flex flex-col gap-4"
				onSubmit={onSubmit}
				encType="multipart/form-data"
			>
				<h1 className="text-3xl font-bold mb-3">Add Event</h1>
				<label className="text-gray-700 text-md font-bold flex-1">
					Name
					<input
						type="text"
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("name", {
							required: "Field is required",
						})}
					/>
					{errors.name && (
						<span className="text-red-500 text-sm">
							{errors.name.message}
						</span>
					)}
				</label>

				<div className="flex gap-4">
					<label className="text-gray-700 text-md font-bold flex-1">
						Organizer Name
						<input
							type="text"
							className="border rounded w-full py-1 px-2 font-normal"
							{...register("organizer", {
								required: "Field is required",
							})}
						/>
						{errors.organizer && (
							<span className="text-red-500 text-sm">
								{errors.organizer.message}
							</span>
						)}
					</label>
					<label className="text-gray-700 text-md font-bold flex-1">
						Venue
						<input
							type="text"
							className="border rounded w-full py-1 px-2 font-normal"
							{...register("venue", {
								required: "Field is required",
							})}
						/>
						{errors.venue && (
							<span className="text-red-500 text-sm">
								{errors.venue.message}
							</span>
						)}
					</label>
				</div>

				<label className="text-gray-700 text-md font-bold flex-1">
					Description
					<textarea
						rows={10}
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("description", {
							required: "Field is required",
						})}
					/>
					{errors.description && (
						<span className="text-red-500 text-sm">
							{errors.description.message}
						</span>
					)}
				</label>
				<div className="flex gap-4">
					<label className="text-gray-700 text-md font-bold flex-1">
						Select Time
						<input
							type="text"
							className="border rounded w-full py-1 px-2 font-normal"
							{...register("time", {
								required: "Field is required",
							})}
						/>
						{errors.time && (
							<span className="text-red-500 text-sm">
								{errors.time.message}
							</span>
						)}
					</label>
					<label className="text-gray-700 text-md font-bold flex-1">
						Event Date
						<DatePicker
							required
							selected={eventDate}
							onChange={(date) => setValue("eventDate", date)}
							selectsStart
							startDate={eventDate}
							minDate={minDate}
							maxDate={maxDate}
							placeholderText="Enter Date"
							className="bg-white p-2 focus:outline:none border rounded-md border-gray-700"
							wrapperClassName="datePicker"
						/>
					</label>
				</div>
				{/* Images logic */}
				<label className="text-gray-700 text-md font-bold ">
					<div>
						<h2 className="text-2xl font-bold mb-3">
							Upload Image for reference
						</h2>
						<div className="border rounded p-4 flex flex-col gap-4">
							<input
								type="file"
								multiple
								accept="image/*"
								className="w-full text-gray-700 font-normal"
								{...register("imageFile", {
									validate: (imageFile) => {
										const totalLength = imageFile.length;

										if (totalLength === 0) {
											return "At least one image should be added";
										}
										if (totalLength > 1) {
											return "Select only one image!";
										}

										return true;
									},
								})}
							/>
						</div>
						{errors.imageFile && (
							<span className="text-red-500 text-sm font-bold">
								{errors.imageFile.message}
							</span>
						)}
					</div>
				</label>
				<span className="flex mx-auto">
					<button
						type="submit"
						className="bg-green-600 text-white py-2 font-bold hover:bg-green-500 text-xl px-6 border rounded-lg"
					>
						Add Event
					</button>
				</span>
			</form>
		</FormProvider>
	);
};

export default EventDetails;
