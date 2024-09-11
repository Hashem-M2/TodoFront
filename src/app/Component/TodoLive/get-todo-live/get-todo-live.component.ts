import { Component, OnInit } from '@angular/core';
import { IGetTodoLive, ITodoItem } from '../../../Models/TodoLive/iget-todo-live';
import { TodoLiveService } from '../../../Service/todo-live.service';
import { CommonModule } from '@angular/common';
import { IGetTodosResponse } from '../../../Models/Todo/iget-todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-todo-live',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-todo-live.component.html',
  styleUrls: ['./get-todo-live.component.css']
})
export class GetTodoLiveComponent implements OnInit {
  todoItems: ITodoItem[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalCount: number = 0;

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.itemsPerPage);
  }

  constructor(private todoService: TodoLiveService, private router : Router) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos(this.currentPage, this.itemsPerPage).subscribe({
      next: (response: IGetTodosResponse) => {
        this.todoItems = response.data;
        console.log('Total count:', response.totalCount);
        console.log('Current page:', response.pageNumber);
        console.log('Total pages:', Math.ceil(response.totalCount / this.itemsPerPage));
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
      },
      complete: () => {
        console.log('Fetch completed');
      }
    });
  }
  

  toggleCompletion(item: ITodoItem): void {
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

  trackById(index: number, item: ITodoItem): number {
    return item.id;
  }
  navigateToCreateTodo() {
    this.router.navigateByUrl('/create-todo'); 
  }

}
