import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/service/dashboard.service';
import { locations } from 'src/app/model/location';
import { TableUtil } from '../../constant/tableUtil';
import * as XLSX from "xlsx";


@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {
  displayedColumns: string[] = ['loc_name', 'description', 'imagex_api_key'];
  dataSource: MatTableDataSource<locations> = new MatTableDataSource<locations>([]);
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(public dialog: MatDialog, private fb: FormBuilder, private dashboardService: DashboardService) { }
  ngOnInit(): void {
    this.getLocationList();
  };

  getLocationList() {
    this.dashboardService.getLocationList().subscribe((res: any) => {
      console.log(res)
      if (res?.status_code == 200) {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  exportTable() {
    TableUtil.exportTableToExcel("locationstats");
  }

  exportNormalTable() {
    TableUtil.exportTableToExcel("locationstats");
  }

  addLocation(): void {
    const dialogRef = this.dialog.open(locationAddDialog, {
      data: {},
      height: '450px',
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.getLocationList();
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'location-popup',
  templateUrl: 'location-popup.html',
})
export class locationAddDialog implements OnInit {
  public locationForm: FormGroup | any;
  countryList: any[] = [];
  constructor(public fb: FormBuilder,
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<locationAddDialog>,
  ) {
    this.locationForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList() {
    this.dashboardService.getCountryList().subscribe((res: any) => {
      console.log(res)
      if (res?.status_code == 200) {
        this.countryList = res.data;
      }
    });
  };

  onNoClick(): void {
    this.dialogRef.close();
    this.locationForm.reset();
  }

  save() {
    const value = this.locationForm.value;
    const payload = {
      name: value.name,
      description: value.description,
      country_name: value.country,
    }
    let client_data: any = sessionStorage.getItem('client_data');
    client_data = JSON.parse(client_data);
    this.dashboardService.createLocation(payload, client_data?.id).subscribe((res: any) => {
      console.log(res)
      if (res?.status_code == 200) {
        this.onNoClick();
      }
    });
  }
}

