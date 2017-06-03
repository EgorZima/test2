import { Component } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { MdDialog } from '@angular/material';
import { ModalWindowComponent } from '..//modal-window/modal.window.component';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['favorites.component.css'] 
})
export class FavoritesComponent {
  public favorites = [];
  public title = '';
  public topList = JSON.parse(localStorage.getItem('topList'));

  public constructor(private filmService: FilmService,
                      private dialog: MdDialog) {}

  public ngOnInit(): void {
      localStorage['favorites'] = [];
      let top = JSON.parse(localStorage.getItem('topList'));
      for (let i = 0; i < top.length; i++) {
          if (top[i].favorite) {
            this.favorites.push(top[i]);
          }    
      }
      (this.favorites) ? (this.title = 'Your Favorites Films') : (this.title = 'There Are No Favorite Films Here')
      localStorage['favorites'] = JSON.stringify(top);
  } 

  public updateField(fieldId, data): void {
      localStorage[fieldId] = JSON.stringify(data);
  }

  public openDialog(film, e): void {
      e.preventDefault();
        
      this.filmService.setCurrentFilm(film);
      let dialogRef = this.dialog.open(ModalWindowComponent);
  }  

  public deleteFilm(film): void {
      let favoriteIndex = this.favorites.findIndex(i => i.title === film.title);
      this.favorites.splice(favoriteIndex, 1);

      let topIndex = this.topList.findIndex(i => i.title === film.title);
      let top = JSON.parse(localStorage.getItem('topList'))
      top[topIndex].favorite = false;
      localStorage['topList'] = JSON.stringify(top);

      this.updateField('favorites', this.favorites);
  }

}