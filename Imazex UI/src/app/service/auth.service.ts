import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../env/environment.dev';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  public login(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('X-Requested-With', 'XMLHttpRequest')
    };
    // return this.http.post(`${environment.API_URL}imagex/login/`, payload, header);
    // payload = JSON.stringify(payload, function (key, value) { return value === null ? "" : value });
    payload = JSON.parse(JSON.stringify(payload));
    return this.http.post(`${environment.API_URL}account/login/`, payload)
      .pipe(map((res: any) => {
        var data: any = res;
        if (data.status_code == 200) {
          console.log(data)
          sessionStorage.setItem('client_data', JSON.stringify(data.data.client_data));
          sessionStorage.setItem('user_data', JSON.stringify(data.data.user_data));
          sessionStorage.setItem('access_token', data.data.access_token);
        }
        return data;
      }));
  }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  public signOut() {
    return this.http.post(`${environment.API_URL}imagex/logout/`, {});
  }

  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith'
    });
  }

  getToken(): string {
    return JSON.stringify(sessionStorage.getItem('access_token'));
  }
}
