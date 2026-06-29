import express from "express";
import { addToWatchlist, removeFromWatchlist, updateWatchlistItem } from "../controllers/watchlistController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticate, addToWatchlist);

router.delete("/:id", authenticate, removeFromWatchlist);

router.put("/", authenticate, updateWatchlistItem);

export default router;