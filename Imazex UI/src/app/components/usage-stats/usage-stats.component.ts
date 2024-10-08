import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { accounting } from 'src/app/model/accounting';
import { LIST_API_KEYS } from '../../constant/bkgimg';
import { usagestats } from '../../model/usage-stats';
import { FastapiService } from '../../service/fastapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DashboardService } from 'src/app/service/dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { locationlist } from 'src/app/model/location-imagex';
import { TableUtil } from '../../constant/tableUtil';
import * as XLSX from "xlsx";


const ELEMENT_DATA: usagestats[] = [];

@Component({
  selector: 'app-usage-stats',
  templateUrl: './usage-stats.component.html',
  styleUrls: ['./usage-stats.component.scss']
})
export class UsageStatsComponent implements OnInit {
  countryList: any[] = [];
  displayedColumns: string[] = ['date', 'todate', 'name','country', 'accounting'];
  accountdetail: accounting[] = [];
  filterForm: FormGroup | any;
  locationlist: locationlist[] = [];
  dataSource: MatTableDataSource<usagestats> = new MatTableDataSource<usagestats>([]);
  public locationDataList: usagestats[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService, private datePipe: DatePipe, private _api: FastapiService, private fb: FormBuilder) { }
  ngOnInit(): void {
    //this.loadLocationStats();
    this.filterForm = this.fb.group({
      toDate: [''],
      fromDate: [''],
      country: [''],
    });
    this.getLocationList();
    this.getCountryList();
    //this.loadLocationStats();
   
    //console.log(this.accountdetail);
  }


  getCountryList() {
    this.dashboardService.getCountryList().subscribe((res: any) => {
      console.log(res)
      if (res?.status_code == 200) {
        this.countryList = res.data;
      }
    });
  };

  getLocationList() {
    this.dashboardService.getLocationList().subscribe((res: any) => {
     // console.log(res)
      if (res?.status_code == 200) {
        for (let index = 0; index < res?.data.length; index++)
        {
           this.locationlist.push(res?.data[index]);
        }       
        if (this.locationlist.length > 0) { 
          this.loadLocationStats();
        }
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  loadLocationStats() {
    //callResponses = [];
    if (this.locationlist?.length > 0) {
      for (let index = 0; index < this.locationlist?.length; index++) {
        this._api.location_Statistics( this.locationlist[index].imagex_location_id, this.locationlist[index].imagex_api_key).subscribe(
          (res: any) => {
            this.accountdetail.push(res);
            // console.log(this.accountdetail);
           // this.binddata(this.accountdetail);
          }, (error: any) => {
           // if (typeof error['Errors'] != "undefined") {
              console.log(error);
           // }
          });

      }
      if (this.accountdetail?.length > 0) {
        console.log('call binding data '+ this.accountdetail?.length);
        this.binddata(this.accountdetail);
      }
    }
  }

  binddata(accountdetail: any[]) {
    console.log(accountdetail.length);
    if (accountdetail.length > 0)
      for (let index = 0; index < accountdetail.length; index++) {

        if (accountdetail[index].length > 0) {
          let elementdata = LIST_API_KEYS.filter(item => item.locationid === accountdetail[index].flat()[0].location_id);
          if (elementdata.length > 0) {
            let indexdata = accountdetail[index].length;
            var createdate = new Date(accountdetail[index].flat()[0].created_at);
            var updatedate = new Date(accountdetail[index].flat()[accountdetail[index].flat().length-1].created_at);
            const formatedDate = updatedate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })
            const toDate = createdate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })           
            const object = { date: formatedDate.toString(), todate: toDate.toString(), name: elementdata[0].name,country: elementdata[0].country, accounting: accountdetail[index].length };
            ELEMENT_DATA.push(object);    
          }
        }
       // console.log(ELEMENT_DATA);
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.locationDataList = ELEMENT_DATA;
      }
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showFilterSection: boolean = false;
  filterSection() {
    this.showFilterSection = !this.showFilterSection;
    if (!this.showFilterSection) { this.dataSource = new MatTableDataSource(this.locationDataList); this.filterForm.reset(); }
  }
  clearFilter() {
    this.showFilterSection = false;
    this.dataSource = new MatTableDataSource(this.locationDataList);
    this.filterForm.reset();
  }

  searchLoaction() {
    let record = this.locationDataList.filter(res => {
      return ((new Date(res.date).toLocaleDateString('en-ca') >= new Date(this.filterForm.value.fromDate).toLocaleDateString('en-ca')) &&
        (new Date(res.todate).toLocaleDateString('en-ca') <= new Date(this.filterForm.value.toDate).toLocaleDateString('en-ca')));
    })
    this.dataSource = new MatTableDataSource(record);
  }

  exportTable() {
    TableUtil.exportTableToExcel("locationstats");
  }

  exportNormalTable() {
    TableUtil.exportTableToExcel("locationstats");
  }

  // exportArray() {
  //   const onlyNameAndSymbolArr: Partial<usagestats>[] = this.dataSource.map(x => ({
  //     name: x.name,
  //     symbol: x.symbol
  //   }));
  //   TableUtil.exportArrayToExcel(onlyNameAndSymbolArr, "ExampleArray");
  // }
}

