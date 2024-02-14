import { FormProvider, useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { useAppContext } from "../../context/AppContext";

const ProductDetails = ({ onSave }) => {
	const user = useAuthContext();
	const { showToast } = useAppContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
		formMethods,
	} = useForm();

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
		const formData = new FormData();
		formData.append("sellerId", user.userId);
		formData.append("name", data.name);
		formData.append("description", data.description);
		formData.append("price", data.price);
		formData.append("quantity", data.quantity);

		Array.from(data.imageFiles).forEach((imageFile) => {
			formData.append("imageFiles", imageFile);
		});

		for (var pair of formData.entries()) {
			console.log("data ", pair[0] + ", " + pair[1]);
		}
		try {
			const response = await fetch(`http://localhost:5000/products`, {
				method: "POST",
				credentials: "include",
				// body: JSON.stringify(data),
				body: formData,
			});

			const responseBody = await response.json();

			if (!response.ok) {
				showToast({ message: "Failed to add product!", type: "ERROR" });
				throw new Error(responseBody.message);
			} else {
				showToast({
					message: "Successfully added the product!",
					type: "SUCCESS",
				});
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
				<h1 className="text-3xl font-bold text-lightred font-grotesk">
					Add a Product
				</h1>
				<p className="font-poppins text-lg max-sm:text-base">
					Fill out all necessary details required for the product to
					be listed on marketplace{" "}
				</p>
				{/* Seprator */}
				<div className="h-px my-1 bg-black border-[1px] w-full"></div>
				{/* Add product Container */}
				<div className="flex max-sm:flex-col p-2 gap-2 max-sm:gap-4 max-sm:p-4 justify-between border border-lightgray rounded-md">
					{/* Image Upload Section */}
					<div className="flex flex-col w-1/2 max-sm:w-full p-4 border rounded-md border-gray-400">
						<h2 className="text-2xl max-sm:text-xl font-bold font-grotesk text-lightgreen mb-3">
							Choose Product Images to upload
						</h2>
						{/* Seprator */}
						<div className="h-px my-1 bg-black border-[1px] w-full mb-3"></div>
						<label className="text-gray-700 text-md font-bold ">
							{/* Images upload  */}
							<div className="border rounded p-4 flex flex-col gap-4">
								<input
									type="file"
									multiple
									accept="image/*"
									className="w-full text-gray-700  font-grotesk font-thin "
									{...register("imageFiles", {
										validate: (imageFiles) => {
											const totalLength =
												imageFiles.length;

											if (totalLength === 0) {
												return "At least one image should be added";
											}
											if (totalLength > 6) {
												return "Total Images cannot be more than 6";
											}

											return true;
										},
									})}
								/>
							</div>
							{errors.imageFiles && (
								<span className="text-red-500 text-sm font-bold font-grotesk">
									{errors.imageFiles.message}
								</span>
							)}
						</label>
					</div>
					<div className="font-grotesk p-4 border rounded-md border-gray-400">
						<h2 className="text-2xl max-sm:text-xl font-bold font-grotesk text-lightgreen mb-3">
							Product Details
						</h2>

						{/* Seprator */}
						<div className="h-px my-1 bg-black border-[1px] w-full mb-3"></div>
						<label className="text-black text-md font-bold font-grotesk flex-1">
							Name
							<input
								type="text"
								className="border border-gray-400 rounded w-full py-1 px-2 font-grotesk"
								{...register("name", {
									required: "Field is required",
								})}
							/>
							{errors.name && (
								<span className="text-red-500 text-sm font-grotesk">
									{errors.name.message}
								</span>
							)}
						</label>

						<div className="flex gap-4 max-sm:flex-col">
							<label className="text-black text-md font-bold flex-1">
								Price/Kg
								<input
									type="number"
									min={1}
									className="border border-gray-400 rounded w-full py-1 my-1 px-2"
									{...register("price", {
										required: "Field is required",
									})}
								/>
								{errors.price && (
									<span className="text-red-500 text-sm">
										{errors.price.message}
									</span>
								)}
							</label>
							<label className="text-black text-md font-bold flex-1">
								Quantity(in Kg)
								<input
									type="number"
									min={1}
									className="border border-gray-400 rounded w-full py-1 my-1 px-2"
									{...register("quantity", {
										required: "Field is required",
									})}
								/>
								{errors.quantity && (
									<span className="text-red-500 text-sm">
										{errors.quantity.message}
									</span>
								)}
							</label>
						</div>

						<label className="text-black text-md font-bold flex-1">
							Description
							<textarea
								rows={10}
								className="border border-gray-400 rounded w-full py-1 my-1 px-2"
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

						<span className="flex justify-end">
							<button
								type="submit"
								className="text-lg bg-lightgreen py-1 my-1 px-6 text-black font-semibold font-grotesk rounded-lg  hover:bg-lightyellow  hover:text-white transition-all"
							>
								Add Product
							</button>
						</span>
					</div>
				</div>
			</form>
		</FormProvider>
	);
};

export default ProductDetails;
