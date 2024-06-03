import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../../todos.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.todosService.getTodoById(id).subscribe((todo) => {
      this.todo = todo;
    });
  }

  goBack(): void {
    this.router.navigate(['/todos']);
  }
}
