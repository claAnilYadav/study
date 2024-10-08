import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../env/environment.dev';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private toastr : ToastrService) { }

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   // const jwt = this.authService.getToken();
  //   const jwt = (!request.url.includes("login") && request.url.includes("api.imagexlabs.com")) ? `Bearer ${sessionStorage.getItem('access_token')}` : '';
  //   return next.handle(request.clone({ setHeaders: { authorization: jwt } })).pipe(
  //     tap((event: HttpEvent<any>) => {
  //       if (!request.url.includes("login") && request.url.includes("api.imagexlabs.com")) {
  //         console.log("event===", event);
  //         if (event instanceof HttpResponse) {
  //           if (event.status == 200) {

  //           } else {
  //             console.log('session expired');
  //           }
  //         }
  //       }
  //     })
  //   );
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
        if (request.url.includes(environment.API_URL)) {
          // auto logout if 401 or 403 response returned from api
          this.authService.logout();
          this.toastr.warning('Session expired please login again!');
        }
      }
      const error = (err && err.error && err.error.message) || err.statusText;
      console.log(err);
      return throwError(error);
    }))
  }
}
