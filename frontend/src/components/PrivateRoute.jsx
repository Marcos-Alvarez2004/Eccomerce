// REACT
import React from "react";
// REACT-ROUTER-DOM
import { Navigate, Outlet } from "react-router";
// REACT-REDUX
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
