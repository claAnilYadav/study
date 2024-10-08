import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css', 
})
export class HomeComponent implements OnInit {
  thumbnail: any[] = [];
  constructor(private httpClient : HttpClient, private deviceDetectorService: DeviceDetectorService) { }

  callApiHandler() {
    // this.httpClient.get('https://dummyjson.com/products').subscribe((res: any)=>{ 
      this.httpClient.get<any>('https://api.saintfarms.com/api/appInfo').subscribe((res: any)=>{ 
      // const thumbnail = res;
      console.log(res);
    });
  }


  ngOnInit(): void {
    this.callApiHandler();
    // const deviceInfo = this.deviceDetectorService.getDeviceInfo();
    // console.log(deviceInfo);

    const deviceId = this.deviceDetectorService.getDeviceInfo();
    console.log("Device ID:", deviceId);

  }

}
