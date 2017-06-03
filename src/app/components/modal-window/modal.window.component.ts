import { Component, OnInit} from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FilmService } from '../../services/film.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'modal-window',
  templateUrl: './modal.window.component.html',
})
export class ModalWindowComponent {
  constructor(public dialogRef: MdDialogRef<ModalWindowComponent>,
             private filmService: FilmService,
             private sanitizer: DomSanitizer) {}

  public film;
  ngOnInit() {
      this.film = this.filmService.getCurrentFilm();
  }
  
  getUrl() {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.film.youtubeID)  
  }
  
}
