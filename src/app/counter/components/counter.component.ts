import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template: `
   <h3>CONTADOR: {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>


  `
})
export class CounterComponent{
 constructor(){

 }
 counter: number = 10;

 increaseBy(value: number): void {

     this.counter += value;
 }

 reset():void{
   this.counter=10;
 }



}
