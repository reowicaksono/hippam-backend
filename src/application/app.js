import express from "express";
import publicRouter from "../routes/public_routes.js";
import userRouter from "../routes/user_route.js";

const app = express()

// // app.use(express.json)
app.use(publicRouter)
app.use(userRouter)

export default app;