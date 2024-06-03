import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<any>(this.apiUrl);
  }

  getTodoById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

}

