import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()

export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<any[]>('http://chilid.hypotheticalpeople.com/api/comments_list.php').pipe();
  }

}
