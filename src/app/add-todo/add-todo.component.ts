import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo = new Todo();

  constructor(private todoService : TodoService,
              private routeur : Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.todoService.addTodo(this.todo);
    this.routeur.navigate(["todos"])

}
}
