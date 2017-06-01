import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {
  public favorites = [];
  
  ngOnInit() {
    this.favorites.push(localStorage.getItem('Favorites'));
    console.log(this.favorites)
  }
}
