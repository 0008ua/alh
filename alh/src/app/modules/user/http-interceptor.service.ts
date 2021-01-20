import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})

export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private store: Store<State>,
    private userService: UserService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // to modify request
    // req = req.clone();
    // return next.handle(req);

    // modify response
    return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // console.log('event', event.headers.get('Content-language'));

            // event = event.clone({ body: this.modifyBody(event.body) });
          }
          return event;
        }),

    );
  }


  private modifyBody(body: any) {
    /*
    * write your logic to modify the body
    * */
    return body;
  }
}


