import { Injectable } from '@angular/core';
import helper from '../constant/helper';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('accept', 'application/json')
  .set('x-api-key', '6221c617-1380-4912-88eb-ba737be2b8ce');

  const Authheaders= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('accept', 'application/json');
    
    
@Injectable({
  providedIn: 'root'
})

export class FastapiService {

 constructor(private http: HttpClient) {}

 createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

 
  location_Statistics(locationid: string,apikey:string) {
    let contentheaders= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('accept', 'application/json')
  .set('x-api-key', apikey);
   return this.http.get(helper.statisticsbyLocation+locationid,{ 'headers': contentheaders });
  }
  client_statistic(clientid: string) {
    //this.createAuthorizationHeader(this.headers);
   return this.http
      .post(helper.statictics, {
        clientid: clientid
      },{ 'headers': headers })
      .subscribe(() => {
       
      });
  }
  Authentication( API_key: string) {
   return this.http
      .post(helper.auth, {
        api_key: API_key
      })
      .subscribe(() => {
       
      });
    }
}
