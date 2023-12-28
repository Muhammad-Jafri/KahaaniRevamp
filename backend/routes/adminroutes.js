
import { Router } from "express";
import { createAdmin,loginAdmin } from "../controllers/adminController.js";

const router = Router()

// Make all the admin routes here
router.route("/create").post(createAdmin);
router.route("/login").post(loginAdmin);

export default router;