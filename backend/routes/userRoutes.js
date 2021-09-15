import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  gethUserProfile,
  updatehUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, gethUserProfile)
  .put(protect, updatehUserProfile);

export default router;
