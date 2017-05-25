import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable() 
export class IMDBService {           
    constructor( private http: Http) {}

    url = 'http://www.myapifilms.com/imdb/top';

    public getTopList() {
        return this.http.get(this.url)
                        .map(res => res.json())
    }
 }