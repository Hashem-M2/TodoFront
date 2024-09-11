import { Component, OnInit } from '@angular/core';
import { IGetTodo, IGetTodosResponse } from '../../../Models/Todo/iget-todo';
import { TodoService } from '../../../Service/todo.service';
import { CommonModule } from '@angular/common';
import { IUpdateTodo } from '../../../Models/Todo/iupdate-todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-todo.component.html',
  styleUrl: './get-todo.component.css'
})
export class GetTodoComponent implements OnInit {
  todoItems: IGetTodo[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private todoService: TodoService,private router :Router ) { }


  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos(this.currentPage, this.itemsPerPage).subscribe(
      (todos: IGetTodo[]) => {
        this.todoItems = todos;
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }
  toggleCompletion(item: IGetTodo): void {
    console.log(`Toggling completion for item ${item.id}`);
  }

  nextPage(): void {
    this.currentPage++;
    this.fetchTodos();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchTodos();
    }
  }

  trackById(index: number, item: IGetTodo): number {
    return item.id;
  }

  updateTodo(item : IUpdateTodo) {
    this.router.navigate(['/update-todo', item.id]);
  }



  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todoItems = this.todoItems.filter(todo => todo.id !== id);
    });
  }
}