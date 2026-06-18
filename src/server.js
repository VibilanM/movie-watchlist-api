import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Movie Watchlist API"
    });
});

app.use("/movies", movieRoutes);

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});