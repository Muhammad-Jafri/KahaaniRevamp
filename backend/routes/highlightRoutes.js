import { Router } from "express";
import multer from "multer";
import { converter } from "../controllers/highlightsController.js";

const router = Router()
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");
console.log("Generating highlights")
router.post("/upload", upload, converter);

export default router;