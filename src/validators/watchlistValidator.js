import { z } from "zod";

const addToWatchlistSchema = z.object({
    movieId: z.string().uuid(),
    status: z.enum(["PLANNED", "WATCHING", "WATCHED", "DROPPED"], {
        error: () => ({
            message: "Status must be one of the following: PLANNED, WATCHING, WATCHED, DROPPED"
        })
    }).optional(),
    rating: z.coerce().number().float("Rating must be a float.").min(0.0).max(5.0).optional(),
    notes: z.string().optional()
});

const updateWatchlistSchema = z.object({
    movieId: z.string({ required_error: "movieId is required." }).uuid(),
    status: z.enum(["PLANNED", "WATCHING", "WATCHED", "DROPPED"], {
        error: () => ({
            message: "Status must be one of the following: PLANNED, WATCHING, WATCHED, DROPPED"
        })
    }).optional(),
    rating: z.coerce().number().float("Rating must be a float.").min(0.0).max(5.0).optional(),
    notes: z.string().optional()
});

const removeFromWatchlistSchema = z.object({
    id: z.string({ required_error: "id is required." }).uuid("id must be a valid UUID.")
});

export { addToWatchlistSchema, updateWatchlistSchema, removeFromWatchlistSchema };