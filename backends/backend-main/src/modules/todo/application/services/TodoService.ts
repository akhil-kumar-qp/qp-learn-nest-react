import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos(): object {
    // Placeholder: return all todos
    return { message: 'Get all todos (from service)' };
  }

  getTodoById(tid: string): object {
    // Placeholder: return a todo by id
    return { message: `Get todo with id ${tid}` };
  }

  createTodo(): object {
    // Placeholder: create a new todo
    return { message: 'Create a new todo (from service)' };
  }
}
