import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Marketplace = () => {
	const [products, setProducts] = useState([{}]);
	const getProducts = async () => {
		try {
			// neurelo endpoint to fetch all products
			const headers = new Headers();
			headers.append("Content-Type", "application/json");
			headers.append("X-API-KEY", import.meta.env.VITE_NEURELO_KEY);
			const response = await fetch(
				"https://us-east-2.aws.neurelo.com/rest/products",
				{
					method: "GET",
					headers: headers,
				}
			);

			if (!response.ok) {
				throw new Error("Error fetching products!");
			}
			return response.json();
		} catch (err) {
			console.log(err);
		}
	};

<<<<<<< HEAD
	useEffect(() => {
		const fetchProducts = async () => {
			const productData = await getProducts();
			const mappedData = productData.data.map((item) => ({
				description: item.description,
				imageUrl: item.imageUrl,
				isSold: item.isSold,
				name: item.name,
				price: item.price,
				quantity: item.quantity,
				sellerId: item.sellerId,
				_id: item._id,
			}));

			console.log("Mapped: ", mappedData);
			setProducts(mappedData);
		};
		fetchProducts();
	}, []);
	if (!products) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="flex flex-col gap-5">
			<div className="gap-2 flex flex-col">
				<h2 className="text-3xl font-bold font-grotesk text-lightgreen">
					Marketplace
				</h2>
				<p className="font-poppins text-lg max-sm:text-base">
					Platform for buying, selling, or exchanging goods, services,
					or handicrafts ...
				</p>
				{/* Seprator */}
				<div className="h-px my-1 bg-black w-full"></div>
			</div>
			<div className="flex w-full items-center justify-between">
				<span className="text-xl font-semibold font-grotesk">
					{products.length} products found
				</span>
=======
  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await getProducts();
      console.log(productData);
      setProducts(productData);
    };
    fetchProducts();
  }, []);
  if (!products) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="gap-2 flex flex-col">
        <h2 className="text-3xl font-bold font-grotesk text-lightgreen">Marketplace</h2>
        <p className="font-poppins text-lg max-sm:text-base">Platform for buying, selling, or exchanging goods, services, or handicrafts ...</p>
        {/* Seprator */}
        <div className="h-px my-1 bg-black w-full">
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <span className="text-xl max-sm:text-base font-semibold font-grotesk">
          {products.length} products found
        </span>

        <select
          // value={sortOption}
          className="p-2 max-sm:p-1 max-sm:rounded-sm  font-poppins border rounded-md"
        >
          <option value="">Sort By</option>
          <option value="priceAsc">Price (low to high)</option>
          <option value="priceDesc">Price (high to low)</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
>>>>>>> ec82077571395a1b02eb98fcfb5f05e371413872

				<select
					// value={sortOption}
					className="p-2 font-poppins border rounded-md"
				>
					<option value="">Sort By</option>
					<option value="priceAsc">Price (low to high)</option>
					<option value="priceDesc">Price (high to low)</option>
				</select>
			</div>
			<div className="grid grid-cols-3 gap-5">
				{products.map((item) => (
					<ProductCard data={item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default Marketplace;
