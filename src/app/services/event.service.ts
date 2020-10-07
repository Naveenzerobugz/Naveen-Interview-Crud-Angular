import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { EventlistModule } from './eventlist/eventlist.module';
@Injectable({
  providedIn: 'root'
})
export class EventService {
eventlist:EventlistModule[]
api:string='https://event-booking-application.herokuapp.com/'
  constructor(private HttpClient: HttpClient) { }
  findevents(eventname:string){
    var data={
      eventname:eventname
    }
    return this.HttpClient.post(this.api+'findevent',data);
  }
}
