import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IMDBService {
    public constructor( private jsonp:Jsonp) {}

    public getTopList(): Observable<Movie[]> {
        
        return this.jsonp.get('http://www.myapifilms.com/imdb/top?callback=JSONP_CALLBACK&start=1&end=20&token=e7c3c275-2cac-4a82-a5a3-2e906d2602e0&format=json&data=1')
                  .map(res => res.json());
    }

    public getYotubeId(title): Observable<Movie[]> {
                         
        return this.jsonp.get(`https://www.googleapis.com/youtube/v3/search?callback=JSONP_CALLBACK&part=snippet&maxResults=3&q=${title}-trailer&key=AIzaSyDWONBwzlrfyKPrqWvJc2j4BKEZTLZkhyY`)
                  .map(res => res.json());
    }

      

      
  }


