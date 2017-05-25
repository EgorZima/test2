import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IMDBService {
    public url: string  = 'http://www.myapifilms.com/imdb/top';

    private constructor( private http: Http) {}

    public getTopList(): Observable<Movie[]> {
        return this.http.get(this.url).map((res: Response) => res.json());
    }
  }