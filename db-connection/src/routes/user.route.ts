
import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/all", userController.getAllUser);
userRouter.patch("/", userController.editUserName);

export { userRouter };
