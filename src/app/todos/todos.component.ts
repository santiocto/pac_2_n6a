import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  buscar: string = "";

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data;
      this.filteredTodos = data; 
    });
  }

  searchTodos(): void {
    if (this.buscar.trim() !== "") {
      this.filteredTodos = this.todos.filter(todo => 
        todo.title.toLowerCase().includes(this.buscar.toLowerCase())
      );
    } else {
      this.filteredTodos = this.todos
    }
  }
}