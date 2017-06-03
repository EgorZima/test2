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
        if(!localStorage['topList']) { 
          this.imdbService.getTopList().subscribe(
            (res: any) => { 
              let top = res.data.movies;
              
              for (let i = 0; i < top.length; i++) {
                this.imdbService.getYotubeId(top[i].title).subscribe(
                  (res: any) => top[i].youtubeID = (res.items[0].id.videoId)  
                )
                top[i].favorite = false;
                top[i].decade = this.topList[i].year.split('').splice(2,1).join(''); 

                this.topList.push(top[i]);
              }
              localStorage['topList'] = JSON.stringify(top);
            }
          )
          return
        } 
        this.topList = JSON.parse(localStorage.getItem('topList'));
      }
      
      public addToFavorites(film, e): void {
        let index = this.topList.findIndex(i => i.title === film.title);
        this.topList[index].favorite = !this.topList[index].favorite;
        this.updateField('topList', this.topList);
        
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

      
      public updateField(fieldId, data): void  {
       	localStorage[fieldId] = JSON.stringify(data);
      }   
}

