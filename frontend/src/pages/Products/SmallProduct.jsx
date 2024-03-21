// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// HEARTHICON
import HearthIcon from "./HearthIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-80 ml-8 p-3">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-auto rounded"
        />
        <HearthIcon product={product} />
        <div className="p-54">
          <Link to={`/product/${product._id}`}>
            <h2 className="flex justify-between items-center">
              <div>{product.name}</div>
              <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                ${product.price}
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallProduct;
