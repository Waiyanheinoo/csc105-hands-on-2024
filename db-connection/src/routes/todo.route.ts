import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/", todoController.updateTodoComplete);
todoRouter.patch("/title", todoController.updateTodoTitle);
todoRouter.get("/userAllTodos", todoController.getAllTodos)

export { todoRouter };