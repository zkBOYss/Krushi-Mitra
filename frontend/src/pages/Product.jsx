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
			<div className="w-full h-[300px]">
				<span className="w-full h-full object-cover object-center">
					wait for the data
				</span>
			</div>
		); // or a placeholder image or loading state
	}

	return (
		<div className="space-y-6 ">
			<div>
				<span className="flex">Quantity : {product.quantity}</span>
				<h1 className="text-3xl font-bold">{product.name}</h1>
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

			<div className="flex flex-col items-start">
				<span>Seller Id: {product.sellerId}</span>
				<span>Price/kg: {product.price}</span>
				<button
					className={
						product.isSold
							? "bg-red-500 px-6 py-2 rounded-sm text-white font-semibold"
							: "bg-green-500 px-6 py-2 rounded-sm text-white font-semibold"
					}
				>
					{product.isSold ? "Sold" : "Buy"}
				</button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
				<div className="whitespace-pre-line">{product.description}</div>
			</div>
		</div>
	);
};

export default Product;
