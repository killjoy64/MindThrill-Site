import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from "./views/index/index.component";
import { HomeComponent } from "./views/home/home.component";
import { RoomsComponent } from "./views/rooms/rooms.component";
import { RoomsPirateComponent } from "./views/rooms/sunviews/pirates/pirates.component";
import { AboutComponent } from "./views/about/about.component";
import { FAQComponent } from "./views/faq/faq.component";
import { ContactComponent } from "./views/contact/contact.component";

import { AppRoutingModule } from "./app-routing.module";
import { BookingComponent } from "./views/booking/booking.component";
import {LeaderboardsComponent} from "./views/leaderboards/leaderboards.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    AboutComponent,
    RoomsComponent,
    RoomsPirateComponent,
    FAQComponent,
    ContactComponent,
    BookingComponent,
    LeaderboardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
