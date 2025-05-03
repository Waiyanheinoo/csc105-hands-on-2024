import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}

const updateTodoComplete = async (id: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            completed: true,
        }
    })
    return todo;
}

const updateTodoTitle = async (title: string, id: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            title: title,
        }
    })
    return todo;
}

const getAllTodos = async (userId: number) => {
    const todo = await db.todo.findMany({
        where: {
            userId: userId,
        }
    });
    return todo;
}

export { createTodo , getTodo, updateTodoComplete, updateTodoTitle, getAllTodos};