import { Routes } from '@angular/router';
import { LoginComponent } from './Component/Account/login/login.component';
import { RegisterationComponent } from './Component/Account/registeration/registeration.component';
import { GetTodoLiveComponent } from './Component/TodoLive/get-todo-live/get-todo-live.component';
import { UpdateTodoComponent } from './Component/Todo/update-todo/update-todo.component';
import { AuthGuard } from './auth-user.guard';
import { MainComponent } from './Component/main/main.component';
import { CreateTodoComponent } from './Component/Todo/create-todo/create-todo.component';
import { DeleteTodoComponent } from './Component/Todo/delete-todo/delete-todo.component';
import { GetTodoComponent } from './Component/Todo/get-todo/get-todo.component';

export const routes: Routes = [
  {
    path: 'app-get-todo-live',
    component: GetTodoLiveComponent
  },
  
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent
  },
  { path: 'register', component: RegisterationComponent },
 
  { path: 'update-todo/:id', component: UpdateTodoComponent },
  { path: 'create-todo', component: CreateTodoComponent },
  { path: 'delete-todo', component: DeleteTodoComponent },
  { path: 'delete-todo/:id', component: UpdateTodoComponent },
  { path: 'get-todo', component: GetTodoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

