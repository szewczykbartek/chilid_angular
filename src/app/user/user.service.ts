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

export class UserService {
  constructor(private http: HttpClient) { }

  userCountList() {
    return this.http.get('http://chilid.hypotheticalpeople.com/api/counter_list.php').pipe();
  }

  userCountListOne(system) {
    return this.http.get('http://chilid.hypotheticalpeople.com/api/counter_listone.php?system=' + system).pipe();
  }

  userCountUpdate(system, method) {
    return this.http.get<any[]>('http://chilid.hypotheticalpeople.com/api/counter_update.php?system=' + system + '&method=' + method).pipe();
  }
}
