export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type CreateTodoBody = {
  title: string;
  completed?: boolean;
};

export type UpdateTodoInput = {
  title?: string;
  completed?: boolean;
};
