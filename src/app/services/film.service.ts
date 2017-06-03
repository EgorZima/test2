import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
    public currentFilm;

    public getCurrentFilm(): void {
        return this.currentFilm;
    }

    public setCurrentFilm(film): void {
        this.currentFilm = film;
    }
   
}


