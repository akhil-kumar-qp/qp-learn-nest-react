import { Controller, Get, Post, Param } from '@nestjs/common';
import { TodoService } from '../services/TodoService';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): object {
    return this.todoService.getTodos();
  }

  @Get(':tid')
  getTodoById(@Param('tid') tid: string): object {
    return this.todoService.getTodoById(tid);
  }

  @Post()
  createTodo(): object {
    return this.todoService.createTodo();
  }
}
