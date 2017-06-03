import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';


import { IMDBService } from './services/IMDB.service';
import { FilmService } from './services/film.service';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { ModalWindowComponent } from './components/modal-window/modal.window.component';
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
    TopTwentyComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [IMDBService, FilmService],
  bootstrap: [AppComponent],
  entryComponents: [ModalWindowComponent], 
})
export class AppModule { }


