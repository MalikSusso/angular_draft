import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  //salutation : Subscription ;
  nombrePairSubscription : Subscription ;
  seconde : number ;

  constructor() { }

  ngOnInit(): void {

    const nombrePair = new Observable((obs)=>{
      let value = 0;

      const interval = setInterval(()=>{
        //if (value % 2 === 0)
        {
          obs.next(value);
        }
        value++;
      },1000);
      return () => clearInterval(interval) ;
    })


      this.nombrePairSubscription = nombrePair.subscribe (
        (value : number) => {
          this.seconde = value;
          console.log("Le nombre :" +value);}
      )

  }

  ngOnDestroy(): void {
    this.nombrePairSubscription.unsubscribe();

  }

}
