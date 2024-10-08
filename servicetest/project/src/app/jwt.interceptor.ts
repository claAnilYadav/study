import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class jwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
      const authToken = 'b27c6f0d2bb7128dASSSSASSSSTTTT';
          request = request.clone({
              setHeaders: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Authorization': 'Bearer ' + authToken,
              }
          });
      return next.handle(request);
    }
}
