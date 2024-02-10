/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProductCard = ({ data }) => {
  if (!data || !data.imageUrl || data.imageUrl.length === 0) {
    return (
      <div className="w-full h-[300px]">
        <span className="w-full h-full object-cover object-center">
          wait for the data
        </span>
      </div>
    ); // or a placeholder image or loading state
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
      <div className="w-full h-[300px]">
        <img
          src={data.imageUrl[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="ml-1 text-sm">sold status {data.isSold}</span>
          </div>
          <Link
            to={`/marketplace/details/${data._id}`}
            className="text-2xl font-bold cursor-pointer"
          >
            {data.name}
          </Link>
        </div>

        <div>
          <div className="line-clamp-4">{data.description}</div>
        </div>

        <div className="grid grid-cols-2 items-end whitespace-nowrap">
          <div className="flex gap-1 items-center">
            Quantity : {data.quantity}
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="font-bold">₹{data.price}</span>
            <Link
              to={`/marketplace/details/${data._id}`}
              className="bg-green-600 text-white h-full p-2 font-bold text-xl max-w-fit hover:bg-green-500"
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
