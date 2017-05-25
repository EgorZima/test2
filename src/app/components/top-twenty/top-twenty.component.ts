import { Component, OnInit } from '@angular/core';

import { IMDBService } from "../../services/IMDB.service"

@Component({
  selector: 'top-twenty',
  templateUrl: './top-twenty.component.html'
})
export class TopTwentyComponent {
      constructor( private imdbService: IMDBService){}
      
      topList;

      ngOnInit() {
        this.imdbService.getTopList().subscribe(
          res => this.topList = res
        );

        
      }
}
