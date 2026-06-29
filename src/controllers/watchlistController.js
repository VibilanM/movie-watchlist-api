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

const removeFromWatchlist = async (req, res) => {
    const { id } = req.params;

    const watchlistItem = await prisma.watchlistItem.findUnique({
        where: { id },
    });

    if (!watchlistItem) {
        return res.status(404).json({ error: "Watchlist item not found." });
    }

    if (watchlistItem.userId !== req.user.id) {
        return res.status(403).json({ error: "You can only remove items from your own watchlist." });
    }

    await prisma.watchlistItem.delete({
        where: { id },
    });

    res.status(200).json({ message: "Movie removed from watchlist." });
};

const updateWatchlistItem = async (req, res) => {
    const { movieId, status, rating, notes } = req.body;

    if (!movieId) {
        return res.status(400).json({ error: "movieId is required." });
    }

    const watchlistItem = await prisma.watchlistItem.findUnique({
        where: {
            userId_movieId: {
                userId: req.user.id,
                movieId: movieId
            }
        }
    });

    if (!watchlistItem) {
        return res.status(404).json({ error: "Watchlist item not found." });
    }

    const updatedItem = await prisma.watchlistItem.update({
        where: { id: watchlistItem.id },
        data: {
            ...(status !== undefined && { status }),
            ...(rating !== undefined && { rating }),
            ...(notes !== undefined && { notes }),
            updatedAt: new Date()
        }
    });

    res.status(200).json(updatedItem);
};

export { addToWatchlist, removeFromWatchlist, updateWatchlistItem };