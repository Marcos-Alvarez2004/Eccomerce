// PACKAGES
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// UTILS
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoute.js";

// DOTENV
dotenv.config();

// PUERTO
const port = process.env.PORT || 5000;

// DATABASE
connectDB();

// VARIABLES
const app = express();

// APP USE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// RUTAS
app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

// SERVER EN WEB
app.listen(port, () => {
  console.log(`Server ${port}`);
});
