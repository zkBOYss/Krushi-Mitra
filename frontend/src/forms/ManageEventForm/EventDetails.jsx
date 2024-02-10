import { FormProvider, useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import addEvent from "../../assets/add_task.svg"

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
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl font-bold font-grotesk text-lightgreen max-sm:text-xl">
						Add an Event
					</h1>
					<p className="font-poppins text-lg max-sm:text-base">List impactful events for rural communities. Join us in making a difference! Seamless registration, mobile notifications.</p>
					{/* Seprator */}
					<div className="h-px my-1 bg-black w-full">
					</div>
				</div>
				<div className="p-4 border rounded-lg font-grotesk flex max-sm:flex-col justify-between items-center">
					<div>
						<img src={addEvent} alt="add event illustration" className="pointer-events-none" width={500} height={500} />
					</div>
					<div className="w-1/2 max-sm:w-full p-4 border rounded-md flex gap-2 flex-col items-start">
						<div>
							<h1 className="text-xl font-bold font-grotesk text-lightyellow max-sm:text-lg">
								Event Description
							</h1>
							<p className="font-poppins text-base max-sm:text-sm ">Provide a brief overview of the event, including its purpose, activities, and how it will benefit rural communities. Be concise yet informative.</p>
							{/* Seprator */}
							<div className="h-px my-1 bg-black w-full">
							</div>
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
							<div className="flex gap-4 max-sm:flex-col">
								<label className="text-gray-700 text-md font-bold flex-1">
									Select Time
									<input
										type="time"
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
								<label className=" text-md font-bold">
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
										className="bg-white p-1 focus:outline:none border rounded-md "
										wrapperClassName="datePicker"
									/>
								</label>
							</div>
							{/* Images logic */}
							<label className="text-gray-700 text-md font-bold ">
								<div>
									<h2 className="text-2xl max-sm:text-lg font-bold mb-3">
										Upload Image for the event
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
						</div>
						<span className="flex mx-auto">
							<button
								type="submit"
								className="text-lg bg-lightgreen py-1 px-6 text-black font-semibold font-grotesk
								rounded-lg  hover:bg-lightyellow  hover:text-white transition-all"
							>
								Add Event
							</button>
						</span>
					</div>
				</div>
			</form>
		</FormProvider>
	);
};

export default EventDetails;
