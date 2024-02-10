import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
				<h1 className="flex gap-1 font-grotesk text-2xl"><h1 className="text-lightred font-semibold">Product Name:</h1> {product.name}</h1>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

				{/* TODO : multiple images logic */}
				{product.imageUrl.map((image, index) => (
					<img
						src={image}
						key={index}
						alt={product.name}
						className="rounded-md w-full h-full object-cover object-center"
					/>
				))}
			</div>


			<div className="flex flex-col items-start font-grotesk">
				<div className="flex justify-between w-full">
					<span className="flex gap-1"><div className="font-medium text-lightgreen">Quantity :</div> {product.quantity}</span>
					<span className="flex gap-1"><div className="font-medium text-lightgreen">Price/kg:</div> {product.price}₹</span>
				</div>

			</div>

			<div className="flex flex-col">
				<div className="flex flex-col border p-4 rounded-lg border-lightgray">
					<h2 className="text-xl max-sm:text-xl font-bold font-grotesk text-black mb-3">Product Details</h2>
					{/* Seprator */}
					<div className="h-px my-1 bg-black border-[1px] border-lightgray w-full mb-3">
					</div>
					<div className="whitespace-pre-line">{product.description}</div>
				</div>

			</div>
			<button
				className={
					product.isSold
						? "text-lg bg-lightred py-1 px-6 text-bla</h2>ck font-semibold font-grotesk rounded-lg  hover:bg-lightgreen  hover:text-white transition-all"
						: "text-lg bg-lightgreen py-1 px-6 text-black font-semibold font-grotesk rounded-lg  hover:bg-lightyellow  hover:text-white transition-all"
				}
			>
				{product.isSold ? "Sold" : "Buy"}
			</button>
		</div>
	);
};

export default Product;
