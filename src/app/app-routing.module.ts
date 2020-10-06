import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventlistComponent } from './eventlist/eventlist.component';

const routes: Routes = [
  { path: '', component: EventlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
