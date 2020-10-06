import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EventlistModule { 
  eventid:number;
  eventname:string;
  eventdate:string;
  availableseats:number;
  eventimg:string;
}
