// EXPRESS
import express from "express";
// EXPRESS-FORMIDABLE
import formidable from "express-formidable";
// MIDDLEWARE
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
// CHEKID
import checkId from "../middlewares/checkId.js";
// CONTROLLER
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductsById,
  fetchAllProducts,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts,
  filterProducts,
} from "../controllers/productController.js";

const router = express.Router();
// PRODUCTS GET, POST
router
  .route("/")
  .get(fetchProducts)
  .post(authenticate, authorizeAdmin, formidable(), addProduct);

// ALL PRODUCTS
router.route("/allproducts").get(fetchAllProducts);
router.route("/:id/reviews").post(authenticate, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

// PRODUCTS GET BY ID, PUT, DELETE
router
  .route("/:id")
  .get(fetchProductsById)
  .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizeAdmin, removeProduct);

router.route("/filtered-products").post(filterProducts);
export default router;
