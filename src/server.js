import express from "express";
import { config } from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB, disconnectDB } from "./config/db.js";

config();
connectDB();

const app = express();

app.use(express.json());

process.on("unhandledRejection", (err) => {
    console.error("Unhandled rejection: ", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

process.on("uncaughtException", async (err) => {
    console.error("Uncaught exception: ", err);
    await disconnectDB();
    process.exit(1);
});

process.on("SIGTERM", async () => {
    console.log("SIGTERM received. Shutting down gracefully.");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});

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