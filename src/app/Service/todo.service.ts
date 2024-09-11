import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetTodo, IGetTodosResponse } from '../Models/Todo/iget-todo';
import { Observable } from 'rxjs';
import { IUpdateTodo } from '../Models/Todo/iupdate-todo';
import { ICreateTodo } from '../Models/Todo/icreate-todo';
import { AuthGuard } from '../auth-user.guard';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5030/api/Todo'; 

  constructor(private http: HttpClient, private authservice :AuthGuard) { }

  getTodos(pageNumber: number, pageSize: number): Observable<IGetTodo[]> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<IGetTodo[]>(this.apiUrl, { params });
  }


 
    private apiUrlUpdate = 'http://localhost:5030/api/Todo/';
    getTodo(id: number): Observable<IUpdateTodo> {
      return this.http.get<IUpdateTodo>(`${this.apiUrlUpdate}${id}`);
  }
  

  private readonly apiUrlCreate = 'http://localhost:5030/api/Todo';

  createTodo(todo: ICreateTodo): Observable<ICreateTodo> {
    return this.http.post<ICreateTodo>(this.apiUrlCreate, todo);
  }




  private getHeaders(): HttpHeaders {
    const token = this.authservice.getToken(); 
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  private apiUrlDelete = 'http://localhost:5030/api/Todo';

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlDelete}/${id}`, { headers: this.getHeaders() });
  }

}