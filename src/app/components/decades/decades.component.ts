import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'decades',
  templateUrl: './decades.component.html',
  styleUrls: ['decades.component.css']
})
export class DecadesComponent {
  public doughnutChartLabels:string[] = ['1950s','1960s','1970s','1980s','1990s','2000s','2010s'];
  public doughnutChartData = [2, 1, 4, 1, 7, 4, 1];
  public doughnutChartType:string = 'doughnut';
  public topList = JSON.parse(localStorage.getItem('topList'));
  public currentFilms = [];

  public chartClicked(e:any):void {
    this.currentFilms = [];
    
    let index = e.active[0]._index;
    let index2 = this.doughnutChartLabels[index].split('').splice(2,1).join('');
      
    for (let i = 0; i < this.topList.length; i++) {
        if (+this.topList[i].decade === +index2) {
          this.currentFilms.push(this.topList[i])
        }
    }  
  } 
}