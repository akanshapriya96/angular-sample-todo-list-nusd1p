import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo';

@Injectable()
export class TodoService {
  todoList: Todo[] = [
    {
      id: 1,
      title: 'grocery',
      isFavorite: true,
      date: new Date('23/12/2023'),
      isDeleted: false,
      isCompleted: true,
    },
    {
      id: 2,
      title: 'work',
      isFavorite: true,
      date: new Date('23/12/2023'),
      isDeleted: false,
      isCompleted: true,
    },
    {
      id: 3,
      title: 'travel',
      isFavorite: true,
      date: new Date('23/12/2023'),
      isDeleted: false,
      isCompleted: true,
    },
  ];
  favoriteList: Todo[] = [];
  constructor() {}

  addList(title) {
    const id = this.todoList.length + 2;
    const newItem: Todo = {
      id: id,
      title: title,
      isFavorite: true,
      date: new Date(),
      isDeleted: false,
      isCompleted: true,
    };
    this.todoList.unshift(newItem);
  }

  deleteList(idex: number) {}

  updateList() {}
}
