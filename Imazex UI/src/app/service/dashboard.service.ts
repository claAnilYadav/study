import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../env/environment.dev';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient, private authService: AuthService) { }
  public getClientPackages(data: any) {
    const jwt = 'Bearer ' + sessionStorage.getItem('access_token');
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', jwt)
    };
    return this.http.get(`${environment.API_URL}account/client-packages/${data}`, header);
  }

  public getAccountDetail(data: any) {
    const jwt = 'Bearer ' + sessionStorage.getItem('access_token');
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', jwt)
    };
    return this.http.get(`${environment.API_URL}imagex/account/${data}/?account_status=true`, header);
  }
  public getCountryList() {
    const jwt = 'Bearer ' + sessionStorage.getItem('access_token');
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', jwt)
    };
    return this.http.get(`${environment.API_URL}account/countries`, header);
  }
  public getUserProfile() {
    const jwt = 'Bearer ' + sessionStorage.getItem('access_token');
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', jwt)
    };
    return this.http.get(`${environment.API_URL}account/user/profile/`, header);
  }

  public getLocationList() {
    const jwt = 'Bearer ' + sessionStorage.getItem('access_token');
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', jwt)
    };
    return this.http.get(`${environment.API_URL}account/list/location/`, header);
  }

  public createLocation(payload: any, clientId: string) {
    const jwt = 'Bearer ' + sessionStorage.getItem('access_token');
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', jwt)
    };
    return this.http.post(`${environment.API_URL}account/location/${clientId}/`, payload, header);
  }
}
