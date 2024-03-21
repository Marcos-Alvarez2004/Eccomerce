import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// REACT-ROUTER
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
// REACT-ROUTER-DOM
import { createBrowserRouter } from "react-router-dom";
// PROVIDER
import { Provider } from "react-redux";
// STORE
import store from "./redux/store.js";
// PRIVATE ROUTE
import PrivateRoute from "./components/PrivateRoute.jsx";
// LOGIN
import Login from "./pages/Auth/Login.jsx";
// REGISTER
import Register from "./pages/Auth/Register.jsx";
// PROFILE
import Profile from "./pages/User/Profile.jsx";
// ADMIN ROUTE
import AdminRoute from "./pages/Admin/AdminRoute.jsx";
// USER LIST
import UserList from "./pages/Admin/UserList.jsx";
// CATEGORY LIST
import CategoryList from "./pages/Admin/CategoryList.jsx";
// PRODUCT LIST
import ProductList from "./pages/Admin/ProductList.jsx";
// PRODUCT LIST
import ProductUpdate from "./pages/Admin/ProductUpdate.jsx";
// ALL PRODUCT
import AllProducts from "./pages/Admin/AllProducts.jsx";
// HOME
import Home from "./pages/Home.jsx";
// FAVORITES
import Favorites from "./pages/Products/Favorites.jsx";
// PRODUCTDETAILS
import ProductDetails from "./pages/Products/ProductDetails.jsx";
// CART
import Cart from "./pages/Cart.jsx";
// SHOP
import Shop from "./pages/Shop.jsx";
// SHIPPING
import Shipping from "./pages/Orders/Shipping.jsx";
// PLACEORDER
import PlaceOrder from "./pages/Orders/PlaceOrder.jsx";
// PayPalScriptProvider
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// ORDER
import Order from "./pages/Orders/Order.jsx";
// USERORDER
import UserOrder from "./pages/User/UserOrder.jsx";
// ORDERLIST
import OrderList from "./pages/Admin/OrderList.jsx";
// ADMIN DASHBOARD
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* USER ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/user-orders" element={<UserOrder />} />
      {/* PRIVATE ROUTES */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
      </Route>
      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userList" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="allproductslist" element={<AllProducts />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="product/update/:_id" element={<ProductUpdate />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);
