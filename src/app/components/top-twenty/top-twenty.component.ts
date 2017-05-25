import { Component, OnInit } from '@angular/core';

import { IMDBService } from '../../services/IMDB.service';

@Component({
  selector: 'top-twenty',
  templateUrl: './top-twenty.component.html'
})
export class TopTwentyComponent {
      public topList: Movie[] = [];

      private constructor( private imdbService: IMDBService) {}

      public ngOnInit(): void {
        this.imdbService.getTopList().subscribe(
          (res: Movie[]) => this.topList = res
        );


      }
}
