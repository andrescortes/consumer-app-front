import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { SpinnerService } from '../../shared/services/spinner.service';
import { catchError, throwError, finalize, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly spinnerService: SpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() => this.spinnerService.show()),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Something went wrong';
        if (error.status === 400) {
          errorMessage = 'Request is invalid, please check your data';
        } else if (error.status === 401) {
          errorMessage = 'Unauthorized';
        } else if (error.status === 403) {
          errorMessage =
            'Forbidden, you do not have permission to access this resource';
        } else if (error.status >= 500) {
          errorMessage = 'The server encountered an internal error';
        }
        return throwError(() => new Error(errorMessage));
      }),
      finalize(() => this.spinnerService.hide())
    );
  }
}
