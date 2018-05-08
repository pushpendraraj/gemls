import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  APIURL = environment.apiUrl;
  constructor( private http: Http ) { }

  getShippings(): Observable<any> {
    return this.http.get(this.APIURL + 'list-shipping/')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }
  contact(userData): Observable<any> {
    return this.http.post(this.APIURL + 'contact-us/', userData)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

}
