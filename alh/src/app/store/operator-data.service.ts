import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { User } from '../interface';

@Injectable()

export class OperatorDataService extends DefaultDataService<User> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Operator', http, httpUrlGenerator);
  }
  getAll(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-language': 'en-US',
      }),
    };
    const urlPath = this.httpUrlGenerator.collectionResource('Operator', '');
    console.log('urlPath', urlPath);
    return this.http.get<User[]>(urlPath, httpOptions);
  }
}
