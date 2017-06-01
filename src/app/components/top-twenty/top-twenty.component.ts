import { Component, OnInit} from '@angular/core';
import { IMDBService } from '../../services/IMDB.service';
import { FilmService } from '../../services/film.service';
import { MdDialog } from '@angular/material';
import { ModalWindowComponent } from '..//modal-window/modal.window.component';

@Component({
  selector: 'top-twenty',
  templateUrl: './top-twenty.component.html',
  styleUrls: ['top-twenty.component.css'],
})
export class TopTwentyComponent {
      public topList = [];

      public constructor( private imdbService: IMDBService,
                          private filmService: FilmService,
                          private dialog: MdDialog) {}
      
      public ngOnInit(): void {
        this.imdbService.getTopList().subscribe(
          (res: any) =>  { 
            this.topList = res.data.movies;
            
            for (let i = 0; i < this.topList.length; i++) {
              this.imdbService.getYotubeId(this.topList[i].title).subscribe(
                (res: any) => this.topList[i].youtubeID = (res.items[0].id.videoId)  
              )
              this.topList[i].favorite = false;
            }
          }
        )  
      }
      
      public addToFavorites(film, e): void {
        film.favorite = !film.favorite;
        localStorage.setItem('Favorites', JSON.stringify(film));
        
        if(film.favorite) {
          e.target.className += ' favorited';
          return
        }
        e.target.classList.remove('favorited');
      }
     
      public openDialog(film, e): void {
        e.preventDefault();
        
        this.filmService.setCurrentFilm(film);
        let dialogRef = this.dialog.open(ModalWindowComponent);
      }     
}

