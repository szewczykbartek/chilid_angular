import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()

export class CommentsAddService {
  constructor(private http: HttpClient) { }

  postComments(text) {
    return this.http.get('http://chilid.hypotheticalpeople.com/api/comments_add.php?text=' + text).pipe();
  }
}
