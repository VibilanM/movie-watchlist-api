import express from "express";
import { addToWatchlist } from "../controllers/watchlistController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticate, addToWatchlist);

export default router;