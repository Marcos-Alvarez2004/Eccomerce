// REACT
import React from "react";
// REACT-ROUTER-DOM
import { Link, useParams } from "react-router-dom";
// ProductApiSlice
import { useGetProductsQuery } from "../redux/api/productApiSlice";
// LOADER
import Loader from "../components/Loader";
// HEADER
import Header from "../components/Header";
// MESSAGE
import Message from "../components/Message";
// PRODUCT
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-80 mt-40 text-5xl">Special Products</h1>
            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-72 mt-40"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-8">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
