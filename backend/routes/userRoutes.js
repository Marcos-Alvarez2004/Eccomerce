// GENERAL
import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserByID,
  updateUserById,
} from "../controllers/userController.js";

// AUTHMIDDLEWARE
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// USER
router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);

//  INICIO Y CIERRE
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

// PERFIL DEL USUARIO
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

// DELETE
router
  .route("/:id")
  .delete(authenticate, authorizeAdmin, deleteUserById)
  .get(authenticate, authorizeAdmin, getUserByID)
  .put(authenticate, authorizeAdmin, updateUserById);
export default router;
