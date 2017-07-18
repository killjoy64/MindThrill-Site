import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./views/index/index.component";
import { RoomsPirateComponent } from "./views/rooms/sunviews/pirates/pirates.component";
import { BookingComponent } from "./views/booking/booking.component";
import { LeaderboardsComponent } from "./views/leaderboards/leaderboards.component";

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'about', component: IndexComponent },
  { path: 'rooms', component: RoomsPirateComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'leaderboards', component: LeaderboardsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
