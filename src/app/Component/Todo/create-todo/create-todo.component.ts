import { Component, OnInit } from '@angular/core';
import { ICreateTodo } from '../../../Models/Todo/icreate-todo';
import { TodoService } from '../../../Service/todo.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent  {
  title: string = '';
  completed: boolean = false;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  onSubmit() {
    const newTodo: ICreateTodo = {
      title: this.title,
      completed: this.completed
    };

    this.todoService.createTodo(newTodo).subscribe(
      response => {
        console.log('Todo created successfully', response);
        this.router.navigateByUrl('/app-get-todo-live'); // Navigate to the list or relevant page
      },
      error => {
        console.error('Error creating todo', error);
      }
    );
  }
  goToGetTodo() {
    this.router.navigateByUrl('/get-todo');
  }
}