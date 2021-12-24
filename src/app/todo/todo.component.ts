import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit , OnDestroy{
  today;
  todos;
  toDoSubscription : Subscription ;

  constructor(private toDoService:TodoService,
              private router: Router) {
   }

  ngOnInit(): void {
    this.today = this.toDoService.today ;
    //this.toDoService.todos
      //.then((dataRecup) => {this.todos = dataRecup})
      //.catch((error)=>{ console.log("Erreur :" , +error)});

    this.toDoSubscription = this.toDoService.toDoSubject.subscribe((value :any [])=> {
      this.todos = value ;
    },
    (error) => {
      console.log("Erreur :" +error);

    },
    () =>{
    console.log("completed subscription");

    }
    );

    this.toDoService.emitTodos();

  }
  onChangeIsModif(i:number) {
    this.toDoService.onChangeIsModif(i)
  }

  onChangeStatus(i:number) {
this.toDoService.onChangeStatus(i)  }

  onView (id : number) {
this.router.navigate (["single-todo",id]);
}

ngOnDestroy(): void {
    this.toDoSubscription.unsubscribe();
}

}
