import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventAddComponent } from './event-add/event-add.component';
import { EventlistComponent } from './eventlist/eventlist.component';

const routes: Routes = [
  { path: '', component: EventlistComponent ,data:{title: 'Events'}},
  // {path:"eventadd/:eventname/:availableseats:/:eventimg",component:EventAddComponent,data:{title: 'Event Add'}},
  {path:"eventadd/:eventname/:availableseats/:eventimg",component:EventAddComponent,data:{title: 'Event Add'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
