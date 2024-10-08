import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
     
  headers?:HttpHeaders;
 constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }
  
  /*get(url:string) {
      var header= new Headers();
      this.createAuthorizationHeader(header);
      return this.http.get(url, {.headers:header
      });
    }

    post(url:string, data:any) {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.post(url, data, {
        'headers:' headers
      });
    }*/
  
}




