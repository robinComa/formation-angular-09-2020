import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Before Request :
    const start = Date.now();
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        // On Response (Error) :
        alert(err.message);
        return throwError(err.message);
      }),
      finalize(() => {
        // On Response (Success) :
        const end = Date.now();
        const time = end - start;
        console.log(`${request.method} ${request.url} : ${time}ms`);
      })
    );
  }
}
