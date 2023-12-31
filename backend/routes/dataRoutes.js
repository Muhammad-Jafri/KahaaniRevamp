import { Router } from "express";
import multer from "multer";
import { uploadStory, getStories } from "../controllers/dataController.js";

const router = Router()
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).fields([
    { name: 'audio', maxCount: 1 },
    { name: 'image', maxCount: 1 },
]);


router.post("/postStory", upload, uploadStory);
router.get("/getStories", getStories)

export default router;
