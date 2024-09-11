import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IUpdateTodo } from '../../../Models/Todo/iupdate-todo';
import { TodoService } from '../../../Service/todo.service';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css',
})
export class UpdateTodoComponent implements OnInit {
  todoItem: IUpdateTodo = {} as IUpdateTodo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getTodo(+id).subscribe((todo) => {
        this.todoItem = todo;
      });
    }
  }

  onUpdateTodo(): void {
    console.log(this.todoItem);
  }
}
