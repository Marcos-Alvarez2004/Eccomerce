// REACT
import React from "react";
// REACT-REDUX
import { useSelector } from "react-redux";
// FavoriteSlice
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
// PRODUCT
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="ml-40">
      <h1 className="text-lg font-bold ml-12 mt-12">FAVORITE PRODUCTS</h1>

      <div className="flex flex-wrap">
        {favorites.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
