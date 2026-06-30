import express from "express";
import { addToWatchlist, removeFromWatchlist, updateWatchlistItem } from "../controllers/watchlistController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { validateRequest, validateParams } from "../middleware/validateRequest.js";
import { addToWatchlistSchema, updateWatchlistSchema, removeFromWatchlistSchema } from "../validators/watchlistValidator.js";

const router = express.Router();

router.post("/", authenticate, validateRequest(addToWatchlistSchema), addToWatchlist);

router.delete("/:id", authenticate, validateParams(removeFromWatchlistSchema), removeFromWatchlist);

router.put("/", authenticate, validateRequest(updateWatchlistSchema), updateWatchlistItem);

export default router;