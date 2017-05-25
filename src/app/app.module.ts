import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { IMDBService } from "./services/IMDB.service";
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DecadesComponent } from './components/decades/decades.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { TopTwentyComponent } from './components/top-twenty/top-twenty.component';  
     

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DecadesComponent,
    FavoritesComponent,
    TopTwentyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [IMDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
