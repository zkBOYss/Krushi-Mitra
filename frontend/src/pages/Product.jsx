import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Product = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const fetchProductById = async (productId) => {
		try {
			const response = await fetch(
				`http://localhost:5000/api/products/${productId}`
			);

			if (!response.ok) {
				throw new Error("Error fetching product details");
			}

			return response.json();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const fetchProduct = async () => {
			const productData = await fetchProductById(productId);
			console.log(productData);
			setProduct(productData);
		};
		fetchProduct();
	}, [productId]);

	if (!product || !product.imageUrl || product.imageUrl.length === 0) {
		return (
			<div className="w-full h-[300px] ">
				<span className="w-full h-full object-cover object-center">
					wait for the data
				</span>
			</div>
		); // or a placeholder image or loading state
	}

	return (
		<div className="space-y-6 border p-4 rounded-xl">
			<div>
				<h1 className="flex gap-1 font-grotesk text-3xl max-sm:text-xl"><h1 className="text-lightred font-semibold">Product Name:</h1> {product.name}</h1>
				{/* Seprator */}
				<div className="h-px my-1 bg-black w-full">
				</div>
			</div>
			<div className="flex max-sm:flex-col gap-4 max-sm:gap-4 w-full justify-between">
				<div className="w-1/2 flex gap-4">
					<Carousel useKeyboardArrows={true} >
						{/* TODO : multiple images logic */}
						{product.imageUrl.map((image, index) => (
							<img
								src={image}
								key={index}
								alt={product.name}
								className="rounded-md w-full h-full object-cover object-center"
							/>
						))}
					</Carousel>
				</div>
				<div className="w-1/2 flex flex-col max-sm:w-full gap-2">
					<div className="flex flex-col h-full border p-4 rounded-lg border-lightgray">
						<h2 className="text-xl max-sm:text-lg font-bold font-grotesk text-black mb-3">Product Details</h2>
						{/* Seprator */}
						<div className="h-px my-1 bg-black border-[1px] border-lightgray w-full mb-3">
						</div>
						<div className="whitespace-pre-line font-poppins">{product.description}</div>
					</div>
					<div className="flex flex-col items-end gap-4">
						<div className="flex flex-col items-end w-full justify-between font-grotesk">
							<div className="flex justify-between w-full">
								<span className="flex gap-1"><div className="font-medium text-lightgreen">Quantity :</div> {product.quantity}</span>
								<span className="flex gap-1"><div className="font-medium text-lightgreen">Price/kg:</div> {product.price}₹</span>
							</div>

						</div>
						<button
							className={
								product.isSold
									? "text-lg bg-lightred py-1 px-6 text-white font-semibold font-grotesk rounded-lg  hover:bg-lightgreen  hover:text-white transition-all"
									: "text-lg bg-lightgreen py-1 px-6 text-white font-semibold font-grotesk rounded-lg  hover:bg-lightyellow  hover:text-white transition-all"
							}
						>
							{product.isSold ? "Sold" : "Buy"}
						</button>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Product;
