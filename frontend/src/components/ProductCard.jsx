/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProductCard = ({ data }) => {
  if (!data || !data.imageUrl || data.imageUrl.length === 0) {
    return (
      <div className="w-full h-[300px]">
        <span className=" w-full h-full object-cover object-center">
          wait for the data
        </span>
      </div>
    ); // or a placeholder image or loading state
  }

  return (
    <div className="grid grid-cols-2 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
      <div className="w-full h-[300px]">
        <img
          src={data.imageUrl[0]}
          className="rounded-md w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr] gap-2">
        <div>
          <div className="flex items-center">
            {/* <span className="ml-1 text-sm border p-2">sold status {data.isSold}</span> */}
          </div>
          <h1 className="font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-lightgreen via-lightyellow to-lightred  font-bold text-2xl">Product Information</h1>
          {/* Seprator */}
          <div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>
          <Link
            to={`/marketplace/details/${data._id}`}
            className=" flex gap-1 font-grotesk text-xl  cursor-pointer"
          ><h2 className="text-lightred font-semibold">Product Name: </h2>
            {data.name}
          </Link>
        </div>
        <div className="border border-lightgray rounded-lg h-full p-4">
          <h1 className="font-grotesk d text-lg">Product Description</h1>
          {/* Seprator */}
          <div className="h-px my-1 bg-black bg-opacity-50 border-0 w-full"></div>
          <div className="line-clamp-4 ">{data.description}</div>
        </div>
        <div className="flex flex-col items-end font-grotesk gap-2">
          <div className="flex w-full justify-between p-2">
            <div className="flex gap-1 items-center">
              Quantity : {data.quantity}
            </div>
            <span className="font-semibold">Price: {data.price}₹</span>
          </div>
          <div className="flex flex-col items-end ">
            <Link
              to={`/marketplace/details/${data._id}`}
              className="flex gap-1 items-center text-lg bg-lightgreen py-1 px-6 text-black font-semibold font-grotesk
              rounded-lg  hover:bg-lightred  hover:text-white transition-all"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
