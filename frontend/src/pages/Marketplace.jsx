import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Marketplace = () => {
  const [products, setProducts] = useState([{}]);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Error fetching products!");
      }
      return response.json();
    } catch (err) {
      console.log(err);
    }
  };

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
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div className="rounded:lg border border-slate-300 p-5 h-fit xl:sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
          {/* TODO 
					Filter Logic (filter by vegetable, crop, etc) */}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {products.length} products found
          </span>
          <select
            // value={sortOption}
            className="p-2 border rounded-md"
          >
            <option value="">Sort By</option>
            <option value="priceAsc">Price (low to high)</option>
            <option value="priceDesc">Price (high to low)</option>
          </select>
        </div>
        {products.map((item) => (
          <ProductCard data={item} key={item._id} />
        ))}
        product Data
        <div>
          {/* todo  */}
          <span>1/10</span>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
