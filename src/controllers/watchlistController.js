import { prisma } from "../config/db.js";

const addToWatchlist = async (req, res) => {
    const { movieId, status, rating, notes } = req.body;

    const movie = await prisma.movie.findUnique({
        where: { id: movieId },
    });

    if (!movie) {
        return res.status(404).json({ error: "Movie not found." });
    }

    const inWatchlist = await prisma.watchlistItem.findUnique({
        where: {
            userId_movieId: {
                userId: req.user.id,
                movieId: movieId
            }
        }
    });

    if (inWatchlist) {
        return res.status(400).json({ error: "Movie is already in watchlist." });
    }

    const watchlistItem = await prisma.watchlistItem.create({
        data: {
            userId: req.user.id,
            movieId: movieId,
            status: status || "PLANNED",
            rating: rating,
            notes: notes
        }
    });

    res.status(201).json(watchlistItem);
};

export { addToWatchlist };