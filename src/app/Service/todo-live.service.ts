import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetTodoLive } from '../Models/TodoLive/iget-todo-live';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoLiveService {

  private apiUrl = 'http://localhost:5030/api/LiveTodo/Read'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getTodos(pageNumber: number, pageSize: number): Observable<IGetTodoLive> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<IGetTodoLive>(this.apiUrl, { params });
  }
}