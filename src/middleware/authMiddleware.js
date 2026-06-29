import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

const authenticate = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }
    else if (req.cookies?.accessToken) {
        token = req.cookies.accessToken;
    }

    if (!token) {
        return res.status(401).json({
            error: "Unauthorized."
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: { id: decoded.id }
        });

        if (!user) {
            return res.status(401).json({ error: "User doesn't exist." });
        }

        req.user = user;

        next();
    }
    catch (err) {
        return res.status(401).json({ error: err });
    }
};

export { authenticate };