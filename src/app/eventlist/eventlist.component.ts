import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { EventlistModule } from '../services/eventlist/eventlist.module';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
eventlist:[]
  constructor(private eventlistservice:EventService,private router: Router) {
    this.eventlistservice.findevents("").subscribe((res)=>{
            if (res['status']=='success') {
              this.eventlist=res['eventlist'];       
            } 
          })
   }

  ngOnInit(): void {
    
  }
  findeventlist(event: any){
    this.eventlistservice.findevents(event.target.value).subscribe((res)=>{
      if (res['status']=='success') {
        this.eventlist=res['eventlist']         
      } 
    })
  }
  bookingevent(eventlist:[]){
    this.router.navigate(['/eventadd',eventlist['eventname'],eventlist['availableseats'],eventlist['eventimg']]);
  }
}
