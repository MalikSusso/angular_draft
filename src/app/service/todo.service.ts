import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  today:Date = new Date ;
  todos : Todo[] ;
  toDoSlice ;
  toDoSubject = new Subject < any[] >() ;


 /*
  onChangeIsModif(i:number) {
    this.toDoSlice[i].isModif = !this.toDoSlice[i].isModif;
  }

  onChangeStatus(i:number) {
    this.toDoSlice[i].status = !this.toDoSlice[i].status ;
  }

  getTodo(index:number) {
    if (this.toDoSlice[index]) {
      return this.toDoSlice[index] ;
    }
    else return false ;
  }
  */

  onChangeIsModif(i:number) {
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
  }

  onChangeStatus(i:number) {
    this.todos[i].status = !this.todos[i].status ;
    this.emitTodos();
  }

  getTodo(index:number) {
    if (this.todos[index]) {
      return this.todos[index] ;
    }
    else return false ;
  }

constructor() {

  //Promise pour récuperer les données

  /*
  this.todos = new Promise((resolve , reject) => {
    const data = [
      {
        toDoName : "Project one",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "
      },
      {
        toDoName : "Project two",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "

      },
      {
        toDoName : "Project three",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "

      },
      {
        toDoName : "Project four",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "

      },
    ];
    if (data.length) { setTimeout(() => {
      this.toDoSlice = data ;
      resolve(data) }, 1000)}
    else { reject ("No data available")}
  })

  */

  setTimeout(() => {

    this.todos = [
      {
        toDoName : "Project one",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "
      },
      {
        toDoName : "Project two",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "

      },
      {
        toDoName : "Project three",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "

      },
      {
        toDoName : "Project four",
        status : true,
        image : "http://placeimg.com/150/150/tech",
        isModif : false ,
        description : "Lorem Epsum ........ "

      },
    ];
  this.emitTodos();
  }, 300);

}

emitTodos () {
  this.toDoSubject.next(this.todos)
}

addTodo (todo : Todo) : void {
  this.todos.unshift(todo);
  this.emitTodos();
}

}
