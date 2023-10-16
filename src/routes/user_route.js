import express from "express";
import userController from "../controller/user_controller.js";

const userRouter = new express.Router();

userRouter.get("/user",userController.getUser);

userRouter.post("/user", userController.postUser);
userRouter.put("/user/:id", userController.putUser);

export default userRouter;